import type { TextStyle } from 'react-native';

import { FONT_FAMILIES, WEIGHTS, WEIGHT_NAMES } from '../constants/fonts';
import { ValueOf } from './utilities';

export type FontWeight = NonNullable<TextStyle['fontWeight']>;
export type FontStyle = NonNullable<TextStyle['fontStyle']>;
export type FontFamily = ValueOf<typeof FONT_FAMILIES>;

type WeightName = ValueOf<typeof WEIGHT_NAMES>;
type WeightValue = ValueOf<typeof WEIGHTS>;

export interface FontConfig {
  weights: Partial<Record<WeightName, WeightValue>>;
  styles: Partial<Record<'Normal' | 'Italic', FontStyle>>;
}

export interface FontMakerOptions {
  size?: number;
  color?: string;
  weight?: TextStyle['fontWeight'];
  style?: TextStyle['fontStyle'];
  family?: FontFamily;
}
