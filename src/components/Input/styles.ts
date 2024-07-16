import { StyleSheet } from 'react-native';

import { COLORS, error, primary } from '#/common/constants/colors';
import { SIZES } from '#/common/constants/fonts';
import { fontMaker } from '#/common/utils/fonts';
import { scale, verticalScale } from '#/common/utils/scaling';
import { ABSOLUTE, CENTER, ROW } from '#/styles/positions';
import { FULL_SIZE } from '#/styles/sizes';

export default StyleSheet.create({
  clearButton: {
    marginHorizontal: scale(8)
  },
  container: {
    gap: verticalScale(4)
  },
  errorList: {
    paddingTop: verticalScale(4)
  },
  errorlabel: {
    color: error.default
  },
  icon: {
    bottom: verticalScale(12),
    left: scale(8),
    position: ABSOLUTE,
    top: verticalScale(8)
  },
  inputContainer: (hasError = false, bottomLineDesign?: boolean) => ({
    alignItems: CENTER,
    borderColor: hasError ? error.default : primary.default,
    borderRadius: scale(bottomLineDesign ? 0 : 12),
    ...(bottomLineDesign
      ? { borderWidth: scale(0), borderBottomWidth: scale(1) }
      : { borderWidth: scale(1) }),
    flexDirection: ROW,
    width: FULL_SIZE
  }),
  label: {
    ...fontMaker({ size: SIZES.SMALL })
  },
  textInput: (hasIcon: boolean) => ({
    color: COLORS.black,
    flex: 1,
    height: verticalScale(48),
    paddingLeft: scale(hasIcon ? 40 : 10),
    paddingRight: scale(8)
  })
});
