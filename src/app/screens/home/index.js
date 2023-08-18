import { Platform, Pressable, ScrollView, StatusBar, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Header from '../../components/header';

import { styles } from './styles';
import { primary } from '../../../constants/colors';
import SearchBar from './components/searchBar';
import Constants from 'expo-constants';

export function Home() {
  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor(primary);
  }
  return (
    <View style={styles.home}>
      <Header />
      <ScrollView style={styles.body}>
        <View style={styles.topLine}>
          <SearchBar />
          <Pressable style={styles.addSightingButton}>
            <Icon name="plus" style={styles.addSightingIcon} />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
