export const isLastItem = <T>(array: T[], item: T) => array.indexOf(item) === array.length - 1;
export const isSecondToLastItem = <T>(array: T[], item: T) => array.indexOf(item) === array.length - 2;
export const isFirstItem = <T>(array: T[], item: T) => array.indexOf(item) === 0;

export const isEmpty = (array: any[]) => array?.length === 0;
export const isInLastX = <T>(array: T[], index: number, x: number) => index >= array.length - x;

export const hasOneItem = <T>(array: T[]) => array.length === 1;
export const hasMoreThanOneItem = <T>(array: T[]) => array.length > 1;

export const hasMoreThanXItems = <T>(array: T[], x: number) => array.length > x;

export const lastItem = <T>(array: T[]) => array[array.length - 1];
