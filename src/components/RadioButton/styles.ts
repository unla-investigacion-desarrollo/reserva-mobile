import { StyleSheet } from 'react-native';

import { BUTTON_STATES, RADIO_BUTTON_STATES } from '#/common/constants/button';
import { neutral, primary, transparent, white } from '#/common/constants/colors';
import { REGULAR_WEIGHT, SIZES } from '#/common/constants/fonts';
import { RadioButtonStyles } from '#/common/types/buttons';
import { Color } from '#/common/types/colors';
import { fontMaker } from '#/common/utils/fonts';
import { scale } from '#/common/utils/scaling';
import { CENTER, FLEX_START, ROW } from '#/styles/positions';

export const styles = StyleSheet.create({
  innerCirle: (selected: boolean) => ({
    backgroundColor: selected ? white : transparent,
    borderRadius: scale(30),
    height: scale(12),
    width: scale(12)
  }),
  outerCircle: (selected: boolean, color: Color) => ({
    alignItems: CENTER,
    borderRadius: scale(30),
    borderWidth: scale(2),
    borderColor: color,
    backgroundColor: selected ? color : transparent,
    height: scale(24),
    justifyContent: CENTER,
    width: scale(24)
  }),
  radioButton: {
    alignSelf: FLEX_START,
    flexDirection: ROW
  },
  text: {
    ...fontMaker({ weight: REGULAR_WEIGHT, size: SIZES.SMALL }),
    alignSelf: CENTER,
    paddingLeft: scale(10)
  }
});

export const RADIO_BUTTON_COLORS: RadioButtonStyles = {
  [RADIO_BUTTON_STATES.SELECTED]: {
    [BUTTON_STATES.ENABLED]: primary.default,
    [BUTTON_STATES.DISABLED]: neutral.light,
    [BUTTON_STATES.PRESSED]: primary.dark
  },
  [RADIO_BUTTON_STATES.UNSELECTED]: {
    [BUTTON_STATES.ENABLED]: neutral.default,
    [BUTTON_STATES.DISABLED]: neutral.light,
    [BUTTON_STATES.PRESSED]: neutral.dark
  }
} as const;
