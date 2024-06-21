import { FormApi } from '@tanstack/react-form';

import { FormZodValidators } from '#/common/types/form';

import { Input, InputProps } from './Input';

export interface FormInputType extends InputProps {
  Form: FormApi<any, any>;
  name: string;
  validations?: FormZodValidators;
  errors?: string[];
}

export function FormInput({ Form, name, validations, errors = [], ...inputProps }: FormInputType) {
  return (
    <Form.Field name={name} validators={validations}>
      {field => (
        <Input
          errors={[...errors, ...field.state.meta.errors]}
          value={field.state.value}
          onChangeText={value => {
            field.handleChange(value);
          }}
          onBlur={field.handleBlur}
          {...inputProps}
        />
      )}
    </Form.Field>
  );
}
