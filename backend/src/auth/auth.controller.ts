import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Login } from './model/Login';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() login: Login) {
    if (Object.keys(login).length === 0) {
      throw new BadRequestException();
    }
    return this.authService.login(login);
  }
}
