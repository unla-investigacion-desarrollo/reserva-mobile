import type { TextStyle } from 'react-native';

import capitalize from 'capitalize';

import { WEIGHTS } from '../constants/fonts';
import { isAndroid } from '../constants/platform';
import { FontConfig, FontFamily, FontMakerOptions, FontStyle, FontWeight } from '../types/fonts';
import { splitIfIncludes } from './string';

type CustomFont = Pick<TextStyle, 'fontFamily' | 'fontSize' | 'fontStyle' | 'fontWeight' | 'color'>;

const fonts: Record<FontFamily, FontConfig> = {
  Roboto: {
    weights: {
      Thin: '100',
      Light: '300',
      Regular: '400',
      Medium: '500',
      Bold: '700',
      Black: '900'
    },
    styles: {
      Normal: 'normal'
    }
  }
};

export function fontMaker({
  size = 16,
  color,
  weight = '400',
  style = 'normal',
  family = 'Roboto'
}: FontMakerOptions) {
  const font: CustomFont = {};

  const normalizeFontOption = <T>(key: keyof FontConfig, defaultValue: T, option: T): T =>
    fonts[family][key] ? option : defaultValue;

  if (family) {
    const normalizedWeight = normalizeFontOption<FontWeight>('weights', '400', weight);
    const normalizedStyle = normalizeFontOption<FontStyle>('styles', 'normal', style);
    if (isAndroid) {
      font.fontFamily = buildAndroidFontFamily(family, normalizedWeight, normalizedStyle);
    } else {
      font.fontFamily = family;
      font.fontWeight = normalizedWeight;
      font.fontStyle = normalizedStyle;
    }
  }

  if (size) {
    font.fontSize = size;
  }

  if (color) {
    font.color = color;
  }

  return font;
}

function buildAndroidFontFamily(family: keyof typeof fonts, _weight: FontWeight, style: FontStyle) {
  const weight = mapWeightNameToValue(_weight);
  const androidWeight = weight === '400' && style === 'italic' ? '' : findWeightNameByValue(weight);
  const androidStyle = style === 'normal' ? '' : capitalize(style);
  const suffix = `${androidWeight}${androidStyle}`;
  const fontFamilyParts = splitIfIncludes(family, '-');
  return fontFamilyParts[0] + (suffix ? `-${suffix}` : '');
}

const weightMap = {
  bold: '700',
  normal: '400'
} as const;

function mapWeightNameToValue(weight: FontWeight) {
  return weightMap[weight as keyof typeof weightMap] || weight;
}

function findWeightNameByValue(weightValue: FontWeight) {
  const weightNamesKeys = Object.entries(WEIGHTS);
  return weightNamesKeys.find(([_, value]) => value === weightValue)?.[0];
}
