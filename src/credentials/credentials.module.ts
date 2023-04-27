import { Module } from '@nestjs/common';
import { CredentialsService } from './credentials.service';
import { CredentialsController } from './credentials.controller';

@Module({
  providers: [CredentialsService],
  controllers: [CredentialsController]
})
export class CredentialsModule {}
