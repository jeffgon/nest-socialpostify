import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { PrismaModule } from './prisma/prisma.module';
import { SignInModule } from './signIn/signIn.module';

@Module({
  imports: [UserModule, PostModule, UserModule, PostModule, PrismaModule, SignInModule]
})
export class AppModule {}
