import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { TransformDate } from 'src/modules/pets/transform-date.decorator';

export class CreateHygieneDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @TransformDate
  @IsDate()
  date: Date;

  @IsNotEmpty()
  @IsNumber()
  petId: number;
}
