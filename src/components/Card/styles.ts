import { StyleSheet } from 'react-native';

import { white } from '#/common/constants/colors';
import { scale } from '#/common/utils/scaling';

export default StyleSheet.create({
  container: {
    backgroundColor: white,
    borderRadius: scale(10),
    padding: scale(16)
  }
});
