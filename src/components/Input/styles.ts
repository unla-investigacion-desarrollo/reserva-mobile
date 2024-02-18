import { StyleSheet } from 'react-native';

import fonts from '#/common/config/fonts';
import { COLORS } from '#/common/constants/colors';
import { scale, verticalScale } from '#/common/utils/scaling';
import { CENTER, FLEX_START, ROW } from '#/styles/positions';
import { FULL_SIZE } from '#/styles/sizes';
import { TEXT_SIZE } from '#/styles/text';

const { SMALL } = TEXT_SIZE;

export default StyleSheet.create({
  container: {
    paddingHorizontal: scale(16)
  },
  error: {
    color: COLORS.error.default,
    marginBottom: verticalScale(3),
    marginLeft: scale(5)
  },
  inputContainer: {
    alignItems: CENTER,
    backgroundColor: COLORS.white,
    borderRadius: scale(6),
    flexDirection: ROW,
    justifyContent: FLEX_START,
    marginTop: verticalScale(4),
    width: FULL_SIZE
  },
  label: {
    ...SMALL,
    ...fonts.baseFont
  },
  textInput: {
    color: COLORS.black,
    flex: 1,
    height: FULL_SIZE,
    padding: scale(8)
  }
});
