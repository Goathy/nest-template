import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';

import { AppModule } from './app.module';

import type { NestFastifyApplication } from '@nestjs/platform-fastify';

const PORT = 8081;

function shutdown(app: NestFastifyApplication) {
  process.on('SIGINT', () => {
    app
      .close()
      .catch(() =>
        Logger.error('Server was shut down with an unexpected error', undefined, 'Server')
      )
      .finally(() => {
        Logger.log('Server stopped listening successfully.', 'Server');
        process.exit(0);
      });
  });
}

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

  shutdown(app);

  await app.listen(PORT);
  Logger.log(`Server start listening on port ${PORT} 🚀`, 'Server');
}

bootstrap().catch(() => {
  Logger.error('Server was shut down with an unexpected error', undefined, 'Server');
  process.exit(1);
});
