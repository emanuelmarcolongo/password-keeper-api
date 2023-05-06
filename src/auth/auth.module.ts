
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { UsersRepository } from 'src/users/users.repository';
import { PrismaService } from 'src/prisma/prisma.service';


@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7 days' },
    }),
  ],
  providers: [AuthService, UsersService, UsersRepository, PrismaService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
