// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  private users: User[] = [];
  private idCounter = 1;

  create(username: string, password: string): User {
    const newUser: User = {
      id: this.idCounter++,
      username,
      password, // Hash passwords in a real application
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    return this.users;
  }
}
