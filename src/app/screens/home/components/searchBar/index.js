import { View, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

export default function SearchBar() {
  return (
    <View style={styles.searchBar}>
      <View style={styles.searchSection}>
        <Icon name="search" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Inicia tu busqueda"
        />
      </View>
      <Pressable style={styles.settingsButton}>
        <Icon name="sliders" style={styles.slidersIcon} />
      </Pressable>
    </View>
  );
}
