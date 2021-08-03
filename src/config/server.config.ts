import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import type { EnvironmentVariables } from './env.variables';

@Injectable()
export class ServerConfig {
  constructor(private readonly config: ConfigService<EnvironmentVariables>) {}

  get env() {
    return this.config.get('APP_ENV', { infer: true })!;
  }
  get port() {
    return this.config.get('APP_PORT', { infer: true })!;
  }
}
