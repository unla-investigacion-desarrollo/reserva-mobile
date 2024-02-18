import { scale } from '../utils/scaling';

export const FONT_FAMILIES = {
  ROBOTO: 'Roboto'
} as const;

export const { ROBOTO } = FONT_FAMILIES;

export const WEIGHT_NAMES = {
  THIN: 'Thin',
  EXTRA_LIGHT: 'ExtraLight',
  LIGHT: 'Light',
  REGULAR: 'Regular',
  MEDIUM: 'Medium',
  SEMIBOLD: 'SemiBold',
  BOLD: 'Bold',
  EXTRA_BOLD: 'ExtraBold',
  BLACK: 'Black'
} as const;

export const { THIN, BLACK, BOLD, EXTRA_BOLD, EXTRA_LIGHT, LIGHT, MEDIUM, REGULAR, SEMIBOLD } = WEIGHT_NAMES;

export const WEIGHTS = {
  [THIN]: '100',
  [EXTRA_LIGHT]: '200',
  [LIGHT]: '300',
  [REGULAR]: '400',
  [MEDIUM]: '500',
  [SEMIBOLD]: '600',
  [BOLD]: '700',
  [EXTRA_BOLD]: '800',
  [BLACK]: '900'
} as const;

export const THIN_WEIGHT = '100';
export const EXTRA_LIGHT_WEIGHT = '200';
export const LIGHT_WEIGHT = '300';
export const REGULAR_WEIGHT = '400';
export const MEDIUM_WEIGHT = '500';
export const SEMIBOLD_WEIGHT = '600';
export const BOLD_WEIGHT = '700';
export const EXTRA_BOLD_WEIGHT = '800';
export const BLACK_WEIGHT = '900';

export const SIZES = {
  XXSMALL: scale(10),
  XSMALL: scale(12),
  SMALL: scale(14),
  MEDIUM: scale(16),
  BIG: scale(22),
  XBIG: scale(24),
  XXBIG: scale(28)
};
