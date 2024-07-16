import { StyleSheet } from 'react-native';

import fonts from '#/common/config/fonts';
import { error } from '#/common/constants/colors';
import { scale } from '#/common/utils/scaling';
import { CENTER, FLEX_START, ROW } from '#/styles/positions';

export const ERROR_ICON_PROPS = {
  stroke: error.default,
  width: scale(20),
  height: scale(20),
  strokeWidth: 2
};

export default StyleSheet.create({
  error: {
    alignSelf: CENTER,
    color: error.default,
    marginLeft: scale(5)
  },
  errorIcon: {
    alignSelf: FLEX_START
  },
  errorRow: {
    flexDirection: ROW,
    paddingLeft: scale(8)
  },
  text: {
    ...fonts.baseFont
  }
});
