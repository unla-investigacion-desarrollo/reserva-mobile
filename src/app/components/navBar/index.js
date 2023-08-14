import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import {styles} from './styles';
import Home from '../../screens/home';
import Map from '../../screens/map';

const NavBar = createBottomTabNavigator();

export function NavBarContainer() {
  return (
    <NavBar.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.navBar,
      }}>
      <NavBar.Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarLabel: ({focused}) => {
            return focused && <Text style={styles.label}>Inicio</Text>;
          },
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              style={focused ? styles.selectedIcon : styles.icon}
            />
          ),
        }}
      />
      <NavBar.Screen
        name="Mapa"
        component={Map}
        options={{
          tabBarLabel: ({focused}) => {
            return focused && <Text style={styles.label}>Mapa</Text>;
          },
          tabBarIcon: ({focused}) => (
            <Icon
              name="map-pin"
              style={focused ? styles.selectedIcon : styles.icon}
            />
          ),
        }}
      />
    </NavBar.Navigator>
  );
}

export default NavBar;
