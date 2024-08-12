import { StyleSheet } from 'react-native';

import { neutral } from '#/common/constants/colors';
import { MEDIUM_WEIGHT, REGULAR_WEIGHT, SIZES } from '#/common/constants/fonts';
import { fontMaker } from '#/common/utils/fonts';
import { scale, verticalScale } from '#/common/utils/scaling';
import { CENTER, ROW, SPACE_BETWEEN } from '#/styles/positions';

export const ICON_SIZE = scale(18);

export const styles = StyleSheet.create({
  body: {
    flex: 1,
    gap: verticalScale(4),
    justifyContent: SPACE_BETWEEN,
    paddingBottom: verticalScale(12),
    paddingHorizontal: scale(12),
    paddingTop: verticalScale(8)
  },
  image: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    height: verticalScale(172),
    width: scale(172)
  },
  name: {
    ...fontMaker({ color: neutral.darker, size: SIZES.MEDIUM, weight: MEDIUM_WEIGHT })
  },
  scientificName: {
    paddingBottom: verticalScale(4),
    ...fontMaker({ color: neutral.darker, size: SIZES.SMALL, weight: REGULAR_WEIGHT })
  },
  sightingCard: {
    backgroundColor: neutral.lighter,
    borderRadius: scale(12),
    width: scale(172)
  },
  type: {
    ...fontMaker({ color: neutral.default, size: SIZES.SMALL, weight: MEDIUM_WEIGHT })
  },
  typeRow: {
    alignItems: CENTER,
    flexDirection: ROW,
    gap: scale(4),
    left: -4
  }
});
