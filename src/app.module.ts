import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CredentialsModule } from './credentials/credentials.module';

@Module({
  imports: [UsersModule, CredentialsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
