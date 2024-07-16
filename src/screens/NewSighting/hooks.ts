import { useState } from 'react';

import {
  ImagePickerAsset,
  MediaTypeOptions,
  UIImagePickerPreferredAssetRepresentationMode,
  launchCameraAsync,
  launchImageLibraryAsync,
  useCameraPermissions
} from 'expo-image-picker';

import { useModal } from '#/common/hooks/useModal';

import { MAX_IMAGES_AMOUNT } from './constants';

export const usePhotos = () => {
  const [images, setImages] = useState<ImagePickerAsset[]>([]);
  const imagesLeft = MAX_IMAGES_AMOUNT - images.length;
  const [status, requestPermission] = useCameraPermissions();
  const {
    isOpen: isOpenPermissionModal,
    openModal: openPermissionModal,
    closeModal: closePermissionModal
  } = useModal();

  const pickFromGalery = async () => {
    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      quality: 1,
      selectionLimit: imagesLeft,
      allowsMultipleSelection: true,
      orderedSelection: true,
      preferredAssetRepresentationMode: UIImagePickerPreferredAssetRepresentationMode.Compatible
    });

    if (!result.canceled) {
      setImages([...images, ...result.assets]);
    }
  };

  const takePhoto = async () => {
    if (!status || !status.granted) {
      if (status && !status.granted && !status.canAskAgain) {
        openPermissionModal();
        return;
      } else {
        const permResult = await requestPermission();
        if (!permResult.granted) {
          if (permResult.canAskAgain) {
            return;
          }
        }
      }
    }
    const result = await launchCameraAsync({
      mediaTypes: MediaTypeOptions.Images,
      quality: 1,
      orderedSelection: true,
      preferredAssetRepresentationMode: UIImagePickerPreferredAssetRepresentationMode.Compatible
    });

    if (!result.canceled) {
      setImages([...images, ...result.assets]);
    }
  };

  const removeImage = (index: number) =>
    setImages(images.filter((_, currentIndex) => currentIndex !== index));

  return {
    pickFromGalery,
    takePhoto,
    removeImage,
    images,
    imagesLeft,
    isOpenPermissionModal,
    closePermissionModal
  };
};
