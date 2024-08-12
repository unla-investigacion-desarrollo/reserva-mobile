import { StyleSheet } from 'react-native';

import { background, black, neutral } from '#/common/constants/colors';
import { BOLD_WEIGHT, SIZES } from '#/common/constants/fonts';
import { colorWithOpacity } from '#/common/utils/color';
import { fontMaker } from '#/common/utils/fonts';
import { scale, verticalScale } from '#/common/utils/scaling';
import { CENTER } from '#/styles/positions';
import { FULL_SIZE, THREE_QUARTER_SIZE } from '#/styles/sizes';

export const styles = StyleSheet.create({
  modalBackground: {
    alignItems: CENTER,
    backgroundColor: colorWithOpacity(black, 75),
    flex: 1,
    justifyContent: CENTER,
    padding: verticalScale(20)
  },
  modalButton: {
    borderWidth: scale(1),
    paddingVertical: verticalScale(12),
    width: FULL_SIZE
  },
  modalButtons: {
    gap: verticalScale(16),
    width: FULL_SIZE
  },
  modalContainer: {
    alignItems: CENTER,
    backgroundColor: background,
    borderRadius: scale(12),
    gap: scale(8),
    paddingBottom: verticalScale(16),
    paddingHorizontal: scale(16),
    paddingTop: verticalScale(10),
    width: FULL_SIZE
  },
  modalImage: {
    aspectRatio: 1 / 1,
    width: THREE_QUARTER_SIZE
  },
  modalSubtitle: {
    paddingLeft: scale(4),
    textAlign: CENTER,
    ...fontMaker({ color: neutral.dark, size: SIZES.SMALL })
  },
  modalTitle: {
    paddingLeft: scale(4),
    textAlign: CENTER,
    ...fontMaker({ weight: BOLD_WEIGHT, size: SIZES.MEDIUM_BIG })
  }
});
