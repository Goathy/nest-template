import { shutdown } from '@common/helpers';
import { ConfigModule } from '@config';
import { ServerConfig } from '@config/server.config';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import type { NestFastifyApplication } from '@nestjs/platform-fastify';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

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
