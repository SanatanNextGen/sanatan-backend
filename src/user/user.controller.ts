// src/user/user.controller.ts
import { Body, Controller, Post, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() body: { username: string; password: string }): User {
    return this.userService.create(body.username, body.password);
  }

  @Get()
  findAll(): User[] {
    return this.userService.findAll();
  }
}
