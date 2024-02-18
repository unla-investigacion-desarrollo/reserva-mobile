import { ForwardedRef, forwardRef } from 'react';

import { StyleProp, TextInput, TextInputProps, TextStyle, View, ViewStyle } from 'react-native';

import { TxOrString } from '#/common/types/i18n';

import { Text } from '../Text';
import styles from './styles';

export interface InputProps extends TextInputProps {
  label?: TxOrString;
  error?: TxOrString;
  onChange?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<TextStyle>;
  editable?: boolean;
}

const InputComponent = (props: InputProps, ref: ForwardedRef<TextInput>) => {
  const {
    label,
    containerStyle,
    inputContainerStyle,
    textStyle,
    onChange,
    editable,
    error,
    errorStyle,
    autoCapitalize = 'none',
    autoComplete = 'off'
  } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      {label ? (
        <Text tx={label} style={styles.label}>
          {label}
        </Text>
      ) : null}
      <View style={[styles.inputContainer, inputContainerStyle]}>
        <TextInput
          ref={ref}
          editable={editable}
          autoCapitalize={autoCapitalize}
          autoComplete={autoComplete}
          onChangeText={onChange}
          style={[styles.textInput, textStyle]}
          {...props}
        />
      </View>
      {error ? (
        <Text tx={error} style={[styles.error, errorStyle]}>
          {error}
        </Text>
      ) : null}
    </View>
  );
};

export const Input = forwardRef<TextInput, InputProps>(InputComponent);
