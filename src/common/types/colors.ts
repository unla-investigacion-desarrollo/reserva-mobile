import { COLORS } from '../constants/colors';

type ColorValues<T> = T extends { [key: string]: infer U } ? (U extends string ? U : ColorValues<U>) : never;

export type Color = ColorValues<typeof COLORS>;
