import { PixelRatio } from 'react-native';

import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../constants/platform';

const [shortDimension, longDimension] =
  WINDOW_WIDTH < WINDOW_HEIGHT ? [WINDOW_WIDTH, WINDOW_HEIGHT] : [WINDOW_HEIGHT, WINDOW_WIDTH];

// Guideline sizes are based on standard iPhone X's dimensions
const guidelineBaseWidth = 414;
const guidelineBaseHeight = 896;

const DEFAULT_MODERATE_SCALE_FACTOR = 0.5;

const roundScaling = (size: number) => Math.round(PixelRatio.roundToNearestPixel(size));
const scale = (size: number) => roundScaling((shortDimension / guidelineBaseWidth) * size);
const verticalScale = (size: number) => roundScaling((longDimension / guidelineBaseHeight) * size);
const moderateScale = (size: number, factor = DEFAULT_MODERATE_SCALE_FACTOR) =>
  size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale };
