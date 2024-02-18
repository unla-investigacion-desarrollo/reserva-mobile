import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { useController } from 'react-hook-form';

import { Input, InputProps } from './Input';

export function ControlledInput<T extends FieldValues>(props: InputProps & UseControllerProps<T>) {
  const { name, control, rules, error: customError, ...inputProps } = props;
  const { field, fieldState } = useController({ control, name, rules });

  const fieldErrorMessage = fieldState?.error?.message;

  return (
    <Input
      onChange={field.onChange}
      value={field.value as string}
      error={(fieldErrorMessage && customError) ?? fieldErrorMessage}
      {...inputProps}
    />
  );
}
