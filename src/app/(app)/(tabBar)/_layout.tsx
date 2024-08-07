import { View } from 'react-native';

import { Tabs } from 'expo-router';

import { black, primary } from '#/common/constants/colors';
import { ROUTE_ICONS, ROUTE_LABELS, TAB_BAR_ROUTES } from '#/common/constants/routes';
import { TabIcon } from '#/components';
import { tabBarStyles } from '#/styles/tabBar';
import { translate } from '#/translations/utils';

export default function Layout() {
  return (
    <View style={tabBarStyles.navigator}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarInactiveTintColor: black,
          tabBarActiveTintColor: primary.default,
          tabBarStyle: tabBarStyles.tabBar
        }}>
        {TAB_BAR_ROUTES.map(route => (
          <Tabs.Screen
            key={route}
            name={route}
            options={{
              tabBarLabel: translate(ROUTE_LABELS[route]),
              tabBarIcon: props => <TabIcon Icon={ROUTE_ICONS[route]} {...props} />
            }}
          />
        ))}
      </Tabs>
    </View>
  );
}
