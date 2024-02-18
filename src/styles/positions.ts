const FLEX_DIRECTIONS = {
  COLUMN: 'column',
  COLUMN_REVERSE: 'column-reverse',
  ROW: 'row',
  ROW_REVERSE: 'row-reverse'
} as const;

export const { COLUMN, COLUMN_REVERSE, ROW, ROW_REVERSE } = FLEX_DIRECTIONS;

const FLEX_STYLES = {
  SPACE_EVENLY: 'space-evenly',
  SPACE_AROUND: 'space-around',
  SPACE_BETWEEN: 'space-between',
  FLEX_END: 'flex-end',
  FLEX_START: 'flex-start',
  CENTER: 'center'
} as const;

export const { SPACE_EVENLY, SPACE_AROUND, SPACE_BETWEEN, FLEX_END, FLEX_START, CENTER } = FLEX_STYLES;

const POSITIONS = {
  ABSOLUTE: 'absolute',
  RELATIVE: 'relative'
} as const;

export const { ABSOLUTE, RELATIVE } = POSITIONS;
