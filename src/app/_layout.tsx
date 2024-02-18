import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { MAIN_STACK_ROUTES } from '#/common/constants/routes';

export default function Layout() {
  return (
    <>
      <StatusBar animated style="light" />
      <Stack screenOptions={{ headerShown: false }}>
        {MAIN_STACK_ROUTES.map(route => (
          <Stack.Screen key={route} name={route} />
        ))}
      </Stack>
    </>
  );
}
