import type { BeforeApplicationShutdown, OnApplicationShutdown } from '@nestjs/common';
import { Logger, Injectable } from '@nestjs/common';

@Injectable()
export class ShutdownService implements BeforeApplicationShutdown, OnApplicationShutdown {
  private readonly logger = new Logger('GracefulShutdown');

  beforeApplicationShutdown() {
    this.logger.log('Server is starting cleanup...');
  }
  onApplicationShutdown() {
    this.logger.log('Server stopped listening successfully');
  }
}
