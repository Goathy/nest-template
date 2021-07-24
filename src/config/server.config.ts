import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import type { Environment, EnvironmentVariables } from './env.variables';

@Injectable()
export class ServerConfig {
  constructor(private readonly config: ConfigService<EnvironmentVariables>) {}

  get env(): Environment {
    return this.config.get<Environment>('APP_ENV')!;
  }
  get port(): number {
    return this.config.get<number>('APP_PORT')!;
  }
}
