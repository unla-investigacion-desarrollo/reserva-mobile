import { ColorValue, View, ViewProps } from 'react-native';

import { shadowStyles } from '#/styles/shadows';

import styles from './styles';

interface Props extends ViewProps {
  children: React.ReactNode;
  withShadow?: boolean;
  shadowColor?: ColorValue;
}

export function Card({ style, children, withShadow = true, shadowColor, ...props }: Props) {
  return (
    <View style={[styles.container, withShadow && shadowStyles.baseShadow(shadowColor), style]} {...props}>
      {children}
    </View>
  );
}
