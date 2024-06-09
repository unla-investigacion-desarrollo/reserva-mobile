import { View } from 'react-native';

import { styles } from './styles';

export type SeparatorProps = {
  gap: number;
};

export function Separator({ gap }: SeparatorProps) {
  return <View style={styles.typesSeparator(gap)} />;
}
