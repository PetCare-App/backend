import { Injectable, NotFoundException } from '@nestjs/common';
import { PetsService } from 'src/modules/pets/service/pets.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVaccineDto } from '../dtos/create-vaccine.dto';
import { UpdateVaccineDto } from '../dtos/update-vaccine.dto';
import { Vaccine } from '../entities/vaccine.entity';

@Injectable()
export class VaccinesService {
  constructor(
    private prisma: PrismaService,
    private petsService: PetsService,
  ) {}

  async create(createVaccineDto: CreateVaccineDto): Promise<Vaccine> {
    const pet = await this.petsService.findById(createVaccineDto.petId);
    if (pet) {
      return this.prisma.vaccine.create({
        data: { ...createVaccineDto },
      });
    }
  }

  async findAll(): Promise<Vaccine[]> {
    const vaccines = await this.prisma.vaccine.findMany({
      orderBy: {
        id: 'asc',
      },
    });
    return vaccines;
  }

  async findOne(id: number) {
    const vaccine = await this.prisma.vaccine.findFirst({ where: { id } });
    if (!vaccine) {
      throw new NotFoundException('Ops... Vaccine not found. :(');
    }
    return vaccine;
  }
  
  async findByPetId(petId: number){
    const pet = await this.petsService.findById(petId);
    const vaccine = await this.prisma.vaccine.findFirst({ where: { petId: petId } }); 
    if (!pet || !vaccine) {
      throw new NotFoundException('Ops... Record not found. :(');
    }
    return vaccine;
  }

  async update(id: number, updateVaccineDto: UpdateVaccineDto) {
    const vaccine = await this.findOne(id);
    if (!vaccine) {
      throw new NotFoundException('Ops... Vaccine not found. :(');
    }

    const vaccineUpdated = await this.prisma.vaccine.update({
      where: { id },
      data: { ...updateVaccineDto },
    });

    return vaccineUpdated;
  }

  async remove(id: number) {
    const vaccine = await this.findOne(id);
    const deletedVaccine = await this.prisma.vaccine.delete({
      where: { id },
    });
    if (!vaccine) {
      throw new NotFoundException('Ops... Vaccine not found. :(');
    }
    return deletedVaccine;
  }
}
