import { Redirect, Stack } from 'expo-router';

import { MAIN_STACK_ROUTES } from '#/common/constants/routes';
import { useSessionStore } from '#/common/stores/session';

function Navigation() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {MAIN_STACK_ROUTES.map(route => (
        <Stack.Screen key={route} name={route} />
      ))}
    </Stack>
  );
}

export default function Layout() {
  const { isLoggedIn } = useSessionStore();

  if (isLoggedIn) {
    return <Navigation />;
  }
  return <Redirect href="/login" />;
}
