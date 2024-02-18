import { View, ViewStyle } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BellIcon, HeartIcon, UserIcon } from '#/assets';

import { Text } from '../Text';
import { styles } from './styles';

export function Header() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={styles.container(top) as ViewStyle}>
      <View style={styles.header}>
        <Text style={styles.text}>¡Buen Dia!</Text>
        <View style={styles.iconSection}>
          <BellIcon style={styles.icon} />
          <HeartIcon style={styles.icon} />
          <UserIcon style={styles.icon} />
        </View>
      </View>
    </View>
  );
}
