import { TextStyle, View, ViewStyle } from 'react-native';

import { ValidationError } from '@tanstack/react-form';

import { BUTTON_INTENTS } from '#/common/constants/button';
import { TxOrString } from '#/common/types/i18n';
import { isEmpty } from '#/common/utils/array';

import { Button } from '../Button';
import { ErrorText, Text } from '../Text';
import { styles } from './styles';

export type OptionsBarProps = {
  options: string[];
  setOption: (value: string) => void;
  selectedOption: string;
  style?: ViewStyle;
  label?: TxOrString;
  labelStyle?: TextStyle;
  errors?: TxOrString[] | ValidationError[];
  errorStyle?: TextStyle;
};

export function OptionsBar({
  options,
  setOption,
  selectedOption,
  style,
  label,
  labelStyle,
  errors,
  errorStyle
}: OptionsBarProps) {
  const hasErrors = errors && !isEmpty(errors);
  return (
    <View>
      {label && (
        <Text tx={label} style={[styles.label, labelStyle, hasErrors && styles.errorlabel]}>
          {label}
        </Text>
      )}
      <View style={[styles.optionBar, style]}>
        {options.map((option, index) => {
          const firstChild = index === 0;
          const lastChild = index === options.length - 1;
          return (
            <Button
              style={[styles.option, firstChild && styles.firstChild, lastChild && styles.lastChild]}
              intent={option === selectedOption ? BUTTON_INTENTS.PRIMARY : BUTTON_INTENTS.SECONDARY}
              key={option}
              title={option}
              onPress={() => setOption(option)}
            />
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
