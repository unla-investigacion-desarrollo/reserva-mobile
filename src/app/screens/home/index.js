import {Pressable, ScrollView, StatusBar, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Header from '../../components/header';

import {styles} from './styles';
import {primary} from '../../../constants/colors';

export function Home() {
  StatusBar.setBackgroundColor(primary);
  return (
    <View style={styles.home}>
      <Header />
      <ScrollView style={styles.body}>
        <View style={styles.topLine}>
          <View style={styles.searchBar}></View>
          <Pressable style={styles.addSightingButton}>
            <Icon name="plus" style={styles.addSightingIcon} />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
