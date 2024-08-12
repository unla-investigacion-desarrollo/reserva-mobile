import { Redirect, Stack } from 'expo-router';

import { setAuthHeader } from '#/common/config/api';
import { MAIN_STACK_ROUTES } from '#/common/constants/routes';
import { useMount } from '#/common/hooks/useMount';
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
  const { isLoggedIn, userData } = useSessionStore();

  useMount(() => {
    if (userData) {
      setAuthHeader(userData.accessToken);
    }
  });

  if (isLoggedIn) {
    return <Navigation />;
  }
  return <Redirect href="/login" />;
}
