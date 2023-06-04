import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersModule } from '../users/users.module';
import { PetsController } from './controller/pets.controller';
import { PetsService } from './service/pets.service';

@Module({
  imports: [UsersModule],
  controllers: [PetsController],
  providers: [PetsService, PrismaService],
  exports: [PetsService],
})
export class PetsModule {}
