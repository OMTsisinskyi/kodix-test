import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import * as argon2 from 'argon2';
import { AuthJwtPayload } from './types/auth-jwtPayload';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async signUpUser(createUserDto: CreateUserDto) {
    const user = await this.userService.findByEmail(createUserDto.email);
    if (user) throw new ConflictException('User already exists!');
    return this.userService.create(createUserDto);
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) throw new UnauthorizedException('User not found!');

    const isPasswordValid = await argon2.verify(user.password, password);
    if (!isPasswordValid) throw new UnauthorizedException('Invalid password!');

    return {
      id: user.id,
      name: user.firstName,
    };
  }

  async login(userId: number, name?: string) {
    const { accessToken } = await this.generateToken(userId);
    return { id: userId, name, accessToken };
  }

  async generateToken(userId: number) {
    const payload: AuthJwtPayload = { sub: userId };
    const [accessToken] = await Promise.all([
      this.jwtService.signAsync(payload),
    ]);

    return {
      accessToken,
    };
  }

  async validateJwtUser(userId: number) {
    const user = await this.userService.findById(userId);
    if (!user) throw new UnauthorizedException('User not found!');

    const currentUser = { id: user.id };

    return currentUser;
  }
}
