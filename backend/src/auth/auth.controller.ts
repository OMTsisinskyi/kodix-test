import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  @HttpCode(201)
  signUpUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUpUser(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('sign-in')
  signInUser(@Request() req) {
    console.log(req.user);

    return this.authService.login(req.user.id, req.user.name);
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getTest(@Request() req) {
    console.log('Protected route');

    return { message: `test ${req.user.id}` };
  }
}
