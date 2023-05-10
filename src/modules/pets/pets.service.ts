import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Pet } from '@prisma/client';
import { UsersService } from '../users/service/users.service';

@Injectable()
export class PetsService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
  ) {}

  async create(createPetDto: CreatePetDto): Promise<Pet> {
    const user = await this.usersService.findById(createPetDto.userId);
    if (user) {
      return this.prisma.pet.create({
        data: { ...createPetDto },
      });
    }
  }

  async findAll() {
    const pets = await this.prisma.pet.findMany({
      orderBy: {
        id: 'asc',
      },
      include: {
        user: true,
      },
    });
    return pets;
  }

  async findById(id: number): Promise<Pet> {
    const pet = await this.prisma.pet.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });
    if (!pet) {
      throw new NotFoundException('Ops... Pet not found. :(');
    }
    return pet;
  }

  async update(id: number, updatePetDto: UpdatePetDto): Promise<Pet> {
    const pet = await this.findById(id);
    const user = await this.usersService.findById(updatePetDto.userId);
    if (user && pet) {
      const petUpdated = await this.prisma.pet.update({
        where: { id },
        data: { ...updatePetDto },
      });
      return petUpdated;
    }
  }

  async remove(id: number) {
    const pet = await this.findById(id);
    const deletedPet = await this.prisma.pet.delete({
      where: { id },
    });
    if (!pet) {
      throw new NotFoundException('Ops... Pet not found. :(');
    }
    return deletedPet;
  }
}
