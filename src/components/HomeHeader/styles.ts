import { StyleSheet } from 'react-native';

import { background, neutral, primary } from '#/common/constants/colors';
import { REGULAR_WEIGHT, SIZES } from '#/common/constants/fonts';
import { STATUS_BAR_HEIGHT } from '#/common/constants/platform';
import { fontMaker } from '#/common/utils/fonts';
import { scale, verticalScale } from '#/common/utils/scaling';
import { CENTER, ROW, SPACE_BETWEEN } from '#/styles/positions';

export const styles = StyleSheet.create({
  background: {
    backgroundColor: background
  },
  container: (top = STATUS_BAR_HEIGHT) => ({
    backgroundColor: primary.default,
    paddingTop: verticalScale(top)
  }),
  header: {
    backgroundColor: primary.default,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    flexDirection: ROW,
    height: verticalScale(60),
    justifyContent: SPACE_BETWEEN,
    paddingBottom: verticalScale(12)
  },
  icon: {
    marginHorizontal: scale(10)
  },
  iconSection: {
    alignItems: CENTER,
    flexDirection: ROW
  },
  text: {
    alignSelf: CENTER,
    paddingLeft: scale(16),
    ...fontMaker({ color: neutral.lighter, size: SIZES.BIG, weight: REGULAR_WEIGHT })
  }
});
