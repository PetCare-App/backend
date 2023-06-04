import { Prisma } from '@prisma/client';

export class Vaccine implements Prisma.VaccineUncheckedCreateInput {
  id?: number;
  name: string;
  date: Date;
  petId: number;
}
