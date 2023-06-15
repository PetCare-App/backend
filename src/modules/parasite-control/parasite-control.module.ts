import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PetsModule } from '../pets/pets.module';
import { ParasiteControlController } from './controller/parasite-control.controller';
import { ParasiteControlService } from './service/parasite-control.service';

@Module({
  imports: [PetsModule],
  controllers: [ParasiteControlController],
  providers: [ParasiteControlService, PrismaService],
})
export class ParasiteControlModule {}
