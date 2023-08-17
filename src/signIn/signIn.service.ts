import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { SignInRepository } from './signIn.repository';

@Injectable()
export class SignInService {
  constructor(private readonly SignInRepository: SignInRepository) {}

  signIn(email, password) {
    return this.SignInRepository.signIn(email, password);
  }
}
