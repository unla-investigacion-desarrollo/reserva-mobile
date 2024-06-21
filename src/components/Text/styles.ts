import { StyleSheet } from 'react-native';

import fonts from '#/common/config/fonts';
import { error } from '#/common/constants/colors';
import { scale, verticalScale } from '#/common/utils/scaling';
import { CENTER, FLEX_START, ROW } from '#/styles/positions';

export const ERROR_ICON_PROPS = {
  stroke: error.default
};

export default StyleSheet.create({
  error: {
    alignSelf: CENTER,
    color: error.default,
    marginLeft: scale(5)
  },
  errorIcon: {
    alignSelf: FLEX_START,
    top: verticalScale(2)
  },
  errorRow: {
    flexDirection: ROW,
    paddingLeft: scale(8)
  },
  text: {
    ...fonts.baseFont
  }
});
