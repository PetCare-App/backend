import { Prisma } from '@prisma/client';

export class ParasiteControl
  implements Prisma.parasiteControlUncheckedCreateInput
{
  id?: number;
  name: string;
  date: Date;
  petId?: number;
}
