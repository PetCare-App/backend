import { Prisma } from '@prisma/client';

export class Pet implements Prisma.PetUncheckedCreateInput {
  id?: number;
  name: string;
  breed: string;
  gender: string;
  weight: number;
  age: number;
  userId: number;
}
