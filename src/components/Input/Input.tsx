import { ForwardedRef, forwardRef, useState } from 'react';

import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';

import { ValidationError } from '@tanstack/react-form';

import { CrossIcon, EyeIcon, EyeOffIcon } from '#/assets';
import { neutral, primary } from '#/common/constants/colors';
import { SvgComponent } from '#/common/types/assets';
import { Color } from '#/common/types/colors';
import { TxOrString } from '#/common/types/i18n';
import { isEmpty } from '#/common/utils/array';
import { hasLength } from '#/common/utils/string';

import { ErrorText, Text } from '../Text';
import styles from './styles';

export interface InputProps extends TextInputProps {
  label?: TxOrString;
  labelStyle?: StyleProp<TextStyle>;
  errors?: TxOrString[] | ValidationError[];
  onChangeText?: (value: string) => void;
  value?: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<TextStyle>;
  Icon?: SvgComponent;
  iconColor?: Color;
  iconStyle?: TextStyle;
  showClearButton?: boolean;
  hideText?: boolean;
  bottomLineDesign?: boolean;
}

const InputComponent = (props: InputProps, ref: ForwardedRef<TextInput>) => {
  const {
    label,
    labelStyle,
    containerStyle,
    inputContainerStyle,
    textStyle,
    onChangeText,
    value,
    errors,
    errorStyle,
    autoCapitalize = 'none',
    autoComplete = 'off',
    Icon,
    iconColor,
    iconStyle,
    showClearButton,
    hideText,
    bottomLineDesign
  } = props;
  const [hiddenText, setHiddenText] = useState(hideText);
  const HiddenTextIcon = hiddenText ? EyeOffIcon : EyeIcon;

  const hasErrors = errors && !isEmpty(errors);
  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text tx={label} style={[styles.label, labelStyle, hasErrors && styles.errorlabel]}>
          {label}
        </Text>
      )}
      <View style={[styles.inputContainer(hasErrors, bottomLineDesign) as ViewStyle, inputContainerStyle]}>
        {!!Icon && <Icon stroke={iconColor} style={[styles.icon, iconStyle]} />}
        <TextInput
          placeholderTextColor={neutral.dark}
          ref={ref}
          autoCapitalize={autoCapitalize}
          autoComplete={autoComplete}
          style={[styles.textInput(!!Icon), textStyle]}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={hiddenText}
          {...props}
        />
        {showClearButton && hasLength(value) && (
          <TouchableOpacity
            onPress={() => {
              if (onChangeText) {
                onChangeText('');
              }
            }}>
            <CrossIcon style={styles.clearButton} stroke={neutral.dark} strokeWidth={2} />
          </TouchableOpacity>
        )}
        {hideText && (
          <TouchableOpacity
            onPress={() => {
              setHiddenText(!hiddenText);
            }}>
            <HiddenTextIcon style={styles.clearButton} stroke={primary.default} />
          </TouchableOpacity>
        )}
      </View>
      {hasErrors && (
        <View style={styles.errorList}>
          {errors.map((error, index) =>
            error ? <ErrorText textStyle={errorStyle} key={`${index}-${error}`} errorMessage={error} /> : null
          )}
        </View>
      )}
    </View>
  );
};

export const Input = forwardRef<TextInput, InputProps>(InputComponent);
