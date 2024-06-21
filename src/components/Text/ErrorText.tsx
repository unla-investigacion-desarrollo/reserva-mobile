import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';

import { SvgProps } from 'react-native-svg';

import { CrossCircleIcon } from '#/assets';
import { TxOrString } from '#/common/types/i18n';

import { Text } from './Text';
import styles, { ERROR_ICON_PROPS } from './styles';

export type ErrorTextPops = {
  errorMessage: TxOrString;
  containerStyle?: ViewStyle;
  textStyle?: StyleProp<TextStyle>;
  iconProps?: SvgProps;
  iconStyle?: ViewStyle;
};

export function ErrorText({ errorMessage, containerStyle, textStyle, iconProps, iconStyle }: ErrorTextPops) {
  return (
    <View style={[styles.errorRow, containerStyle]}>
      <CrossCircleIcon {...ERROR_ICON_PROPS} {...iconProps} style={[styles.errorIcon, iconStyle]} />
      <Text tx={errorMessage} style={[styles.error, textStyle]}>
        {errorMessage}
      </Text>
    </View>
  );
}
