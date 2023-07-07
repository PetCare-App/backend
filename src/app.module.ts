import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { HygieneModule } from './modules/hygiene/hygiene.module';
import { MailModule } from './modules/mail/mail.module';
import { PetsModule } from './modules/pets/pets.module';
import { UsersModule } from './modules/users/users.module';
import { VaccinesModule } from './modules/vaccines/vaccines.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    PetsModule,
    VaccinesModule,
    HygieneModule,
    MailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
