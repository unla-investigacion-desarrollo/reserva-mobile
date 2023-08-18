import { StyleSheet } from 'react-native';
import { neutral, primaryDark } from '../../../../../constants/colors';

export const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
    borderWidth: 1,
    borderColor: neutral,
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  searchInput: {
    paddingLeft: 40,
  },
  settingButton: {
    width: 'auto',
  },
  slidersIcon: {
    fontSize: 24,
    color: primaryDark,
    padding: 8,
  },
  searchIcon: {
    fontSize: 24,
    color: primaryDark,
    padding: 8,
    position: 'absolute',
  },
});
