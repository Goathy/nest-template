import { registerAs } from '@nestjs/config';

export const applicationConfig = registerAs('app', () => ({
  env: process.env.APP_ENV,
  port: process.env.APP_PORT,
}));
