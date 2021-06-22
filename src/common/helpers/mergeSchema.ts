import type { BaseSchema } from 'yup';
import { object } from 'yup';

export const mergeSchema = (schemas: Record<string, BaseSchema>[]) =>
  object(schemas.reduce((acc, curr) => ({ ...acc, ...curr })));
