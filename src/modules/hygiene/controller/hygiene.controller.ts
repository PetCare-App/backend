import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateHygieneDto } from '../dto/create-hygiene.dto';
import { UpdateHygieneDto } from '../dto/update-hygiene.dto';
import { HygieneService } from '../service/hygiene.service';

@Controller('hygiene')
export class HygieneController {
  constructor(private readonly hygieneService: HygieneService) {}

  @Post()
  async create(@Body() createHygieneDto: CreateHygieneDto) {
    return this.hygieneService.create(createHygieneDto);
  }

  @Get()
  async findAll() {
    return await this.hygieneService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.hygieneService.findOne(id);
  }

  @Get(':id')
  async findByPetId(@Param('id') id: number) {
    return await this.hygieneService.findByPetId(id);
  }


  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateHygieneDto: UpdateHygieneDto,
  ) {
    return await this.hygieneService.update(id, updateHygieneDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.hygieneService.remove(id);
  }
}
