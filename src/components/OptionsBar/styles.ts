import { StyleSheet } from 'react-native';

import { error } from '#/common/constants/colors';
import { SIZES } from '#/common/constants/fonts';
import { fontMaker } from '#/common/utils/fonts';
import { scale, verticalScale } from '#/common/utils/scaling';
import { ROW } from '#/styles/positions';
import { FULL_SIZE } from '#/styles/sizes';

export const styles = StyleSheet.create({
  errorList: {
    paddingTop: verticalScale(8)
  },
  errorMessage: {
    paddingLeft: scale(4)
  },
  errorlabel: {
    color: error.default
  },
  firstChild: {
    borderBottomLeftRadius: scale(10),
    borderTopLeftRadius: scale(10)
  },
  label: {
    paddingBottom: scale(5),
    ...fontMaker({ size: SIZES.SMALL })
  },
  lastChild: {
    borderBottomRightRadius: scale(10),
    borderRightWidth: scale(1),
    borderTopRightRadius: scale(10)
  },
  option: {
    borderRadius: 0,
    borderRightWidth: 0,
    borderWidth: scale(1),
    flex: 1,
    paddingVertical: verticalScale(12)
  },
  optionBar: {
    flexDirection: ROW,
    width: FULL_SIZE
  }
});
