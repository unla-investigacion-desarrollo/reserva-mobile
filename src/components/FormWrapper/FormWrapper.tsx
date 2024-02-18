import { Key, ReactNode } from 'react';

import { StyleProp, View, ViewStyle } from 'react-native';

import { Control, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

import { TxOrString } from '#/common/types/i18n';

import { Button, ButtonProps } from '../Button';

interface FormWrapperProps<D extends FieldValues> {
  children: (props: { control: Control<D> }) => ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  extraButtons?: (ButtonProps & { key: Key })[];
  submitButtonStyle?: ButtonProps['style'];
  schema: z.ZodSchema<D>;
  onSubmit: SubmitHandler<D>;
  submitText?: TxOrString;
  inputsContainerStyle?: StyleProp<ViewStyle>;
  buttonsContainerStyle?: StyleProp<ViewStyle>;
  loading?: boolean;
}

export function FormWrapper<D extends FieldValues>({
  extraButtons,
  containerStyle,
  submitButtonStyle,
  schema,
  onSubmit,
  submitText,
  loading,
  inputsContainerStyle,
  buttonsContainerStyle,
  children
}: FormWrapperProps<D>) {
  type FormType = z.infer<typeof schema>;
  const { handleSubmit, control } = useForm<FormType>({ resolver: zodResolver(schema) });

  return (
    <View style={containerStyle}>
      <View style={inputsContainerStyle}>{children({ control })}</View>
      <View style={buttonsContainerStyle}>
        <Button
          style={submitButtonStyle}
          onPress={handleSubmit(onSubmit)}
          title={submitText || 'Core.Submit'}
          loading={loading}
        />
        {extraButtons?.map(({ key, ...button }) => <Button key={key} {...button} />)}
      </View>
    </View>
  );
}
