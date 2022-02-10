import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfigEntity, AppConfigService } from './app-config.service';

@Module({
  imports: [TypeOrmModule.forFeature([AppConfigEntity])],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
