import { registerAs } from '@nestjs/config';

export const configuration = registerAs('app', () => ({
  env: process.env.APP_ENV,
  port: process.env.APP_PORT,
}));
