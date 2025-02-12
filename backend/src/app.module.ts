import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { PostModule } from './post/post.module';

@Module({
  imports: [AuthModule, UserModule, ConfigModule.forRoot({ isGlobal: true }), PostModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
