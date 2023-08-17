import { Module } from '@nestjs/common';
import { SignInService } from './signIn.service';
import { SignInController } from './signIn.controller';
import { SignInRepository } from './signIn.repository';

@Module({
  controllers: [SignInController],
  providers: [SignInService, SignInRepository],
})
export class SignInModule {}
