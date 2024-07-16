import { StyleSheet } from 'react-native';

import { background } from '#/common/constants/colors';
import { REGULAR_WEIGHT, SIZES } from '#/common/constants/fonts';
import { Color } from '#/common/types/colors';
import { fontMaker } from '#/common/utils/fonts';
import { scale, verticalScale } from '#/common/utils/scaling';
import { CENTER, FLEX_START, ROW } from '#/styles/positions';

export const BACK_ICON_SIZE = scale(24);

export const styles = StyleSheet.create({
  backButton: {
    paddingHorizontal: scale(12)
  },
  backButtonText: (color: Color) => ({
    left: scale(-4),
    ...fontMaker({ color, weight: REGULAR_WEIGHT })
  }),
  container: (top = 0, backgroundColor: Color = background) => ({
    paddingTop: verticalScale(top),
    backgroundColor,
    marginBottom: verticalScale(-8),
    zIndex: 8,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  }),
  header: {
    alignItems: CENTER,
    flexDirection: ROW,
    height: verticalScale(60),
    justifyContent: FLEX_START,
    paddingBottom: verticalScale(6)
  },
  text: (color: Color) => ({
    flex: 1,
    textAlign: 'right',
    paddingHorizontal: scale(24),
    ...fontMaker({ color, weight: REGULAR_WEIGHT, size: SIZES.MEDIUM_BIG })
  })
});
