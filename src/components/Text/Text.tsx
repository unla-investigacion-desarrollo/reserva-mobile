import { ReactNode } from 'react';

import { Text as RNText, TextProps } from 'react-native';

import { TxOrString } from '#/common/types/i18n';
import { isTx, translate } from '#/translations/utils';

import styles from './styles';

interface Props extends TextProps {
  tx?: TxOrString;
}

export function Text({ tx, style, children, ...props }: Props) {
  const content = isTx(tx) ? translate(tx) : children;
  return (
    <RNText style={[styles.text, style]} {...props}>
      {content as ReactNode}
    </RNText>
  );
}
