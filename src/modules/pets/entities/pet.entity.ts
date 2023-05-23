import { Prisma } from '@prisma/client';
import { AnimalType } from '../animal-type.enum';

export class Pet implements Prisma.PetUncheckedCreateInput {
  id?: number;
  animalType: AnimalType;
  name: string;
  breed: string;
  gender: string;
  weight: number;
  birthDate: Date;
  userId: number;
}
