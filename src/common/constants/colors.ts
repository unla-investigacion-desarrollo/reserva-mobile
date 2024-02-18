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
    default: '#FD9C0B',
    darker: '#F2A917'
  },
  succes: {
    lighter: '#59BF74',
    default: '#188945',
    darker: '#005225'
  },
  error: {
    lighter: '#FF897D',
    default: '#DE3730',
    darker: '#93000A'
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
