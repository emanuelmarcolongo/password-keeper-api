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
}
