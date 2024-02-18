import { View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.home}>
      <StatusBar animated style="light" />
    </View>
  );
}
