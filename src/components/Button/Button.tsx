import { Fragment, useState } from 'react';

import {
  ActivityIndicator,
  ColorValue,
  ImageSourcePropType,
  Pressable,
  PressableProps,
  StyleProp,
  TextStyle,
  View,
  ViewStyle
} from 'react-native';

import { SvgComponent } from '#/common/types/assets';
import { ButtonIntents } from '#/common/types/buttons';
import { TxOrString } from '#/common/types/i18n';
import { BUTTON_INTENT_STYLES } from '#/styles/button';

import { Icon } from '../Icon';
import { Text } from '../Text';
import styles from './styles';

export interface ButtonProps extends PressableProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  loading?: boolean;
  innerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: ImageSourcePropType;
  title?: TxOrString;
  iconSize?: number;
  iconStroke?: ColorValue | ((pressed: boolean) => ColorValue);
  iconFill?: ColorValue | ((pressed: boolean) => ColorValue);
  iconStrokeWidth?: number;
  Svg?: SvgComponent;
  intent?: ButtonIntents;
  active?: boolean;
}

export function Button({
  onPress,
  style,
  disabled,
  loading,
  innerStyle,
  title,
  textStyle,
  icon,
  iconSize,
  iconFill,
  iconStroke,
  iconStrokeWidth,
  Svg,
  children,
  intent,
  active
}: ButtonProps) {
  const InnerContainer = innerStyle ? View : Fragment;

  const intentStyles = intent && BUTTON_INTENT_STYLES[intent];

  const pressedStyles = (intentStyles && intentStyles.PRESSED.CONTAINER) ?? styles.disabledOrPressed;
  const disabledStyles = (intentStyles && intentStyles.DISABLED.CONTAINER) ?? styles.disabledOrPressed;

  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={onPress}
      style={({ pressed }) => [
        intentStyles?.ENABLED?.CONTAINER,
        styles.container,
        style,
        (pressed || active) && { ...pressedStyles },
        (disabled || loading) && { ...disabledStyles }
      ]}
      disabled={disabled || loading}>
      <InnerContainer {...(innerStyle && { style: innerStyle })}>
        <>
          {loading ? (
            <ActivityIndicator {...intentStyles?.ACTIVITY_INDICATOR} />
          ) : (
            <>
              {!!icon && <Icon source={icon} size={iconSize} />}
              {!!Svg && (
                <Svg
                  width={iconSize}
                  height={iconSize}
                  strokeWidth={iconStrokeWidth}
                  fill={typeof iconFill === 'function' ? iconFill(isPressed) : iconFill}
                  stroke={typeof iconStroke === 'function' ? iconStroke(isPressed) : iconStroke}
                />
              )}
            </>
          )}

          {!!title && (
            <Text
              tx={title}
              style={[
                intentStyles?.ENABLED?.TEXT,
                textStyle,
                (isPressed || active) && intentStyles?.PRESSED?.TEXT,
                (disabled || loading) && intentStyles?.DISABLED?.TEXT
              ]}>
              {title}
            </Text>
          )}
          {children}
        </>
      </InnerContainer>
    </Pressable>
  );
}
