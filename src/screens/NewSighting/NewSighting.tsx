import { useEffect, useMemo, useRef, useState } from 'react';

import { ScrollView, TouchableOpacity, View } from 'react-native';

import { Image, ImageStyle } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useForm } from '@tanstack/react-form';
import { useQueryClient } from '@tanstack/react-query';
import { zodValidator } from '@tanstack/zod-form-adapter';

import { CrossIcon, ImagePlusIcon } from '#/assets';
import { useGetTypes } from '#/common/api';
import { useCreateSighting } from '#/common/api/sighting/useCreateSighting';
import { BUTTON_INTENTS } from '#/common/constants/button';
import { primary, white } from '#/common/constants/colors';
import { SIGHTING } from '#/common/constants/queryKeys';
import { useModal } from '#/common/hooks/useModal';
import { useSession } from '#/common/hooks/useSession';
import { pushAddImageItem } from '#/common/models/carousel';
import { useSessionStore } from '#/common/stores/session';
import { isEmpty } from '#/common/utils/array';
import { verticalScale } from '#/common/utils/scaling';
import { showErrorToast } from '#/common/utils/toast';
import {
  BackButtonHeader,
  Button,
  CameraPermissionModal,
  CarouselDots,
  FormInput,
  OptionsBar,
  RadioGroup,
  Text
} from '#/components';
import { translate } from '#/translations/utils';

import { OptionsModal } from './OptionsModal';
import {
  FIELD_DEFAULT_VALUES,
  FORM_DEFAULT_VALUES,
  FORM_FIELDS,
  FORM_FIELDS_NAMES,
  FORM_FIELDS_PROPS,
  FORM_FIELD_SUB_FIELDS,
  FORM_TEXT_FIELDS,
  FORM_TEXT_FIELDS_LABELS
} from './constants';
import { usePhotos } from './hooks';
import {
  IMAGE_HEIGHT,
  IMAGE_PLUS_ICON_SIZE,
  IMAGE_PLUS_ICON_STROKE_WIDTH,
  IMAGE_WIDTH,
  REMOVE_ICON_SIZE,
  styles
} from './styles';

export function NewSighting() {
  const { bottom } = useSafeAreaInsets();

  const queryClient = useQueryClient();
  const { userData } = useSessionStore();
  const { logOut } = useSession();

  const { isOpen, openModal, closeModal } = useModal();

  const {
    images,
    imagesLeft,
    pickFromGalery,
    takePhoto,
    removeImage,
    isOpenPermissionModal,
    closePermissionModal
  } = usePhotos();

  const carouselRef = useRef<ICarouselInstance>(null);
  const carouselItems = imagesLeft > 0 ? pushAddImageItem(images) : images;
  const hasImages = images && !isEmpty(images);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleRemoveImage = () => {
    removeImage(currentImageIndex);
    carouselRef.current?.prev();
  };

  const { mutateAsync } = useCreateSighting({
    onError: err => {
      showErrorToast({ text2: err.result, position: 'bottom', bottomOffset: bottom + verticalScale(68) });
      console.log(err);
    },
    onSuccess: res => {
      queryClient.resetQueries({ queryKey: [SIGHTING], stale: true });
      console.log('suc', res);
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
    Form.setFieldValue(
      FORM_FIELDS.files,
      images.map((image, index) => ({
        fileName: image.fileName ?? Form.getFieldValue(FORM_FIELDS.name) ?? `image ${index + 1}`,
        fileUri: image.uri,
        fileMimeType: image.mimeType ?? 'image/jpeg'
      }))
    );
  }, [images]);

  return (
    <View style={styles.newSighting(bottom)}>
      <StatusBar animated style="light" />
      <BackButtonHeader backgroundColor={primary.default} buttonColor={white} textColor={white} />
      <ScrollView bounces={false} contentContainerStyle={styles.body}>
        <Text tx="NewSighting.createNewSighting" style={styles.title} />
        {FORM_TEXT_FIELDS.map(field => (
          <FormInput
            key={field}
            Form={Form}
            name={field}
            label={FORM_TEXT_FIELDS_LABELS[field]}
            labelStyle={styles.fieldLabel}
            {...FORM_FIELDS_PROPS[field]}
          />
        ))}
        <View>
          <Text style={styles.fieldLabel} tx="NewSighting.addImages" />
          <Text style={styles.fieldsArrayLabelSubtite} tx="NewSighting.imagesMax" />
          <View style={styles.imageSection}>
            <Form.Field name={FORM_FIELDS.files}>
              {({ state }) => (
                <>
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
                            <TouchableOpacity onPress={openModal} style={styles.imageContainer}>
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
                </>
              )}
            </Form.Field>
          </View>
        </View>
        <Form.Field name={FORM_FIELDS.type}>
          {field => (
            <View style={styles.typeField}>
              <View>
                <Text tx="NewSighting.typeLabel" style={styles.fieldLabel} />
                <Text tx="NewSighting.typeLabelSubtitle" style={styles.fieldsArrayLabelSubtite} />
                <OptionsBar
                  labelStyle={styles.fieldLabel}
                  options={categories}
                  setOption={category => {
                    field.setValue('');
                    setSelectedCategory(category);
                  }}
                  selectedOption={selectedCategory}
                />
                <View style={styles.typesSection}>
                  <RadioGroup
                    options={filteredTypes.map(type => type.name)}
                    setOption={value => field.handleChange(value)}
                    selectedOption={field.state.value}
                  />
                </View>
              </View>
            </View>
          )}
        </Form.Field>
        <Form.Field name={FORM_FIELDS.fields} mode="array">
          {field => (
            <View>
              <Text tx="NewSighting.fieldsLabel" style={styles.fieldLabel} />
              <Text tx="NewSighting.fieldsLabelSubtitle" style={styles.fieldsArrayLabelSubtite} />
              <View style={styles.fieldsArray}>
                {field.state.value.map((_, index) => (
                  <View key={`fields-${index}`} style={styles.fieldContainer}>
                    {FORM_FIELD_SUB_FIELDS.map(subField => (
                      <FormInput
                        key={subField}
                        Form={Form}
                        name={`${field.name}[${index}].${subField}`}
                        label={FORM_FIELDS_NAMES[subField]}
                        labelStyle={styles.fieldLabel}
                        {...FORM_FIELDS_PROPS[subField]}
                      />
                    ))}
                    {field.state.value.length > 1 && (
                      <Button
                        title="NewSighting.removeField"
                        textStyle={styles.removeFieldButtonText}
                        onPress={() => field.removeValue(index)}
                      />
                    )}
                  </View>
                ))}
                <Button
                  title="NewSighting.addField"
                  intent={BUTTON_INTENTS.SECONDARY}
                  style={styles.addFieldButton}
                  onPress={() => {
                    field.pushValue(FIELD_DEFAULT_VALUES);
                  }}
                />
              </View>
            </View>
          )}
        </Form.Field>
        <Form.Subscribe selector={state => [state.canSubmit, state.isSubmitting]}>
          {([canSubmit, isSubmitting]) => (
            <Button
              title="NewSighting.submitSighting"
              intent={BUTTON_INTENTS.PRIMARY}
              loading={isSubmitting}
              disabled={!canSubmit}
              onPress={Form.handleSubmit}
            />
          )}
        </Form.Subscribe>
      </ScrollView>
      <OptionsModal
        closeModal={closeModal}
        isOpen={isOpen}
        onPickFromGalery={() => {
          closeModal();
          pickFromGalery();
        }}
        onTakeAPhoto={() => {
          closeModal();
          takePhoto();
        }}
      />
      <CameraPermissionModal isOpen={isOpenPermissionModal} closeModal={closePermissionModal} />
    </View>
  );
}
