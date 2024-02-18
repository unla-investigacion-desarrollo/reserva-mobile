export const BUTTON_INTENTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TEXT: 'text'
} as const;

export const { PRIMARY, SECONDARY, TEXT } = BUTTON_INTENTS;

export enum BUTTON_STATES {
  ENABLED = 'ENABLED',
  DISABLED = 'DISABLED',
  PRESSED = 'PRESSED'
}

export const ICON_POSITIONS = {
  LEFT: 'left',
  RIGHT: 'right'
};
