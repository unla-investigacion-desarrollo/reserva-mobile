import {StyleSheet} from 'react-native';
import {neutralLighter, primary} from '../../../constants/colors';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: primary,
    height: 'auto',
    width: '100%',
    paddingBottom: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    padding: 10,
    fontSize: 24,
    color: neutralLighter,
  },
  title: {
    fontSize: 22,
    color: neutralLighter,
    marginLeft: 16,
  },
});
