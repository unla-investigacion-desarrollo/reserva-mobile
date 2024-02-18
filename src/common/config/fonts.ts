import { black } from '../constants/colors';
import { ROBOTO, SIZES } from '../constants/fonts';
import { fontMaker } from '../utils/fonts';

export default {
  baseFont: fontMaker({ size: SIZES.MEDIUM, color: black, family: ROBOTO })
};
