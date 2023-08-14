import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {NavBarContainer as NavBar} from './components/navBar';
import {View} from 'react-native';
import {styles} from './styles';

function App() {
  return (
    <View style={styles.app}>
      <NavigationContainer>
        <NavBar />
      </NavigationContainer>
    </View>
  );
}

export default App;
