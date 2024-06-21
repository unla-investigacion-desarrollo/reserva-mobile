import {
  ColorValue,
  ImageSourcePropType,
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle
} from 'react-native';

import { ExternalImage } from '../ExternalImage';
import styles from './styles';

export interface IconProps extends PressableProps {
  source: ImageSourcePropType;
  onPress?: () => void;
  size?: number;
  hasMargin?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  tintColor?: ColorValue;
}

export function Icon({
  onPress,
  source,
  hasMargin = true,
  tintColor,
  containerStyle,
  size = 16,
  ...props
}: IconProps) {
  const isPressable = !!onPress;
  return (
    <Pressable
      style={[styles.container(hasMargin, isPressable), containerStyle]}
      onPress={onPress}
      pointerEvents={onPress ? 'auto' : 'none'}
      {...props}>
      <ExternalImage source={source} style={styles.image(size, tintColor)} />
    </Pressable>
  );
}
