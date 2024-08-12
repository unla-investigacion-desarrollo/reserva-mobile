import { StyleSheet } from 'react-native';

import { primary } from '#/common/constants/colors';
import { scale } from '#/common/utils/scaling';
import { ABSOLUTE, ROW } from '#/styles/positions';

export const styles = StyleSheet.create({
  searchBar: {
    borderColor: primary.default,
    borderRadius: scale(16),
    borderWidth: scale(1),
    flexDirection: ROW
  },
  searchIcon: {
    position: ABSOLUTE
  }
});
