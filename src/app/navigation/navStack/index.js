import { createStackNavigator } from '@react-navigation/stack';
import NewSighting from '../../screens/newSighting';
import NavBarContainer from '../navBar';

const NavStack = createStackNavigator();

export function NavStackContainer() {
  return (
    <NavStack.Navigator initialRouteName="NavBarView">
      <NavStack.Screen
        options={{ headerShown: false }}
        name="NavBarView"
        component={NavBarContainer}
      />
      <NavStack.Screen name="NewSighting" component={NewSighting} />
    </NavStack.Navigator>
  );
}

export default NavStackContainer;
