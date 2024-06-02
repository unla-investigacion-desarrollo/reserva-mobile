import { AllRoutes } from 'expo-router';

import { ROUTES } from '../constants/routes';

export type RouteLinks = Record<keyof typeof ROUTES, AllRoutes>;
