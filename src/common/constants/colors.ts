export const COLORS = {
  translucent: 'rgba(0,0,0,0)',
  transparent: 'transparent',
  white: '#FFFFFF',
  black: '#151515',
  background: '#FAFAFA',
  primary: {
    lighter: '#E9EFBF',
    light: '#A2B26A',
    default: '#6B7F1B',
    dark: '#536500',
    darker: '#3E4C00'
  },
  accent: {
    lighter: '#FFDDB3',
    light: '#FFB94F',
    default: '#FD9C0B',
    dark: '#C47907',
    darker: '#805008'
  },
  succes: {
    lighter: '#59BF74',
    default: '#188945',
    darker: '#005225'
  },
  error: {
    lighter: '#FFDAD6',
    light: '#FF897D',
    default: '#DE3730',
    dark: '#93000A',
    darker: '#690005s'
  },
  neutral: {
    lighter: '#FFFFFF',
    light: '#E8E8E8',
    default: '#ACABA4',
    dark: '#787771',
    darker: '#30312B'
  }
} as const;

export const { background, translucent, transparent, white, black, primary, accent, succes, error, neutral } =
  COLORS;
