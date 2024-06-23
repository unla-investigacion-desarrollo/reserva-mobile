import { View } from 'react-native';

import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ArrowLeftIcon } from '#/assets';
import { black, transparent } from '#/common/constants/colors';
import { Color } from '#/common/types/colors';

import { Button } from '../Button';
import { BACK_ICON_SIZE, styles } from './styles';

export type BackButtonHeaderProps = {
  backgroundColor?: Color;
  buttonColor?: Color;
};

export function BackButtonHeader({ backgroundColor, buttonColor = black }: BackButtonHeaderProps) {
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
      </View>
    </View>
  );
}
