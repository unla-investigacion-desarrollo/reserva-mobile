import {Platform, Pressable, ScrollView, StatusBar, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';
import Header from '../../components/header';

import styles from './styles';
import {primary} from '../../../constants/colors';
import SearchBar from './components/searchBar';

export function Home() {
  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor(primary);
  }
  const navigator = useNavigation();

  return (
    <View style={styles.home}>
      <Header />
      <ScrollView style={styles.body}>
        <View style={styles.topLine}>
          <SearchBar />
          <Pressable
            style={styles.addSightingButton}
            onPress={() => navigator.navigate('NewSighting')}>
            <Icon name="plus" style={styles.addSightingIcon} />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
