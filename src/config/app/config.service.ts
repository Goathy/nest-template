import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import { applicationConfig } from './configuration';

@Injectable()
export class AppConfigService {
  constructor(
    @Inject(applicationConfig.KEY) private readonly appConfig: ConfigType<typeof applicationConfig>
  ) {}

  get env() {
    return this.appConfig.env!;
  }
  get port() {
    return this.appConfig.port!;
  }
}
