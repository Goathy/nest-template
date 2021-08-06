import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { ExpressAdapter } from '@nestjs/platform-express';

import { AppModule } from './app.module';
import { ConfigModule, ServerConfig } from './config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, new ExpressAdapter());

  const config = app.select(ConfigModule).get(ServerConfig, { strict: true });

  const PORT = config.port;

  app.enableShutdownHooks();

  await app.listen(PORT);
}

bootstrap().catch((err) => {
  Logger.error('Server was shut down with an unexpected error', err, 'Server');
  process.exit(1);
});
