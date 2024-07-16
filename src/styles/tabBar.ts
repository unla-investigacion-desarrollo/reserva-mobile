import { StyleSheet } from 'react-native';

import { background, neutral } from '#/common/constants/colors';
import { scale, verticalScale } from '#/common/utils/scaling';

export const tabBarStyles = StyleSheet.create({
  navigator: {
    backgroundColor: background,
    flex: 1
  },
  tabBar: {
    borderColor: neutral.light,
    borderTopLeftRadius: verticalScale(16),
    borderTopRightRadius: verticalScale(16),
    borderWidth: scale(1)
  }
});
