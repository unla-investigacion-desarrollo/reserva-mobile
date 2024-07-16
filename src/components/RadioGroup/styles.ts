import { StyleSheet } from 'react-native';

import { error } from '#/common/constants/colors';
import { SIZES } from '#/common/constants/fonts';
import { fontMaker } from '#/common/utils/fonts';
import { scale, verticalScale } from '#/common/utils/scaling';

export const styles = StyleSheet.create({
  errorList: {
    paddingTop: verticalScale(8)
  },
  errorMessage: {
    paddingLeft: scale(6)
  },
  errorlabel: {
    color: error.default
  },
  label: {
    paddingBottom: scale(4),
    paddingLeft: scale(2),
    ...fontMaker({ size: SIZES.SMALL })
  },
  radioGroup: {
    gap: verticalScale(16),
    padding: scale(4)
  }
});
