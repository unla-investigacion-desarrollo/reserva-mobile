import { StyleSheet } from 'react-native';

import { black, white } from '#/common/constants/colors';
import { MEDIUM_WEIGHT, REGULAR_WEIGHT, SIZES } from '#/common/constants/fonts';
import { colorWithOpacity } from '#/common/utils/color';
import { fontMaker } from '#/common/utils/fonts';
import { scale, verticalScale } from '#/common/utils/scaling';
import { ABSOLUTE } from '#/styles/positions';
import { FULL_SIZE } from '#/styles/sizes';

export const styles = StyleSheet.create({
  author: {
    ...fontMaker({ color: white, size: SIZES.XXXSMALL, weight: MEDIUM_WEIGHT }),
    bottom: 2,
    position: ABSOLUTE,
    right: 5,
    textShadowColor: black,
    textShadowRadius: 2
  },
  backgroundImage: {
    borderRadius: scale(8),
    width: FULL_SIZE
  },
  content: {
    backgroundColor: colorWithOpacity(black, 25),
    borderRadius: scale(8),
    gap: verticalScale(8),
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(20)
  },
  link: {
    ...fontMaker({ color: white, size: SIZES.MEDIUM, weight: REGULAR_WEIGHT }),
    lineHeight: scale(20),
    textDecorationLine: 'underline',
    textShadowColor: black,
    textShadowRadius: 2
  },
  subtitle: {
    ...fontMaker({ color: white, size: SIZES.SMALL, weight: REGULAR_WEIGHT }),
    lineHeight: scale(16),
    textShadowColor: black,
    textShadowRadius: 2
  },
  title: {
    ...fontMaker({ color: white, size: SIZES.MEDIUM, weight: MEDIUM_WEIGHT }),
    lineHeight: scale(20),
    textShadowColor: black,
    textShadowRadius: 2
  },
  visitUsCard: {
    borderRadius: scale(8)
  }
});
