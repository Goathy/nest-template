import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config';
import { GracefulShutdownModule } from './graceful-shutdown';

@Module({
  imports: [ConfigModule, GracefulShutdownModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
