import { Prisma } from '@prisma/client';

export class Hygiene implements Prisma.HygieneUncheckedCreateInput {
  id?: number;
  name: string;
  date: Date;
  petId?: number;
}
