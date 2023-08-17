import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { PrismaModule } from './prisma/prisma.module';
import { SigninModule } from './signin/signin.module';

@Module({
  imports: [UserModule, PostModule, UserModule, PostModule, PrismaModule, SigninModule]
})
export class AppModule {}
