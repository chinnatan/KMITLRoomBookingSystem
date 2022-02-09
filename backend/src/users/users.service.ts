import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findAll(): Promise<User> {
    return this.users;
  }

  async findByUserName(username: string): Promise<User> {
    const user = this.users.find((user) => user.username === username);
    if (user === undefined) {
      throw new TypeError('The value was promised to always be there!');
    }
    return user;
  }
}
