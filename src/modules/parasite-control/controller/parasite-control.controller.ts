import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateParasiteControlDto } from '../dto/create-parasite-control.dto';
import { UpdateParasiteControlDto } from '../dto/update-parasite-control.dto';
import { ParasiteControlService } from '../service/parasite-control.service';

@Controller('parasite-control')
export class ParasiteControlController {
  constructor(
    private readonly parasiteControlService: ParasiteControlService,
  ) {}

  @Post()
  async create(@Body() createParasiteControlDto: CreateParasiteControlDto) {
    return this.parasiteControlService.create(createParasiteControlDto);
  }

  @Get()
  async findAll() {
    return await this.parasiteControlService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.parasiteControlService.findOne(id);
  }

  @Get('pet/:id')
  async findByPetId(@Param('id') id: number) {
    return await this.parasiteControlService.findByPetId(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateParasiteControlDto: UpdateParasiteControlDto,
  ) {
    return await this.parasiteControlService.update(
      id,
      updateParasiteControlDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.parasiteControlService.remove(id);
  }
}
