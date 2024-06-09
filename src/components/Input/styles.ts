import { StyleSheet } from 'react-native';

import fonts from '#/common/config/fonts';
import { COLORS, primary } from '#/common/constants/colors';
import { scale, verticalScale } from '#/common/utils/scaling';
import { ABSOLUTE, CENTER, ROW } from '#/styles/positions';
import { FULL_SIZE } from '#/styles/sizes';
import { TEXT_SIZE } from '#/styles/text';

const { SMALL } = TEXT_SIZE;

export default StyleSheet.create({
  clearButton: {
    marginHorizontal: scale(8)
  },
  container: {
    gap: scale(4)
  },
  error: {
    color: COLORS.error.default,
    marginBottom: verticalScale(3),
    marginLeft: scale(5)
  },
  icon: {
    bottom: verticalScale(12),
    left: scale(8),
    position: ABSOLUTE,
    top: verticalScale(8)
  },
  inputContainer: {
    alignItems: CENTER,
    borderColor: primary.default,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: ROW,
    width: FULL_SIZE
  },
  label: {
    ...SMALL,
    ...fonts.baseFont
  },
  textInput: {
    color: COLORS.black,
    flex: 1,
    height: verticalScale(48),
    paddingLeft: scale(40),
    paddingRight: scale(8)
  }
});
