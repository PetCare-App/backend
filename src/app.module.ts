import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { PetsModule } from './modules/pets/pets.module';

@Module({
  imports: [UsersModule, AuthModule, PetsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
