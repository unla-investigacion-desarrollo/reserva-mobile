import { StyleSheet } from 'react-native';

import { background } from '#/common/constants/colors';
import { FULL_SIZE } from '#/styles/sizes';

export const styles = StyleSheet.create({
  image: {
    height: 500,
    width: FULL_SIZE
  },
  newSighting: {
    backgroundColor: background,
    flex: 1
  },
  pad: {
    marginTop: 10
  }
});
