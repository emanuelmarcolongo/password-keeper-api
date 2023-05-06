import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthRegisterDTO } from './dto/auth-register.dto';
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async register(data: AuthRegisterDTO) {
    const user = await this.usersService.getUser(data.email);
    if (user) throw new ConflictException();

    return this.usersService.createUser(data);
  }

  async login(email: string, password: string) {
    const user = await this.usersService.getUser(email);
    if (!user) throw new UnauthorizedException('Email ou senha incorretos');

    const correctPassword = bcrypt.compareSync(password, user.password);
    if (!correctPassword) throw new UnauthorizedException('Email ou senha incorretos');

    const payload = { email: user.email, sub: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
