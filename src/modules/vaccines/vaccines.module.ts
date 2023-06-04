import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { VaccinesController } from './controller/vaccines.controller';
import { VaccinesService } from './service/vaccines.service';

@Module({
  controllers: [VaccinesController],
  providers: [VaccinesService, PrismaService],
  exports: [VaccinesService],
})
export class VaccinesModule {}
