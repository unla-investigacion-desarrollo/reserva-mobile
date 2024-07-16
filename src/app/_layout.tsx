import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

import { APIProvider } from '#/common/api';
import { AUTH_STACK_ROUTES } from '#/common/constants/routes';
import { toastConfig } from '#/styles/toast';

function Navigation() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {AUTH_STACK_ROUTES.map(route => (
        <Stack.Screen key={route} name={route} />
      ))}
    </Stack>
  );
}

export default function Layout() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{ flex: 1 }}>
      <APIProvider>
        <Navigation />
        <Toast config={toastConfig} />
      </APIProvider>
    </GestureHandlerRootView>
  );
}
