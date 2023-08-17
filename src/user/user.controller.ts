import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './DTO/CreateUserDTO';
import { IsEmpty } from 'class-validator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('')
  postUser(@Body() body: CreateUserDTO) {
    const { name, email, password, avatar } = body;
    
    return this.userService.postUser(name, email, password, avatar);
  }
}
