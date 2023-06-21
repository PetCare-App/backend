import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateVaccineDto } from '../dtos/create-vaccine.dto';
import { UpdateVaccineDto } from '../dtos/update-vaccine.dto';
import { VaccinesService } from '../service/vaccines.service';

@Controller('vaccines')
export class VaccinesController {
  constructor(private readonly vaccinesService: VaccinesService) {}

  @Post()
  async create(@Body() createVaccineDto: CreateVaccineDto) {
    return this.vaccinesService.create(createVaccineDto);
  }

  @Get()
  async findAll() {
    return await this.vaccinesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.vaccinesService.findOne(id);
  }

  @Get('pet/:id')
  async findByPetId(@Param('id') id: number) {
    return await this.vaccinesService.findByPetId(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateVaccineDto: UpdateVaccineDto,
  ) {
    return await this.vaccinesService.update(id, updateVaccineDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.vaccinesService.remove(id);
  }
}
