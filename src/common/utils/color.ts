import { Color } from '../types/colors';

export const colorWithOpacity = (color: Color, opacity = 100) => {
  const restrictedOpacity = opacity < 0 ? 0 : opacity > 100 ? 100 : opacity;
  const opacityByteValue = Math.round((restrictedOpacity * 255) / 100);
  return `${color}${opacityByteValue.toString(16)}`;
};
