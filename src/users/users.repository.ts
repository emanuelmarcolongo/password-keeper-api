import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUserDTO';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersRepository {

  constructor(private prisma: PrismaService) { }

  async getUsers() {
    return await this.prisma.user.findMany();
  }

  async getUser(email: string) {
    return this.prisma.user.findUnique({
        where: {email: email}
    })
  }

  async createUser(user: CreateUserDTO) {
    return await this.prisma.user.create({
      data: {...user,
      password: bcrypt.hashSync(user.password, 10)}
    })
  }

}