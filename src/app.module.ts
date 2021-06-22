import { mergeSchema } from '@common/helpers';
import { configValidator } from '@common/validations';
import { AppConfigModule } from '@config/app';
import { applicationConfigSchema } from '@config/app/schema';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

const configSchema = mergeSchema([applicationConfigSchema]);

@Module({
  imports: [ConfigModule.forRoot({ validate: configValidator(configSchema) }), AppConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
