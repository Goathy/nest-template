import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get env() {
    return this.configService.get<string>('app.env')!;
  }
  get port() {
    return this.configService.get<number>('app.port')!;
  }
}
