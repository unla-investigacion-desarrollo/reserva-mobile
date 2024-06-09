import { useEffect } from 'react';

import { View } from 'react-native';

import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useLoginMutation } from '#/common/api/auth/login';
import { setAuthHeader } from '#/common/config/api';
import { BUTTON_INTENTS } from '#/common/constants/button';
import { ROUTE_LINKS } from '#/common/constants/routes';
import { LoginResponse } from '#/common/services/Auth/types';
import { useSessionStore } from '#/common/stores/session';
import { Button } from '#/components';

import { styles } from './styles';

export function Login() {
  const { top, bottom } = useSafeAreaInsets();

  const { setIsLoggedIn } = useSessionStore();

  const handleLoginResponse = (res: LoginResponse) => {
    console.log('LOGIN SUCCESS');
    setAuthHeader(res.data.accessToken);
    setIsLoggedIn(true);
    router.replace(ROUTE_LINKS.Home);
  };

  const { mutate, isPending } = useLoginMutation({
    onSuccess: res => {
      if (res && res.success) {
        handleLoginResponse(res);
      }
    },
    onError: res => console.log('LOGIN ERRPR: ', res.result)
  });

  useEffect(() => {
    console.log('isPending', isPending);
  }, [isPending]);

  return (
    <View style={styles.login(top, bottom)}>
      <Button
        intent={BUTTON_INTENTS.PRIMARY}
        title="Login.login"
        onPress={() => mutate({ usernameOrEmail: 'fran', password: '123' })}
      />
    </View>
  );
}
