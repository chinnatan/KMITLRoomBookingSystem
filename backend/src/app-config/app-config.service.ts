import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Repository,
} from 'typeorm';

@Entity('AppConfig')
export class AppConfigEntity {
  @PrimaryColumn()
  AppConfigId: number;

  @Column()
  AppConfigName: string;

  @Column()
  AppConfigValue: string;
}

@Injectable()
export class AppConfigService {
  constructor(
    @InjectRepository(AppConfigEntity)
    private appConfigRepository: Repository<AppConfigEntity>,
  ) {}

  findByAppConfigName(appConfigName: string): Promise<AppConfigEntity> {
    return this.appConfigRepository.findOne(appConfigName);
  }
}
