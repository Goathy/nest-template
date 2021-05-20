import type { SchemaOf } from 'yup';

export const configValidator =
  <T>(schema: SchemaOf<T>) =>
  (config: Record<string, unknown>) =>
    schema.validateSync(config, { stripUnknown: true, abortEarly: false }) as Record<
      string,
      unknown
    >;
