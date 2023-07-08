import { Module, forwardRef } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PetsModule } from '../pets/pets.module';
import { HygieneController } from './controller/hygiene.controller';
import { HygieneService } from './service/hygiene.service';

@Module({
  imports: [forwardRef(() => PetsModule)],
  controllers: [HygieneController],
  providers: [HygieneService, PrismaService],
  exports: [HygieneService],
})
export class HygieneModule {}
