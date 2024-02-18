import { COLORS } from '#/common/constants/colors';
import { verticalScale } from '#/common/utils/scaling';
import { ColorValue, StyleSheet } from 'react-native';


export const shadowStyles = StyleSheet.create({
  baseShadow: (color: ColorValue = COLORS.black) => ({
    shadowColor: color,
    shadowOffset: {
      width: 0,
      height: verticalScale(4)
    },
    shadowOpacity: 0.25,
    shadowRadius: verticalScale(6),
    elevation: 3
  })
});
