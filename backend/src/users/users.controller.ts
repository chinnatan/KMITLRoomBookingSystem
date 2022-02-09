import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  async findAll(@Res() res: Response) {
    const allUser = await this.userService.findAll();
    res.status(HttpStatus.OK).json(allUser);
  }

  @Get(':username')
  async findById(@Param('username') username: string, @Res() res: Response) {
    const user = await this.userService.findByUserName(username);
    res.status(HttpStatus.OK).json(user);
  }
}
