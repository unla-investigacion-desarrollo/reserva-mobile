import { Image as ExpoImage, ImageProps } from 'expo-image';

import { buildImageUrl } from '#/common/models/images';

export function Image({ source, ...props }: ImageProps) {
  return <ExpoImage source={typeof source === 'string' ? buildImageUrl(source) : source} {...props} />;
}
