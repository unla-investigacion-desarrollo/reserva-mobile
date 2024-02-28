import { ColorValue, StyleSheet } from 'react-native';

import { COLORS } from '#/common/constants/colors';
import { verticalScale } from '#/common/utils/scaling';

export const shadowStyles = StyleSheet.create({
  baseShadow: (color: ColorValue = COLORS.black) => ({
    shadowColor: color,
    shadowOffset: {
      width: 0,
      height: verticalScale(2)
    },
    shadowOpacity: 0.3,
    shadowRadius: verticalScale(4),
    elevation: 4
  })
});
