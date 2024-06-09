import { StyleSheet } from 'react-native';

import { accent, background, black, neutral, primary, white } from '#/common/constants/colors';
import { MEDIUM_WEIGHT, REGULAR_WEIGHT, SIZES } from '#/common/constants/fonts';
import { WINDOW_HEIGHT } from '#/common/constants/platform';
import { colorWithOpacity } from '#/common/utils/color';
import { fontMaker } from '#/common/utils/fonts';
import { scale, verticalScale } from '#/common/utils/scaling';
import { ABSOLUTE, CENTER, FLEX_START, ROW } from '#/styles/positions';
import { FULL_SIZE } from '#/styles/sizes';

export const FIELD_GAP = 12;

export const CATEGORY_ICON_SIZE = scale(16);
export const BACK_ICON_SIZE = scale(24);

export const styles = StyleSheet.create({
  SightingContainer: {
    backgroundColor: background,
    flex: 1
  },
  backButton: {
    alignSelf: FLEX_START,
    backgroundColor: colorWithOpacity(black, 50),
    borderRadius: 15,
    columnGap: scale(4),
    justifyContent: FLEX_START,
    marginLeft: scale(8),
    marginTop: verticalScale(16),
    padding: scale(8),
    position: ABSOLUTE
  },
  backButtonText: {
    ...fontMaker({ color: white })
  },
  backgroundImage: {
    height: WINDOW_HEIGHT * (7 / 16)
  },
  bannerImage: {
    borderRadius: 8,
    height: verticalScale(80),
    marginTop: verticalScale(12),
    width: FULL_SIZE
  },
  dot: (selected: boolean) => ({
    width: scale(12),
    height: scale(12),
    borderRadius: 40,
    zIndex: 10,
    backgroundColor: selected ? accent.darker : accent.lighter
  }),
  dotRow: {
    bottom: verticalScale(16),
    flexDirection: ROW,
    gap: scale(4),
    justifyContent: CENTER,
    position: ABSOLUTE,
    width: FULL_SIZE,
    zIndex: 10
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
    borderRadius: 16,
    borderWidth: 1,
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
