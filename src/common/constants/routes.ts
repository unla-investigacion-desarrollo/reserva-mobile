import { HomeIcon, MapPinIcon } from '#/assets';

import { Tx } from '../types/i18n';

export const ROUTES = {
  Login: 'login',
  App: '(app)',
  NewSighting: 'newSighting',
  TabBar: '(tabBar)',
  HomeStack: '(homeStack)',
  Home: 'index',
  Sighting: 'sighting/[id]',
  Map: 'map'
} as const;

export const ROUTE_NAMES = {
  Login: 'Login',
  App: 'App',
  NewSighting: 'NewSighting',
  TabBar: 'Tabs',
  HomeStack: 'Home',
  Home: 'Home',
  Sighting: 'Sighting',
  Map: 'Map'
} as const;

export const ROUTE_LABELS: Record<(typeof TAB_BAR_ROUTES)[any], Tx> = {
  [ROUTES.HomeStack]: 'Routes.home',
  [ROUTES.Map]: 'Routes.map'
} as const;

export const ROUTE_LINKS = {
  Login: '/login',
  App: '/',
  NewSighting: '/newSighting',
  Home: '/',
  Sighting: '/(app)/(tabBar)/(homeStack)/sighting/[id]',
  Map: '/map',
  TabBar: '/',
  HomeStack: '/'
} as const;

export const AUTH_STACK_ROUTES = [ROUTES.Login, ROUTES.App] as const;

export const MAIN_STACK_ROUTES = [ROUTES.NewSighting, ROUTES.TabBar] as const;

export const TAB_BAR_ROUTES = [ROUTES.HomeStack, ROUTES.Map] as const;

export const HOME_STACK_ROUTES = [
  { name: ROUTES.Home, options: {} },
  { name: ROUTES.Sighting, options: { headerShown: false } }
] as const;

export const ROUTE_ICONS = {
  [ROUTES.HomeStack]: HomeIcon,
  [ROUTES.Map]: MapPinIcon
} as const;
