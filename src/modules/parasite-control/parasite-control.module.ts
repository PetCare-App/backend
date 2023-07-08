import { Module, forwardRef } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PetsModule } from '../pets/pets.module';
import { ParasiteControlController } from './controller/parasite-control.controller';
import { ParasiteControlService } from './service/parasite-control.service';

@Module({
  imports: [forwardRef(() => PetsModule)],
  controllers: [ParasiteControlController],
  providers: [ParasiteControlService, PrismaService],
  exports: [ParasiteControlService],
})
export class ParasiteControlModule {}
