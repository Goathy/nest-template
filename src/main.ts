import { gracefulShutdown } from '@common/helpers';
import { ConfigModule } from '@config';
import { ServerConfig } from '@config/server.config';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { ExpressAdapter } from '@nestjs/platform-express';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, new ExpressAdapter());

  const config = app.select(ConfigModule).get(ServerConfig, { strict: true });

  const PORT = config.port;

  gracefulShutdown(app);

  await app.listen(PORT);
  Logger.log(`Server start listening on port ${PORT} 🚀`, 'Server');
}

bootstrap().catch((err) => {
  Logger.error('Server was shut down with an unexpected error', err, 'Server');
  process.exit(1);
});
