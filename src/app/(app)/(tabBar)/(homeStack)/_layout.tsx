import { Stack } from 'expo-router';

import { HOME_STACK_ROUTES } from '#/common/constants/routes';
import { Header } from '#/components';

export default function Layout() {
  return (
    <Stack screenOptions={{ header: () => <Header /> }}>
      {HOME_STACK_ROUTES.map(route => (
        <Stack.Screen key={route.name} name={route.name} options={route.options} />
      ))}
    </Stack>
  );
}
