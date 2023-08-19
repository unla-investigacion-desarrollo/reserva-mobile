import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>¡Buen dia!</Text>
      <View style={styles.icons}>
        <Icon style={styles.icon} name="bell" />
        <Icon style={styles.icon} name="user" />
      </View>
    </View>
  );
}
