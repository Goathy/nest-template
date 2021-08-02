import { createTerminus } from '@godaddy/terminus';
import { Logger, ShutdownSignal } from '@nestjs/common';
import type { NestExpressApplication } from '@nestjs/platform-express';

export const gracefulShutdown = (app: NestExpressApplication) => {
  const logger = new Logger('GracefulShutdown');

  createTerminus(app.getHttpServer(), {
    signals: [ShutdownSignal.SIGINT, ShutdownSignal.SIGTERM],
    onSignal: () => Promise.resolve(logger.log('Server is starting cleanup...')),
    onShutdown: () => Promise.resolve(logger.log('Server stopped listening successfully.')),
  });
};
