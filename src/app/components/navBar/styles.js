import { StyleSheet } from 'react-native';
import { neutralDarker, neutralLighter, primary } from '../../../constants/colors';

export const styles = StyleSheet.create({
  navBar: {
    height: 58,
    backgroundColor: neutralLighter,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 12,
  },
  icon: {
    fontSize: 24,
    color: neutralDarker,
  },
  selectedIcon: {
    fontSize: 24,
    color: primary,
  },
  label: {
    marginHorizontal: 8,
    marginBottom: 4,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    color: primary,
  },
});
