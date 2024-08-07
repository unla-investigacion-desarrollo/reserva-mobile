import { ROUTE_NAMES } from '#/common/constants/routes';
import { VISIT_US_ES } from '#/components/VisitUsCard/i18n';
import { HOME_ES } from '#/screens/Home/i18n';
import { LOGIN_ES } from '#/screens/Login/i18n';
import { NEW_SIGHTING_ES } from '#/screens/NewSighting/i18n';

import { CORE_ES, ERROR_ES, PERMISSIONS_ES, ROUTES_ES } from '../i18n';

export const resources = {
  es: {
    translation: {
      Core: CORE_ES,
      Error: ERROR_ES,
      [ROUTE_NAMES.Home]: HOME_ES,
      [ROUTE_NAMES.Login]: LOGIN_ES,
      [ROUTE_NAMES.NewSighting]: NEW_SIGHTING_ES,
      VisitUs: VISIT_US_ES,
      Permissions: PERMISSIONS_ES,
      Routes: ROUTES_ES
    }
  }
};
