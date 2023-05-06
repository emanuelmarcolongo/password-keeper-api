import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import Cryptr from 'cryptr';

import { CredentialRepository } from './credentials.repository';
import { CreateCredentialDTO } from './dto/createCredentialDto';

@Injectable()
export class CredentialsService {
  private cryptr: Cryptr;
  constructor(private readonly credentialRepository: CredentialRepository) {
    this.cryptr = new Cryptr(process.env.CRYPTR_SECRET);
  }

  async create(userId: number, credentialDTO: CreateCredentialDTO) {
    const credential = await this.credentialRepository.getByTitle(
      userId,
      credentialDTO.title,
    );
    if (credential) throw new ConflictException();

    return await this.credentialRepository.create(userId, {
      ...credentialDTO,
      password: this.cryptr.encrypt(credentialDTO.password),
    });
  }

  async getAll(userId: number) {
    const userCredentials = await this.credentialRepository.getAll(userId);

    return userCredentials.map(credential => {
      return {
        ...credential,
        password: this.cryptr.decrypt(credential.password)
      }
    })
  }
}
