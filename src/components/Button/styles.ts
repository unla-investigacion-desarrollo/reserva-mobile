import { StyleSheet } from 'react-native';

import { scale } from '#/common/utils/scaling';
import { CENTER, ROW } from '#/styles/positions';

export default StyleSheet.create({
  container: {
    alignItems: CENTER,
    columnGap: scale(8),
    flexDirection: ROW,
    justifyContent: CENTER
  },
  disabledOrPressed: {
    opacity: 0.5
  }
});
