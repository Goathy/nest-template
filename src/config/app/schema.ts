import { number, object, string } from 'yup';

export const schema = object({
  APP_ENV: string().oneOf(['development', 'production', 'test']).default('development'),
  APP_PORT: number().default(8081),
});
