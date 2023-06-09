import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCredentialDTO } from './dto/createCredentialDto';

@Injectable()
export class CredentialRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: number, credentialDTO: CreateCredentialDTO) {
    return await this.prisma.credential.create({
      data: {
        userId,
        ...credentialDTO,
      },
    });
  }

  async getByTitle(userId: number, title: string) {
    return await this.prisma.credential.findFirst({
      where: {
        userId,
        title,
      },
    });
  }

  async getAll(userId: number) {
    return await this.prisma.credential.findMany({
      where: {
        userId,
      },
    });
  }

  async getById(userId: number, id: number) {
    return await this.prisma.credential.findFirst({
      where: {
        userId,
        id,
      },
    });
  }

  async delete(id: number) {
    return await this.prisma.credential.delete({
      where: {
        id
      },
    });
  }
}
