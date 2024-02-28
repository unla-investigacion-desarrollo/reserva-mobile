export const splitSlash = (string: string) => string.split('/');
export const splitIfIncludes = (string: string, char: string) =>
  string.includes(char) ? string.split(char) : [string];

export const hasLength = (string?: string) => string && string.length > 0;

export const normalize = (string: string) =>
  string
    .normalize('NFD')
    .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi, '$1$2')
    .normalize()
    .toLowerCase();
