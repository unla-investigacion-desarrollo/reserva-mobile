import { HomeIcon, MapPinIcon } from '#/assets';

import { RouteLinks } from '../types/routes';

export const ROUTES = {
  Home: 'index',
  Sighting: 'sighting/[id]',
  Map: 'map',
  TabBar: '(tabBar)',
  HomeStack: '(homeStack)'
} as const;

export const ROUTE_NAMES = {
  [ROUTES.Home]: 'Home',
  [ROUTES.Sighting]: 'Sighting',
  [ROUTES.Map]: 'Map',
  [ROUTES.TabBar]: 'Tabs',
  [ROUTES.HomeStack]: 'Home'
} as const;

export const ROUTE_LINKS: RouteLinks = {
  Home: '/',
  Sighting: '/(tabBar)/(homeStack)/sighting/[id]',
  Map: '/map',
  TabBar: '/',
  HomeStack: '/'
} as const;

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
