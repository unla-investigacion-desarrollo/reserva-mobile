import { StyleSheet } from 'react-native';

import { background, neutral, primary } from '#/common/constants/colors';
import { BOLD_WEIGHT, SIZES } from '#/common/constants/fonts';
import { fontMaker } from '#/common/utils/fonts';
import { scale, verticalScale } from '#/common/utils/scaling';
import { CENTER } from '#/styles/positions';
import { FULL_SIZE } from '#/styles/sizes';

export const styles = StyleSheet.create({
  imageSection: {
    flex: 1,
    justifyContent: CENTER
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
  modalContainer: (bottom = 0) => ({
    alignItems: CENTER,
    backgroundColor: background,
    flex: 1,
    gap: scale(8),
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(20),
    paddingBottom: bottom + verticalScale(20),
    borderTopLeftRadius: scale(15),
    borderTopRightRadius: scale(15)
  }),
  modalHeader: (top = 0) => ({
    flex: 1,
    backgroundColor: primary.default,
    paddingTop: top + verticalScale(8)
  }),
  modalImage: {
    aspectRatio: 3 / 2,
    width: FULL_SIZE
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
