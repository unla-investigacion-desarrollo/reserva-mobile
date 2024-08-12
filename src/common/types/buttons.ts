import { TextStyle, ViewStyle } from 'react-native';

import { BUTTON_INTENTS, BUTTON_STATES, RADIO_BUTTON_STATES } from '../constants/button';
import { Color } from './colors';
import { ValueOf } from './utilities';

export type ButtonIntents = ValueOf<typeof BUTTON_INTENTS>;

export type ButtonStyles = Record<
  BUTTON_STATES,
  {
    CONTAINER?: ViewStyle;
    TEXT?: TextStyle;
  }
> & { ACTIVITY_INDICATOR: TextStyle };

export type ButtonIntentStyles = Record<ButtonIntents, ButtonStyles>;

export type RadioButtonStyles = Record<RADIO_BUTTON_STATES, Record<BUTTON_STATES, Color>>;
