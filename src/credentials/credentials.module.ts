import { Module } from '@nestjs/common';
import { CredentialsController } from './credentials.controller';
import { CredentialRepository } from './credentials.repository';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { CredentialsService } from './credentials.service';

@Module({
  imports: [PrismaModule, AuthModule, UsersModule],
  providers: [CredentialsService, CredentialRepository],
  controllers: [CredentialsController]
})
export class CredentialsModule {}
