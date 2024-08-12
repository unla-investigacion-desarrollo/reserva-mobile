import { TextStyle, View } from 'react-native';

import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ArrowLeftIcon } from '#/assets';
import { black, transparent } from '#/common/constants/colors';
import { Color } from '#/common/types/colors';
import { TxOrString } from '#/common/types/i18n';

import { Button } from '../Button';
import { Text } from '../Text';
import { BACK_ICON_SIZE, styles } from './styles';

export type BackButtonHeaderProps = {
  backgroundColor?: Color;
  buttonColor?: Color;
  text?: TxOrString;
  textColor?: Color;
};

export function BackButtonHeader({
  backgroundColor,
  buttonColor = black,
  text,
  textColor = black
}: BackButtonHeaderProps) {
  const { top } = useSafeAreaInsets();
  return (
    <View style={styles.container(top, backgroundColor)}>
      <View style={styles.header}>
        <Button
          Svg={ArrowLeftIcon}
          iconSize={BACK_ICON_SIZE}
          iconStroke={buttonColor}
          iconFill={transparent}
          title="Core.goBack"
          textStyle={styles.backButtonText(buttonColor)}
          style={styles.backButton}
          onPress={() => router.back()}
        />
        {text && (
          <Text style={styles.text(textColor) as TextStyle} tx={text}>
            {text}
          </Text>
        )}
      </View>
    </View>
  );
}
