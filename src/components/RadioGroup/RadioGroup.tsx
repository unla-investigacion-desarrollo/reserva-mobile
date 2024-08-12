import { TextStyle, View, ViewStyle } from 'react-native';

import { ValidationError } from '@tanstack/react-form';

import { TxOrString } from '#/common/types/i18n';
import { isEmpty } from '#/common/utils/array';

import { RadioButon } from '../RadioButton';
import { ErrorText, Text } from '../Text';
import { styles } from './styles';

export type RadioGroupProps = {
  options: string[];
  setOption: (value: string) => void;
  selectedOption: string;
  style?: ViewStyle;
  label?: TxOrString;
  labelStyle?: TextStyle;
  errors?: TxOrString[] | ValidationError[];
  errorStyle?: TextStyle;
};

export function RadioGroup({
  options,
  selectedOption,
  setOption,
  style,
  label,
  labelStyle,
  errors,
  errorStyle
}: RadioGroupProps) {
  const hasErrors = errors && !isEmpty(errors);
  return (
    <View>
      {label && (
        <Text tx={label} style={[styles.label, labelStyle, hasErrors && styles.errorlabel]}>
          {label}
        </Text>
      )}
      <View style={[styles.radioGroup, style]}>
        {options.map(option => {
          const isSelected = option === selectedOption;
          return (
            <RadioButon key={option} selected={isSelected} onPress={() => setOption(option)} label={option} />
          );
        })}
      </View>
      {hasErrors && (
        <View style={styles.errorList}>
          {errors.map((error, index) =>
            error ? (
              <ErrorText
                containerStyle={styles.errorMessage}
                textStyle={errorStyle}
                key={`${index}-${error}`}
                errorMessage={error}
              />
            ) : null
          )}
        </View>
      )}
    </View>
  );
}
