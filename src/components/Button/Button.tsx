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
  iconColor?: ColorValue;
  iconWidth?: number;
  Svg?: SvgComponent;
  intent?: ButtonIntents;
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
  iconColor,
  iconWidth,
  Svg,
  children,
  intent
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
        pressed && { ...pressedStyles },
        (disabled || loading) && { ...disabledStyles }
      ]}
      disabled={disabled}>
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
                  strokeWidth={iconWidth}
                  fill={iconColor}
                  stroke={iconColor}
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
                isPressed && intentStyles?.PRESSED?.TEXT,
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
