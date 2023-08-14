import {StyleSheet} from 'react-native';
import {
  background,
  neutral,
  primary,
  primaryLighter,
} from '../../../constants/colors';

export const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: background,
  },
  body: {
    marginHorizontal: 20,
  },
  topLine: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchBar: {
    borderWidth: 1,
    borderColor: neutral,
    borderRadius: 16,
    width: 268,
  },
  addSightingButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primary,
  },
  addSightingIcon: {
    fontSize: 24,
    color: primaryLighter,
  },
});
