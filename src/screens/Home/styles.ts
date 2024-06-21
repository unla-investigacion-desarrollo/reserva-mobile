import { StyleSheet } from 'react-native';

import { background, neutral } from '#/common/constants/colors';
import { LIGHT_WEIGHT, SIZES } from '#/common/constants/fonts';
import { fontMaker } from '#/common/utils/fonts';
import { scale, verticalScale } from '#/common/utils/scaling';
import { CENTER, FLEX_END, FLEX_START, ROW } from '#/styles/positions';
import { HALF_SIZE } from '#/styles/sizes';

export const SIGHTING_CARDS_GAP = 16;
export const TYPE_FILTERS_GAP = 12;
export const TYPE_HEADER_FOOTER_GAP = 10;

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
  emptyListText: {
    alignSelf: CENTER,
    paddingTop: verticalScale(8),
    ...fontMaker({ weight: LIGHT_WEIGHT, size: SIZES.SMALL }),
    lineHeight: scale(20)
  },
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
  loadingWrapper: {
    paddingTop: verticalScale(48)
  },
  searchIcon: {
    top: verticalScale(12)
  },
  typeFilters: {
    flexDirection: ROW,
    marginHorizontal: scale(-10)
  },
  visitUsCard: {
    paddingBottom: verticalScale(16)
  },
  visitUsCardContainer: {
    paddingHorizontal: scale(4)
  }
});
