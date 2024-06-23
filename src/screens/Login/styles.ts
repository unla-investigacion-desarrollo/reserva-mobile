import { StyleSheet } from 'react-native';

import { accent, background, black, error, neutral, primary } from '#/common/constants/colors';
import { BOLD_WEIGHT, MEDIUM_WEIGHT, SIZES } from '#/common/constants/fonts';
import { STATUS_BAR_HEIGHT } from '#/common/constants/platform';
import { fontMaker } from '#/common/utils/fonts';
import { scale, verticalScale } from '#/common/utils/scaling';
import { CENTER, COLUMN, ROW, SPACE_BETWEEN } from '#/styles/positions';
import { shadowStyles } from '#/styles/shadows';
import { FULL_SIZE } from '#/styles/sizes';

export const styles = StyleSheet.create({
  appIcon: {
    borderRadius: 24,
    height: scale(95),
    width: scale(95)
  },
  appIconShadow: {
    backgroundColor: accent.default,
    borderRadius: 24,
    ...shadowStyles.baseShadow(black)
  },
  body: {
    flexDirection: COLUMN,
    flex: 1,
    justifyContent: SPACE_BETWEEN,
    paddingHorizontal: scale(20)
  },
  checkboxRow: {
    flexDirection: ROW,
    gap: scale(4),
    paddingLeft: scale(4),
    paddingTop: verticalScale(24)
  },
  error: {
    ...fontMaker({ color: error.default, size: SIZES.SMALL, weight: MEDIUM_WEIGHT })
  },
  fieldText: {
    ...fontMaker({ color: neutral.dark, size: SIZES.SMALL, weight: MEDIUM_WEIGHT })
  },
  fields: {
    gap: verticalScale(24)
  },
  header: (top = STATUS_BAR_HEIGHT) => ({
    alignItems: CENTER,
    backgroundColor: accent.default,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingTop: verticalScale(12 + top),
    paddingBottom: verticalScale(24),
    width: FULL_SIZE
  }),
  icon: {
    top: verticalScale(12)
  },
  label: {
    paddingLeft: scale(8),
    ...fontMaker({ color: primary.default, size: SIZES.SMALL, weight: MEDIUM_WEIGHT }),
    lineHeight: scale(16)
  },
  login: (bottom = 0) => ({
    flex: 1,
    backgroundColor: background,
    paddingBottom: verticalScale(bottom)
  }),
  loginButton: {
    marginBottom: scale(12),
    paddingVertical: verticalScale(16)
  },
  responseError: {
    paddingBottom: verticalScale(4)
  },
  title: {
    ...fontMaker({ color: neutral.darker, size: SIZES.XXBIG, weight: BOLD_WEIGHT }),
    alignSelf: CENTER,
    paddingBottom: verticalScale(24),
    paddingTop: verticalScale(16)
  }
});
