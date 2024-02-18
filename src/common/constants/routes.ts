import { HomeIcon, MapPinIcon } from '#/assets';

export const ROUTES = {
  Home: 'index',
  Map: 'map',
  TabBar: '(tabBar)',
  HomeStack: '(homeStack)'
} as const;

export const ROUTE_NAMES = {
  [ROUTES.Home]: 'Home',
  [ROUTES.Map]: 'Map',
  [ROUTES.TabBar]: 'Tabs',
  [ROUTES.HomeStack]: 'Home'
} as const;

export const MAIN_STACK_ROUTES = [ROUTES.TabBar] as const;

export const TAB_BAR_ROUTES = [ROUTES.HomeStack, ROUTES.Map] as const;

export const ROUTE_ICONS = {
  [ROUTES.HomeStack]: HomeIcon,
  [ROUTES.Map]: MapPinIcon
} as const;

export const HOME_STACK_ROUTES = [ROUTES.Home] as const;
