import { ZodType } from 'zod';

export type FormZodValidators = {
  onChange?: ZodType;
  onBlur?: ZodType;
  onMount?: ZodType;
  onSubmit?: ZodType;
};
