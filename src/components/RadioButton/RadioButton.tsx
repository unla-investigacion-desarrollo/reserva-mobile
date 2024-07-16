import { useState } from 'react';

import { Pressable, TextStyle, View } from 'react-native';

import { BUTTON_STATES, RADIO_BUTTON_STATES } from '#/common/constants/button';
import { TxOrString } from '#/common/types/i18n';

import { Text } from '../Text';
import { RADIO_BUTTON_COLORS, styles } from './styles';

export type RadioButtonProps = {
  onPress: () => void;
  label?: TxOrString;
  selected?: boolean;
  disabled?: boolean;
  textStyle?: TextStyle;
};

export function RadioButon({ onPress, label, textStyle, selected, disabled }: RadioButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  const state = disabled ? BUTTON_STATES.DISABLED : isPressed ? BUTTON_STATES.PRESSED : BUTTON_STATES.ENABLED;
  const radioButtonState = selected ? RADIO_BUTTON_STATES.SELECTED : RADIO_BUTTON_STATES.UNSELECTED;
  const color = RADIO_BUTTON_COLORS[radioButtonState][state];

  return (
    <Pressable
      style={styles.radioButton}
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}>
      <View style={styles.outerCircle(!!selected, color)}>
        <View style={styles.innerCirle(!!selected)} />
      </View>
      {label && (
        <Text tx={label} style={[styles.text, textStyle]}>
          {label}
        </Text>
      )}
    </Pressable>
  );
}
