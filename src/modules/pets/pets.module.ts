import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [PetsController],
  providers: [PetsService, PrismaService],
  exports: [PetsService],
})
export class PetsModule {}
