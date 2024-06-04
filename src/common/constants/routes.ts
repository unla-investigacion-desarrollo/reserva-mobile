import { HomeIcon, MapPinIcon } from '#/assets';

export const ROUTES = {
  Login: 'login',
  App: '(app)',
  Home: 'index',
  Sighting: 'sighting/[id]',
  Map: 'map',
  TabBar: '(tabBar)',
  HomeStack: '(homeStack)'
} as const;

export const ROUTE_NAMES = {
  [ROUTES.Login]: 'Login',
  [ROUTES.App]: 'App',
  [ROUTES.Home]: 'Home',
  [ROUTES.Sighting]: 'Sighting',
  [ROUTES.Map]: 'Map',
  [ROUTES.TabBar]: 'Tabs',
  [ROUTES.HomeStack]: 'Home'
} as const;

export const ROUTE_LINKS = {
  Home: '/',
  Login: '/login',
  Sighting: '/(app)/(tabBar)/(homeStack)/sighting/[id]',
  Map: '/map',
  TabBar: '/',
  HomeStack: '/',
  App: '/'
} as const;

export const AUTH_STACK_ROUTES = [ROUTES.Login, ROUTES.App];

export const MAIN_STACK_ROUTES = [ROUTES.TabBar] as const;

export const TAB_BAR_ROUTES = [ROUTES.HomeStack, ROUTES.Map] as const;

export const HOME_STACK_ROUTES = [
  { name: ROUTES.Home, options: {} },
  { name: ROUTES.Sighting, options: { headerShown: false } }
] as const;

export const ROUTE_ICONS = {
  [ROUTES.HomeStack]: HomeIcon,
  [ROUTES.Map]: MapPinIcon
} as const;
