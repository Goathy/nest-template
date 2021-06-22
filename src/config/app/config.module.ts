import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppConfigService } from './config.service';
import { applicationConfig } from './configuration';

@Module({
  imports: [ConfigModule.forFeature(applicationConfig)],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
