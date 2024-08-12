import { StyleSheet } from 'react-native';

import { primary } from '#/common/constants/colors';
import { scale, verticalScale } from '#/common/utils/scaling';
import { ABSOLUTE, CENTER, ROW } from '#/styles/positions';
import { FULL_SIZE } from '#/styles/sizes';

export const ICON_SIZE = scale(16);

export const styles = StyleSheet.create({
  dot: (isAddImageItem: boolean) => ({
    width: scale(16),
    height: scale(16),
    borderRadius: scale(40),
    borderColor: primary.default,
    borderWidth: scale(isAddImageItem ? 1 : 0)
  }),
  dotRow: {
    alignItems: CENTER,
    bottom: verticalScale(16),
    flexDirection: ROW,
    gap: scale(6),
    justifyContent: CENTER,
    position: ABSOLUTE,
    width: FULL_SIZE
  },
  plusIcon: {
    alignSelf: CENTER,
    position: ABSOLUTE,
    zindex: 10
  }
});
