import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { AnimalType } from '../animal-type.enum';
import { TransformDate } from '../transform-date.decorator';

export class CreatePetDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(AnimalType)
  animalType: AnimalType;

  @IsNotEmpty()
  @IsString()
  breed: string;

  @IsNotEmpty()
  @IsString()
  gender: string;

  @IsNotEmpty()
  @IsNumber()
  weight: number;

  @IsNotEmpty()
  @TransformDate
  @IsDate()
  birthDate: Date;

  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
