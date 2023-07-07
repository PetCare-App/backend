import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailModule } from '../mail/mail.module';
import { PetsModule } from '../pets/pets.module';
import { UsersModule } from '../users/users.module';
import { VaccinesController } from './controller/vaccines.controller';
import { VaccinesService } from './service/vaccines.service';

@Module({
  imports: [PetsModule, MailModule, UsersModule],
  controllers: [VaccinesController],
  providers: [VaccinesService, PrismaService],
  exports: [VaccinesService],
})
export class VaccinesModule {}
