import { number, string } from 'yup';

export const applicationConfigSchema = {
  APP_ENV: string().oneOf(['development', 'production', 'test']).default('development'),
  APP_PORT: number().default(8081),
};
