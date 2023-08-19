import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';
import Home from '../../screens/home';
import Map from '../../screens/map';

const NavBar = createBottomTabNavigator();

export function NavBarContainer() {
  const nabBarLabel = ({ focused, text }) =>
    focused && <Text style={styles.label}>{text}</Text>;
  const navBarIcon = ({ focused, iconName }) => (
    <Icon name={iconName} style={focused ? styles.selectedIcon : styles.icon} />
  );

  return (
    <NavBar.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.navBar
      }}>
      <NavBar.Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) =>
            nabBarLabel({ focused, text: 'Inicio' }),
          tabBarIcon: ({ focused }) => navBarIcon({ focused, iconName: 'home' })
        }}
      />
      <NavBar.Screen
        name="Mapa"
        component={Map}
        options={{
          tabBarLabel: ({ focused }) => nabBarLabel({ focused, text: 'Mapa' }),
          tabBarIcon: ({ focused }) => navBarIcon({ focused, iconName: 'map' })
        }}
      />
    </NavBar.Navigator>
  );
}

export default NavBarContainer;
