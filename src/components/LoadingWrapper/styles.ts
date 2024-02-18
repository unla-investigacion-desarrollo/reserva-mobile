import { ColorValue, StyleSheet } from 'react-native';

import { neutral } from '#/common/constants/colors';
import { CENTER } from '#/styles/positions';

export default StyleSheet.create({
  activityIndicatorContainer: (backgroundColor: ColorValue = neutral.default) => ({
    flex: 1,
    justifyContent: CENTER,
    alignItems: CENTER,
    backgroundColor
  })
});
