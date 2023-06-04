import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePetDto } from '../dtos/create-pet.dto';
import { UpdatePetDto } from '../dtos/update-pet.dto';
import { PetsService } from '../service/pets.service';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() createPetDto: CreatePetDto) {
    return await this.petsService.create(createPetDto);
  }

  @Get()
  async findAll() {
    return await this.petsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.petsService.findById(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updatePetDto: UpdatePetDto) {
    return await this.petsService.update(id, updatePetDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.petsService.remove(id);
  }
}
