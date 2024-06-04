import { StyleSheet } from 'react-native';

import { background } from '#/common/constants/colors';
import { STATUS_BAR_HEIGHT } from '#/common/constants/platform';
import { verticalScale } from '#/common/utils/scaling';

export const styles = StyleSheet.create({
  login: (top = STATUS_BAR_HEIGHT, bottom = 0) => ({
    flex: 1,
    backgroundColor: background,
    paddingTop: verticalScale(top),
    paddingBottom: verticalScale(bottom)
  })
});
