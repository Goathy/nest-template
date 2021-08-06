import { Module } from '@nestjs/common';

import { ShutdownService } from './services/shutdown.service';

@Module({
  providers: [ShutdownService],
})
export class GracefulShutdownModule {}
