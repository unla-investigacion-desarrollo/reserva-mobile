import { ForwardedRef, forwardRef } from 'react';

import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';

import { CrossIcon } from '#/assets';
import { neutral } from '#/common/constants/colors';
import { SvgComponent } from '#/common/types/assets';
import { Color } from '#/common/types/colors';
import { TxOrString } from '#/common/types/i18n';
import { hasLength } from '#/common/utils/string';

import { Text } from '../Text';
import styles from './styles';

export interface InputProps extends TextInputProps {
  label?: TxOrString;
  error?: TxOrString;
  onChangeText?: (value: string) => void;
  value?: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<TextStyle>;
  editable?: boolean;
  Icon?: SvgComponent;
  iconColor?: Color;
  iconStyles?: TextStyle;
  showClearButton?: boolean;
}

const InputComponent = (props: InputProps, ref: ForwardedRef<TextInput>) => {
  const {
    label,
    containerStyle,
    inputContainerStyle,
    textStyle,
    onChangeText,
    value,
    editable,
    error,
    errorStyle,
    autoCapitalize = 'none',
    autoComplete = 'off',
    Icon,
    iconColor,
    iconStyles,
    showClearButton
  } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      {label ? (
        <Text tx={label} style={styles.label}>
          {label}
        </Text>
      ) : null}
      <View style={[styles.inputContainer, inputContainerStyle]}>
        {!!Icon && <Icon stroke={iconColor} style={[styles.icon, iconStyles]} />}
        <TextInput
          placeholderTextColor={neutral.dark}
          ref={ref}
          editable={editable}
          autoCapitalize={autoCapitalize}
          autoComplete={autoComplete}
          style={[styles.textInput, textStyle]}
          onChangeText={onChangeText}
          value={value}
          {...props}
        />
        {showClearButton && hasLength(value) && (
          <TouchableOpacity
            onPress={() => {
              if (onChangeText) {
                onChangeText('');
              }
            }}>
            <CrossIcon style={styles.clearButton} stroke={neutral.dark} />
          </TouchableOpacity>
        )}
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
