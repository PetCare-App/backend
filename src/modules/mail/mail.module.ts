/* eslint-disable prettier/prettier */
import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.sendgrid.net',
        port: 587,
        secure: false,
        auth: {
          user: 'apikey',
          pass: process.env.SENDGRID_PASS
        },
        tls: {
          rejectUnauthorized: false,
        }
      },
    }),
  ],
  controllers: [MailController],
  providers: [MailService, PrismaService],
  exports: [MailService],
})
export class MailModule {}
