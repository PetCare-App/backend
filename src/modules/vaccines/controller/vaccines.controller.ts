import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { format } from 'date-fns';
import { MailService } from 'src/modules/mail/mail.service';
import { PetsService } from 'src/modules/pets/service/pets.service';
import { UsersService } from 'src/modules/users/service/users.service';
import { CreateVaccineDto } from '../dtos/create-vaccine.dto';
import { UpdateVaccineDto } from '../dtos/update-vaccine.dto';
import { VaccinesService } from '../service/vaccines.service';

@Controller('vaccines')
export class VaccinesController {
  constructor(
    private readonly vaccinesService: VaccinesService,
    private readonly petService: PetsService,
    private readonly userService: UsersService,
    private readonly mailService: MailService,
  ) {}

  @Post()
  async create(@Body() createVaccineDto: CreateVaccineDto) {
    if (createVaccineDto.petId) {
      const teste = await this.petService.findById(createVaccineDto.petId);
      const findUser = await this.userService.findById(teste.userId);
      this.mailService.sendMailVaccine(
        findUser.email,
        findUser.fullname,
        createVaccineDto.name,
        format(createVaccineDto.date, 'dd/MM/yyyy'),
        teste.name,
      );
    }
    return await this.vaccinesService.create(createVaccineDto);
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
    if (updateVaccineDto.petId) {
      const teste = await this.petService.findById(updateVaccineDto.petId);
      const findUser = await this.userService.findById(teste.userId);
      this.mailService.sendMailVaccineUpdate(
        findUser.email,
        findUser.fullname,
        updateVaccineDto.name,
        format(updateVaccineDto.date, 'dd/MM/yyyy'),
        teste.name,
      );
    }
    return await this.vaccinesService.update(id, updateVaccineDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.vaccinesService.remove(id);
  }
}
