export const splitSlash = (string: string) => string.split('/');
export const splitIfIncludes = (string: string, char: string) =>
  string.includes(char) ? string.split(char) : [string];
