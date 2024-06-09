import { StyleSheet } from 'react-native';

import { background, neutral } from '#/common/constants/colors';
import { scale, verticalScale } from '#/common/utils/scaling';
import { FLEX_END, FLEX_START, ROW } from '#/styles/positions';
import { HALF_SIZE } from '#/styles/sizes';

export const SIGHTING_CARDS_GAP = 16;
export const TYPE_FILTERS_GAP = 12;

export const styles = StyleSheet.create({
  activityIndicator: {
    margin: scale(15)
  },
  button: {
    borderRadius: 24,
    borderWidth: 1,
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(8)
  },
  cardContainer: (isEven: boolean) => ({
    flexDirection: ROW,
    justifyContent: isEven ? FLEX_START : FLEX_END,
    ...(isEven ? { paddingLeft: 4 } : { paddingRight: 4 }),
    width: HALF_SIZE
  }),
  flatList: {
    paddingBottom: verticalScale(16)
  },
  flatListContainer: {
    flex: 1,
    marginHorizontal: scale(-4)
  },
  home: {
    backgroundColor: background,
    flex: 1,
    gap: verticalScale(8),
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(18)
  },
  listSeparator: {
    borderBottomWidth: 1,
    borderColor: neutral.default
  },
  searchIcon: {
    top: verticalScale(12)
  },
  typeFilters: {
    flexDirection: ROW
  },
  visitUsCard: {
    paddingBottom: verticalScale(16)
  },
  visitUsCardContainer: {
    paddingHorizontal: scale(4)
  }
});
