import { Logger } from '@nestjs/common';
import type { NestExpressApplication } from '@nestjs/platform-express';

export const shutdown = (app: NestExpressApplication) => {
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
