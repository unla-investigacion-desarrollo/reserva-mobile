import { StyleSheet } from 'react-native';

import { neutral } from '#/common/constants/colors';
import { MEDIUM_WEIGHT, REGULAR_WEIGHT, SIZES } from '#/common/constants/fonts';
import { fontMaker } from '#/common/utils/fonts';
import { scale, verticalScale } from '#/common/utils/scaling';
import { CENTER, ROW } from '#/styles/positions';
import { FULL_SIZE } from '#/styles/sizes';

export const styles = StyleSheet.create({
  image: {
    aspectRatio: 1 / 1,
    borderRadius: scale(40),
    width: scale(40)
  },
  name: {
    ...fontMaker({ color: neutral.darker, size: SIZES.SMALL, weight: MEDIUM_WEIGHT }),
    lineHeight: scale(20)
  },
  nameSection: {
    gap: verticalScale(4)
  },
  scientificName: {
    ...fontMaker({ color: neutral.default, size: SIZES.XXSMALL, weight: REGULAR_WEIGHT }),
    lineHeight: scale(20)
  },
  sightingTag: {
    alignItems: CENTER,
    flexDirection: ROW,
    gap: scale(8),
    padding: scale(8),
    width: FULL_SIZE
  }
});
