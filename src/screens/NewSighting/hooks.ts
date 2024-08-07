import { useEffect, useMemo, useState } from 'react';

import {
  ImagePickerAsset,
  MediaTypeOptions,
  UIImagePickerPreferredAssetRepresentationMode,
  launchCameraAsync,
  launchImageLibraryAsync,
  useCameraPermissions
} from 'expo-image-picker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useForm } from '@tanstack/react-form';
import { useQueryClient } from '@tanstack/react-query';
import { zodValidator } from '@tanstack/zod-form-adapter';

import { useGetTypes } from '#/common/api';
import { useCreateSighting } from '#/common/api/sighting/useCreateSighting';
import { SIGHTING } from '#/common/constants/queryKeys';
import { useModal } from '#/common/hooks/useModal';
import { useSession } from '#/common/hooks/useSession';
import { useSessionStore } from '#/common/stores/session';
import { verticalScale } from '#/common/utils/scaling';
import { showErrorToast } from '#/common/utils/toast';
import { translate } from '#/translations/utils';

import { FORM_DEFAULT_VALUES, FORM_FIELDS, MAX_IMAGES_AMOUNT } from './constants';

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

export const useSightingForm = (images: ImagePickerAsset[], openSuccessModal: () => void) => {
  const { bottom } = useSafeAreaInsets();
  const queryClient = useQueryClient();
  const { userData } = useSessionStore();
  const { logOut } = useSession();

  const { mutateAsync } = useCreateSighting({
    onError: err => {
      showErrorToast({ text2: err.result, position: 'bottom', bottomOffset: bottom + verticalScale(68) });
    },
    onSuccess: () => {
      openSuccessModal();
      queryClient.resetQueries({ queryKey: [SIGHTING], stale: true });
    }
  });

  const { data } = useGetTypes();

  const types = data?.data ?? [];
  const categories = useMemo(() => [...new Set(types.map(types => types.category))], [types]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const filteredTypes = useMemo(() => {
    return types.filter(type => type.category === selectedCategory);
  }, [[selectedCategory]]);

  const Form = useForm({
    defaultValues: FORM_DEFAULT_VALUES,
    validatorAdapter: zodValidator,
    onSubmit: async ({ value }) => {
      if (!userData?.id) {
        showErrorToast({
          text2: translate('Error.invalidatedSession'),
          position: 'bottom',
          bottomOffset: bottom
        });
        logOut();
        return;
      }
      await mutateAsync({
        files: value.files.map(file => ({
          name: file.fileName,
          mimeType: file.fileMimeType,
          uri: file.fileUri
        })),
        request: { ...value, latitude: 0, longitude: 0, userId: 3 }
      });
    }
  });

  useEffect(() => {
    Form.fieldInfo.files.instance?.setValue(
      images.map((image, index) => ({
        fileName: image.fileName ?? Form.getFieldValue(FORM_FIELDS.name) ?? `image ${index + 1}`,
        fileUri: image.uri,
        fileMimeType: image.mimeType ?? 'image/jpeg'
      })),
      { notify: true }
    );
  }, [images]);

  return { Form, categories, selectedCategory, setSelectedCategory, filteredTypes };
};
