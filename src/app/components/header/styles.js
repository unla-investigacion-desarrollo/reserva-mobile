import {StyleSheet} from 'react-native';
import {neutralLighter, primary} from '../../../constants/colors';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default StyleSheet.create({
  header: {
    backgroundColor: primary,
    height: 'auto',
    width: '100%',
    paddingBottom: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: getStatusBarHeight(),
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
