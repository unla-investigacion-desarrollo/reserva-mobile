import { StyleSheet } from 'react-native';

import { background } from '#/common/constants/colors';
import { verticalScale } from '#/common/utils/scaling';

export const tabBarStyles = StyleSheet.create({
  navigator: {
    backgroundColor: background,
    flex: 1
  },
  tabBar: {
    borderTopLeftRadius: verticalScale(16),
    borderTopRightRadius: verticalScale(16)
  }
});
