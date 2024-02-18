import { ColorValue, StyleSheet } from 'react-native';

import { scale, verticalScale } from '#/common/utils/scaling';
import { CENTER } from '#/styles/positions';

export default StyleSheet.create({
  container: (hasMargin: boolean, isPressable: boolean) => ({
    marginHorizontal: hasMargin ? scale(16) : 0,
    minHeight: isPressable ? verticalScale(40) : undefined,
    alignItems: CENTER,
    justifyContent: CENTER
  }),
  image: (size: number, tintColor?: ColorValue) => ({
    width: scale(size),
    height: scale(size),
    tintColor
  })
});
