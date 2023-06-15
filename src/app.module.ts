import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { PetsModule } from './modules/pets/pets.module';
import { UsersModule } from './modules/users/users.module';
import { VaccinesModule } from './modules/vaccines/vaccines.module';
import { HygieneModule } from './modules/hygiene/hygiene.module';
import { ParasiteControlModule } from './modules/parasite-control/parasite-control.module';

@Module({
  imports: [UsersModule, AuthModule, PetsModule, VaccinesModule, HygieneModule, ParasiteControlModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
