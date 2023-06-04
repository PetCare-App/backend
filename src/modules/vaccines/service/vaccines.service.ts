import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVaccineDto } from '../dtos/create-vaccine.dto';
import { UpdateVaccineDto } from '../dtos/update-vaccine.dto';
import { Vaccine } from '../entities/vaccine.entity';

@Injectable()
export class VaccinesService {
  constructor(private prisma: PrismaService) {}

  async create(createVaccineDto: CreateVaccineDto): Promise<Vaccine> {
    return this.prisma.vaccine.create({ data: { ...createVaccineDto } });
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
