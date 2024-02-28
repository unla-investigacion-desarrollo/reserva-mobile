import { StyleSheet } from 'react-native';

import { primary } from '#/common/constants/colors';
import { ABSOLUTE, ROW } from '#/styles/positions';

export const styles = StyleSheet.create({
  searchBar: {
    borderColor: primary.default,
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: ROW
  },
  searchIcon: {
    position: ABSOLUTE
  }
});
