import { shutdown } from '@common/helpers';
import { ConfigModule } from '@config';
import { ServerConfig } from '@config/server.config';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import type { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, new ExpressAdapter());

  const config = app.select(ConfigModule).get(ServerConfig, { strict: true });

  const PORT = config.port;

  shutdown(app);

  await app.listen(PORT);
  Logger.log(`Server start listening on port ${PORT} 🚀`, 'Server');
}

bootstrap().catch(() => {
  Logger.error('Server was shut down with an unexpected error', undefined, 'Server');
  process.exit(1);
});
