import { ROUTES, ROUTE_NAMES } from '#/common/constants/routes';
import { VISIT_US_ES } from '#/components/VisitUsCard/i18n';
import { HOME_ES } from '#/screens/Home/i18n';

import { CORE_ES } from '../i18n';

export const resources = {
  es: {
    translation: {
      Core: CORE_ES,
      [ROUTE_NAMES[ROUTES.Home]]: HOME_ES,
      VisitUs: VISIT_US_ES
    }
  }
};
