import { StyleSheet } from 'react-native';

import { background, black, neutral, primary } from '#/common/constants/colors';
import { MEDIUM_WEIGHT, REGULAR_WEIGHT, SIZES } from '#/common/constants/fonts';
import { WINDOW_HEIGHT } from '#/common/constants/platform';
import { fontMaker } from '#/common/utils/fonts';
import { scale, verticalScale } from '#/common/utils/scaling';
import { CENTER, ROW } from '#/styles/positions';
import { FULL_SIZE } from '#/styles/sizes';

export const FIELD_GAP = 12;

export const CATEGORY_ICON_SIZE = scale(16);

export const styles = StyleSheet.create({
  SightingContainer: {
    backgroundColor: background,
    flex: 1
  },
  backgroundImage: {
    height: WINDOW_HEIGHT * (7 / 16)
  },
  bannerImage: {
    borderRadius: scale(8),
    height: verticalScale(80),
    marginTop: verticalScale(12),
    width: FULL_SIZE
  },
  field: {
    paddingHorizontal: scale(20),
    width: FULL_SIZE
  },
  fieldBody: {
    ...fontMaker({ color: neutral.dark, size: SIZES.SMALL, weight: REGULAR_WEIGHT }),
    letterSpacing: 0.25,
    lineHeight: scale(20)
  },
  fieldTitle: {
    ...fontMaker({ color: black, size: SIZES.MEDIUM, weight: MEDIUM_WEIGHT }),
    letterSpacing: 0.15,
    lineHeight: scale(24)
  },
  fields: {
    paddingBottom: verticalScale(16)
  },
  header: (top = 0) => ({
    height: verticalScale(top + 8),
    backgroundColor: background,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    marginBottom: verticalScale(-8),
    zIndex: 8
  }),
  headerInfo: {
    backgroundColor: background,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    gap: verticalScale(6),
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(24),
    top: -verticalScale(12)
  },
  name: {
    ...fontMaker({ color: black, size: SIZES.BIG, weight: REGULAR_WEIGHT }),
    lineHeight: scale(28)
  },
  scientificName: {
    ...fontMaker({ color: neutral.dark, size: SIZES.SMALL, weight: MEDIUM_WEIGHT }),
    lineHeight: scale(16)
  },
  tag: {
    alignItems: CENTER,
    borderColor: primary.default,
    borderRadius: scale(16),
    borderWidth: scale(1),
    flexDirection: ROW,
    gap: scale(4),
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(8)
  },
  type: {
    ...fontMaker({ color: primary.default, size: SIZES.SMALL, weight: MEDIUM_WEIGHT })
  },
  typeRow: {
    flexDirection: ROW,
    gap: scale(12)
  }
});
