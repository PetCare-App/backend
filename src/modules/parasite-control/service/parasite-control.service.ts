import { Injectable, NotFoundException } from '@nestjs/common';
import { PetsService } from 'src/modules/pets/service/pets.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateParasiteControlDto } from '../dto/create-parasite-control.dto';
import { UpdateParasiteControlDto } from '../dto/update-parasite-control.dto';
import { ParasiteControl } from '../entities/parasite-control.entity';

@Injectable()
export class ParasiteControlService {
  constructor(
    private prisma: PrismaService,
    private petsService: PetsService,
  ) {}

  async create(
    createParasiteControlDto: CreateParasiteControlDto,
  ): Promise<ParasiteControl> {
    const pet = await this.petsService.findById(createParasiteControlDto.petId);
    if (pet) {
      return this.prisma.parasiteControl.create({
        data: { ...createParasiteControlDto },
      });
    }
  }

  async findAll(): Promise<ParasiteControl[]> {
    const parasiteControl = await this.prisma.parasiteControl.findMany({
      orderBy: {
        id: 'asc',
      },
    });
    return parasiteControl;
  }

  async findByPetId(petId: number){
    const pet = await this.petsService.findById(petId);
    const parasiteControl = await this.prisma.parasiteControl.findFirst({ where: { petId: petId } }); 
    if (!pet || !parasiteControl) {
      throw new NotFoundException('Ops... Record not found. :(');
    }
    return parasiteControl;
  }

  async findOne(id: number) {
    const parasiteControl = await this.prisma.parasiteControl.findFirst({
      where: { id },
    });
    if (!parasiteControl) {
      throw new NotFoundException('Ops... Parasite Control not found. :(');
    }
    return parasiteControl;
  }

  async update(id: number, updateParasiteControlDto: UpdateParasiteControlDto) {
    const parasiteControl = await this.findOne(id);
    if (!parasiteControl) {
      throw new NotFoundException('Ops... Parasite Control not found. :(');
    }

    const parasiteUpdated = await this.prisma.parasiteControl.update({
      where: { id },
      data: { ...updateParasiteControlDto },
    });

    return parasiteUpdated;
  }

  async remove(id: number) {
    const parasiteControl = await this.findOne(id);
    const deletedHygiene = await this.prisma.parasiteControl.delete({
      where: { id },
    });
    if (!parasiteControl) {
      throw new NotFoundException('Ops... Parasite Control not found. :(');
    }
    return deletedHygiene;
  }
}
