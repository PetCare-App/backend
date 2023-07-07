import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailModule } from '../mail/mail.module';
import { UsersController } from './controller/users.controller';
import { UsersService } from './service/users.service';

@Module({
  imports: [MailModule],
  providers: [UsersService, PrismaService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
