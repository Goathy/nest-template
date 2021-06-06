import { configValidator } from '@common/validations';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppConfigService } from './config.service';
import { configuration } from './configuration';
import { schema } from './schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validate: configValidator(schema),
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
