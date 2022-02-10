import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { JwtSign } from './model/JwtSign';
import { Login } from './model/Login';
import { AppConfigService } from 'src/app-config/app-config.service';

@Injectable()
export class AuthService {
  constructor(
    private appConfigService: AppConfigService,
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(login: Login): Promise<any> {
    const user = await this.userService.findById(login.userId);
    const appConfig = await this.appConfigService.findByAppConfigName(
      process.env.JWT_EXPIRE,
    );
    if (user && '1234' === login.password) {
      let payload = new JwtSign(user.UserId, user.Fullname, user.Email);
      return {
        access_token: this.jwtService.sign(payload.toJSON(), {
          expiresIn: appConfig.AppConfigValue,
        }),
      };
    }
  }
}
