import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDTO } from './dto/createUserDTO';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  getUsers() {
    return this.userRepository.getUsers();
  }

  createUser(user: CreateUserDTO) {
    return this.userRepository.createUser(user);
  }
  
}
