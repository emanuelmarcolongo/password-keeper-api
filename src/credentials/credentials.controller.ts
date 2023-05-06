import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { CredentialsService } from './credentials.service';
import { LoggedUser } from 'src/decorators/user.decorator';
import { User } from '@prisma/client';
import { CreateCredentialDTO } from './dto/createCredentialDto';

@Controller('credentials')
@UseGuards(AuthGuard)
export class CredentialsController {
  constructor(private readonly credentialsService: CredentialsService) {}

  @Post()
  async create(
    @LoggedUser() user: User,
    @Body() credentialDTO: CreateCredentialDTO,
  ) {
    return this.credentialsService.create(user.id, credentialDTO);
  }

  @Get() 
  async getAll(@LoggedUser() user: User) {
    return this.credentialsService.getAll(user.id)
  }

}
