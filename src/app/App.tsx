import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { NavStackContainer as NavStack } from './navigation/navStack';
import { View } from 'react-native';
import styles from './styles';

function App() {
  return (
    <View style={styles.app}>
      <NavigationContainer>
        <NavStack />
      </NavigationContainer>
    </View>
  );
}

export default App;
