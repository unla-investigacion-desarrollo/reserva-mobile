import { StyleSheet } from 'react-native';
import { background, primary, primaryLighter } from '../../../constants/colors';

export const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: background
  },
  body: {
    marginHorizontal: 20
  },
  topLine: {
    flex: 1,
    width: '100%',
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 4
  },
  addSightingButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primary
  },
  addSightingIcon: {
    fontSize: 24,
    color: primaryLighter
  }
});
