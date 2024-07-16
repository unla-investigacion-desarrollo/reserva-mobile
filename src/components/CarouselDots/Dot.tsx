import { useEffect } from 'react';

import { View } from 'react-native';

import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';

import { PlusIcon } from '#/assets';
import { accent, background, primary } from '#/common/constants/colors';
import { getIsAddImageItem } from '#/common/models/carousel';

import { ICON_SIZE, styles } from './styles';

export type DotProps<TItem> = {
  item: TItem;
  index: number;
  currentIndex: number;
};

export function Dot<TItem>({ item, index, currentIndex }: DotProps<TItem>) {
  const isAddImageItem = getIsAddImageItem(item);
  const focusedColor = isAddImageItem ? primary.default : accent.default;
  const unfocusedColor = isAddImageItem ? background : accent.lighter;

  const isFocus = index === currentIndex;

  const colorValue = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(colorValue.value, [0, 1], [unfocusedColor, focusedColor])
  }));

  useEffect(() => {
    colorValue.value = withTiming(isFocus ? 1 : 0, { duration: 250, easing: Easing.inOut(Easing.ease) });
  }, [isFocus]);

  return (
    <View>
      <Animated.View style={[styles.dot(isAddImageItem), animatedStyle]} />
      {isAddImageItem && (
        <PlusIcon
          width={ICON_SIZE}
          height={ICON_SIZE}
          stroke={isFocus ? background : primary.default}
          style={styles.plusIcon}
        />
      )}
    </View>
  );
}
