import { Logger } from '@nestjs/common';
import type { NestFastifyApplication } from '@nestjs/platform-fastify';

export const shutdown = (app: NestFastifyApplication) => {
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
};
