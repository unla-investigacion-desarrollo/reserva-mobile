import { ScrollView, View } from 'react-native';

import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BUTTON_INTENTS } from '#/common/constants/button';
import { primary, white } from '#/common/constants/colors';
import { ROUTE_LINKS } from '#/common/constants/routes';
import { useModal } from '#/common/hooks/useModal';
import { BackButtonHeader, Button, CameraPermissionModal, FormInput, SuccessModal, Text } from '#/components';

import FieldsArray from './FieldsArray';
import ImageCarousel from './ImageCarousel';
import OptionsModal from './OptionsModal';
import TypePicker from './TypePicker';
import { FORM_FIELDS_PROPS, FORM_TEXT_FIELDS, FORM_TEXT_FIELDS_LABELS, FORM_VALIDATIONS } from './constants';
import { usePhotos, useSightingForm } from './hooks';
import { styles } from './styles';

export function NewSighting() {
  const { bottom } = useSafeAreaInsets();

  const {
    isOpen: isOpenOptionsModal,
    openModal: openOptionsModal,
    closeModal: closeOptionsModal
  } = useModal();

  const { isOpen: isOpenSuccessModal, openModal: openSuccessModal } = useModal();

  const {
    images,
    imagesLeft,
    pickFromGalery,
    takePhoto,
    removeImage,
    isOpenPermissionModal,
    closePermissionModal
  } = usePhotos();

  const { Form, categories, selectedCategory, setSelectedCategory, filteredTypes } = useSightingForm(
    images,
    openSuccessModal
  );

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
            validations={FORM_VALIDATIONS[field]}
            {...FORM_FIELDS_PROPS[field]}
          />
        ))}
        <ImageCarousel
          Form={Form}
          images={images}
          imagesLeft={imagesLeft}
          removeImage={removeImage}
          openOptionsModal={openOptionsModal}
        />
        <TypePicker
          Form={Form}
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          types={filteredTypes}
        />
        <FieldsArray Form={Form} />
        <Form.Subscribe selector={state => state}>
          {({ canSubmit, isSubmitting }) => {
            return (
              <Button
                title="NewSighting.submitSighting"
                intent={BUTTON_INTENTS.PRIMARY}
                loading={isSubmitting}
                disabled={!canSubmit}
                onPress={Form.handleSubmit}
              />
            );
          }}
        </Form.Subscribe>
      </ScrollView>
      <OptionsModal
        closeModal={closeOptionsModal}
        isOpen={isOpenOptionsModal}
        onPickFromGalery={() => {
          closeOptionsModal();
          pickFromGalery();
        }}
        onTakeAPhoto={() => {
          closeOptionsModal();
          takePhoto();
        }}
      />
      <CameraPermissionModal isOpen={isOpenPermissionModal} closeModal={closePermissionModal} />
      <SuccessModal
        title="NewSighting.successTitle"
        subtitle="NewSighting.successSubtitle"
        isOpen={isOpenSuccessModal}
        onPrimaryButtonPress={() => router.navigate({ pathname: ROUTE_LINKS.Home })}
        primaryButtonTitle="NewSighting.goToHome"
      />
    </View>
  );
}
