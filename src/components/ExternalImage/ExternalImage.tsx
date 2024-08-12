import { Image as ExpoImage, ImageProps } from 'expo-image';

import { buildImageUrl } from '#/common/models/images';
import { useSessionStore } from '#/common/stores/session';

export function ExternalImage({ source, ...props }: ImageProps) {
  const { userData } = useSessionStore();
  return (
    <ExpoImage
      source={typeof source === 'string' ? buildImageUrl(source, userData?.accessToken) : source}
      {...props}
    />
  );
}
