import { useRouter } from 'expo-router';

import { removeAuthHeader, setAuthHeader } from '../config/api';
import { ROUTE_LINKS } from '../constants/routes';
import { LoginResponse } from '../services/Auth/types';
import { useSessionStore } from '../stores/session';

export const useSession = () => {
  const { setIsLoggedIn, setUserData, clearUserData } = useSessionStore();
  const router = useRouter();

  const login = (res: LoginResponse) => {
    setAuthHeader(res.data.accessToken);
    setIsLoggedIn(true);
    setUserData({
      id: res.data.id,
      accessToken: res.data.accessToken,
      role: res.data.role,
      typeToken: res.data.typeToken,
      username: res.data.username
    });
    router.replace(ROUTE_LINKS.Home);
  };

  const logOut = () => {
    removeAuthHeader();
    setIsLoggedIn(false);
    clearUserData();
  };
  return { login, logOut };
};
