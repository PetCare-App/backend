import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PetsModule } from '../pets/pets.module';
import { VaccinesController } from './controller/vaccines.controller';
import { VaccinesService } from './service/vaccines.service';

@Module({
  imports: [PetsModule],
  controllers: [VaccinesController],
  providers: [VaccinesService, PrismaService],
  exports: [VaccinesService],
})
export class VaccinesModule {}
