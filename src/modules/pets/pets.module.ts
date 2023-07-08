import { Module, forwardRef } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { HygieneModule } from '../hygiene/hygiene.module';
import { ParasiteControlModule } from '../parasite-control/parasite-control.module';
import { UsersModule } from '../users/users.module';
import { VaccinesModule } from '../vaccines/vaccines.module';
import { PetsController } from './controller/pets.controller';
import { PetsService } from './service/pets.service';

@Module({
  imports: [
    UsersModule,
    forwardRef(() => VaccinesModule),
    forwardRef(() => HygieneModule),
    forwardRef(() => ParasiteControlModule),
  ],
  controllers: [PetsController],
  providers: [PetsService, PrismaService],
  exports: [PetsService],
})
export class PetsModule {}
