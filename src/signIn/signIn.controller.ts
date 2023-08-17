import { Body, Controller, Post } from '@nestjs/common';
import { SignInService } from './signIn.service';
import { SignInDTO } from './DTO/SignInDTO';

@Controller('signin')
export class SignInController {
  constructor(private readonly signInService: SignInService) {}

  @Post()
  signIn(@Body() body: SignInDTO) {
    const { email, password } = body;
    return this.signInService.signIn(email, password); 
  }
}
