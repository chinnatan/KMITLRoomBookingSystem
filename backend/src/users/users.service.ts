import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Column,
  Entity,
  PrimaryColumn,
  Repository,
} from 'typeorm';

@Entity('User')
export class UserEntity {
  @PrimaryColumn({ type: 'varchar', length: 30 })
  UserId: string;
  @Column()
  Fullname: string;
  @Column()
  Email: string;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  findById(userId: string): Promise<UserEntity> {
    return this.userRepository.findOne(userId);
  }
}
