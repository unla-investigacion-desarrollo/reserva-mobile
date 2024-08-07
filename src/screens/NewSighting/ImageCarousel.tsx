import { useRef, useState } from 'react';

import { TouchableOpacity, View } from 'react-native';

import { Image, ImageStyle } from 'expo-image';
import { ImagePickerAsset } from 'expo-image-picker';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';

import { FormApi } from '@tanstack/react-form';

import { CrossIcon, ImagePlusIcon } from '#/assets';
import { primary, white } from '#/common/constants/colors';
import { pushAddImageItem } from '#/common/models/carousel';
import { isEmpty } from '#/common/utils/array';
import { CarouselDots, ErrorText, Text } from '#/components';

import { FORM_DEFAULT_VALUES, FORM_FIELDS, FORM_VALIDATIONS } from './constants';
import {
  IMAGE_HEIGHT,
  IMAGE_PLUS_ICON_SIZE,
  IMAGE_PLUS_ICON_STROKE_WIDTH,
  IMAGE_WIDTH,
  REMOVE_ICON_SIZE,
  styles
} from './styles';

export type ImageCarouselProps = {
  Form: FormApi<typeof FORM_DEFAULT_VALUES, any>;
  images: ImagePickerAsset[];
  imagesLeft: number;
  removeImage: (index: number) => void;
  openOptionsModal: () => void;
};

export default function ImageCarousel({
  Form,
  images,
  imagesLeft,
  removeImage,
  openOptionsModal
}: ImageCarouselProps) {
  const carouselRef = useRef<ICarouselInstance>(null);
  const carouselItems = imagesLeft > 0 ? pushAddImageItem(images) : images;
  const hasImages = images && !isEmpty(images);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleRemoveImage = () => {
    removeImage(currentImageIndex);
    carouselRef.current?.prev();
  };

  return (
    <Form.Field name={FORM_FIELDS.files} validators={FORM_VALIDATIONS.files}>
      {field => {
        const errors = field.state.meta.errors;
        return (
          <View>
            <Text style={styles.fieldLabel} tx="NewSighting.addImages" />
            <Text style={styles.fieldsArrayLabelSubtite} tx="NewSighting.imagesMax" />
            <View style={styles.imageSection}>
              <Carousel
                onProgressChange={(_, absProg) => {
                  setCurrentImageIndex(Math.round(absProg));
                }}
                ref={carouselRef}
                style={styles.imageCarousel}
                data={carouselItems}
                width={IMAGE_WIDTH}
                enabled={!!hasImages}
                height={IMAGE_HEIGHT}
                loop={false}
                overscrollEnabled={false}
                renderItem={({ item }) => {
                  const isImage = 'uri' in item;
                  return (
                    <View style={!isImage && styles.imageBox}>
                      {isImage ? (
                        <>
                          <Image source={item.uri} style={styles.sightingImage as ImageStyle} />
                          <TouchableOpacity onPress={handleRemoveImage} style={styles.removeImageButton}>
                            <CrossIcon
                              width={REMOVE_ICON_SIZE}
                              height={REMOVE_ICON_SIZE}
                              stroke={white}
                              strokeWidth={2}
                            />
                          </TouchableOpacity>
                        </>
                      ) : (
                        <TouchableOpacity onPress={openOptionsModal} style={styles.imageContainer}>
                          <>
                            <ImagePlusIcon
                              stroke={primary.default}
                              strokeWidth={IMAGE_PLUS_ICON_STROKE_WIDTH}
                              width={IMAGE_PLUS_ICON_SIZE}
                              height={IMAGE_PLUS_ICON_SIZE}
                            />
                            <Text style={styles.fieldLabel} tx="NewSighting.pressToAddImage" />
                          </>
                        </TouchableOpacity>
                      )}
                    </View>
                  );
                }}
              />
              {hasImages && <CarouselDots data={carouselItems} currentItemIndex={currentImageIndex} />}
            </View>
            {!isEmpty(errors) && (
              <View>
                {errors.map((error, index) =>
                  error ? (
                    <ErrorText
                      containerStyle={styles.errorLabel}
                      key={`${field.name}-${index}-${error}`}
                      errorMessage={error}
                    />
                  ) : null
                )}
              </View>
            )}
          </View>
        );
      }}
    </Form.Field>
  );
}
