import { StyleSheet } from 'react-native';

import { background, black, error, primary } from '#/common/constants/colors';
import { BOLD_WEIGHT, LIGHT_WEIGHT, MEDIUM_WEIGHT, SEMIBOLD_WEIGHT, SIZES } from '#/common/constants/fonts';
import { WINDOW_WIDTH } from '#/common/constants/platform';
import { colorWithOpacity } from '#/common/utils/color';
import { fontMaker } from '#/common/utils/fonts';
import { scale, verticalScale } from '#/common/utils/scaling';
import { ABSOLUTE, CENTER } from '#/styles/positions';
import { FULL_SIZE } from '#/styles/sizes';

export const IMAGE_ASPECT_RATIO = 4 / 3;
export const IMAGE_WIDTH = WINDOW_WIDTH - 2 * scale(20);
export const IMAGE_HEIGHT = IMAGE_WIDTH / IMAGE_ASPECT_RATIO;

export const IMAGE_PLUS_ICON_SIZE = scale(120);
export const IMAGE_PLUS_ICON_STROKE_WIDTH = scale(2);
export const REMOVE_ICON_SIZE = scale(25);
export const MODAL_ICON_SIZE = scale(25);

export const styles = StyleSheet.create({
  addFieldButton: {
    alignSelf: CENTER,
    borderWidth: scale(1),
    paddingVertical: verticalScale(12)
  },
  body: {
    gap: scale(24),
    paddingBottom: verticalScale(10),
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(24)
  },
  descriptionField: {
    height: verticalScale(90)
  },
  fieldContainer: {
    backgroundColor: background,
    borderColor: primary.default,
    borderRadius: scale(15),
    borderWidth: scale(1),
    gap: verticalScale(18),
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(18)
  },
  fieldLabel: {
    paddingLeft: scale(4),
    ...fontMaker({ weight: SEMIBOLD_WEIGHT })
  },
  fieldsArray: {
    gap: scale(12)
  },
  fieldsArrayLabelSubtite: {
    paddingBottom: verticalScale(4),
    paddingLeft: scale(4),
    ...fontMaker({ weight: LIGHT_WEIGHT, size: SIZES.XSMALL })
  },
  imageBox: {
    alignItems: CENTER,
    borderColor: primary.default,
    borderRadius: scale(15),
    borderStyle: 'dashed',
    borderWidth: scale(1),
    height: FULL_SIZE,
    justifyContent: CENTER,
    width: FULL_SIZE
  },
  imageCarousel: {
    borderRadius: scale(15),
    overflow: 'hidden'
  },
  imageContainer: {
    alignItems: CENTER,
    aspectRatio: 4 / 3,
    justifyContent: CENTER,
    width: FULL_SIZE
  },
  imageSection: {
    alignItems: CENTER,
    aspectRatio: 4 / 3,
    justifyContent: CENTER,
    width: FULL_SIZE
  },
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
    aspectRatio: 3 / 2,
    width: FULL_SIZE
  },
  modalLabel: {
    paddingLeft: scale(4),
    ...fontMaker({ weight: BOLD_WEIGHT, size: SIZES.MEDIUM_BIG })
  },
  newSighting: (bottom = 0) => ({
    backgroundColor: background,
    flex: 1,
    paddingBottom: bottom
  }),
  removeFieldButtonText: {
    textDecorationLine: 'underline',
    ...fontMaker({ color: error.default })
  },
  removeImageButton: {
    backgroundColor: colorWithOpacity(black, 75),
    borderRadius: scale(15),
    padding: scale(8),
    position: ABSOLUTE,
    right: scale(4),
    top: scale(4)
  },
  selectedImage: {
    borderRadius: scale(15),
    height: FULL_SIZE,
    width: FULL_SIZE
  },
  sightingImage: {
    borderRadius: scale(15),
    height: FULL_SIZE,
    width: FULL_SIZE
  },
  title: {
    ...fontMaker({ weight: MEDIUM_WEIGHT, size: SIZES.XBIG })
  },
  typeField: {
    gap: scale(8)
  },
  typesSection: {
    paddingLeft: scale(12),
    paddingTop: verticalScale(4)
  }
});
