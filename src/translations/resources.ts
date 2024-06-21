import { ROUTES, ROUTE_NAMES } from '#/common/constants/routes';
import { VISIT_US_ES } from '#/components/VisitUsCard/i18n';
import { HOME_ES } from '#/screens/Home/i18n';
import { LOGIN_ES } from '#/screens/Login/i18n';

import { CORE_ES, ERROR_ES } from '../i18n';

export const resources = {
  es: {
    translation: {
      Core: CORE_ES,
      Error: ERROR_ES,
      [ROUTE_NAMES[ROUTES.Home]]: HOME_ES,
      [ROUTE_NAMES[ROUTES.Login]]: LOGIN_ES,
      VisitUs: VISIT_US_ES
    }
  }
};
