import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { compare, hash } from 'bcrypt';
import { bcryptConstant } from '../constants';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const passwordHasehd = await hash(
      createUserDto.password,
      bcryptConstant.saltOrRound,
    );

    return this.prisma.user.create({
      data: { ...createUserDto, password: passwordHasehd },
    });
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany({
      orderBy: {
        email: 'asc',
      },
    });
    return users;
  }

  async findById(id: number): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException('Ops... User not found. :(');
    }
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    return this.prisma.user.findFirst({
      where: {
        email,
      },
    });
  }

  async findByUsernamePassword(email: string, password: string): Promise<User> {
    const user = await this.findByEmail(email);

    if (!user)
      throw new UnauthorizedException('Incorrect username or password.');

    await UsersService.validUserPassword(user, password);

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findById(id);

    if (user) {
      user.password = await hash(
        updateUserDto.password,
        bcryptConstant.saltOrRound,
      );
    } else {
      throw new NotFoundException('Ops... User not found. :(');
    }

    const userUpdated = await this.prisma.user.update({
      where: { id },
      data: { ...updateUserDto, password: user.password },
    });

    return userUpdated;
  }

  async remove(id: number) {
    const user = await this.findById(id);
    const deletedUser = await this.prisma.user.delete({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException('Ops... User not found. :(');
    }
    return deletedUser;
  }

  static async validUserPassword(user: User, password: string) {
    const isMatch = await compare(password, user.password);

    if (!isMatch)
      throw new UnauthorizedException(['Incorrect username or password.']);
  }
}
