import { Linking, Modal, Pressable, TouchableWithoutFeedback, View } from 'react-native';

import { Image, ImageStyle } from 'expo-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import { CrossCircleIcon, SettingsIcon, cameraImage } from '#/assets';
import { BUTTON_INTENTS } from '#/common/constants/button';
import { primary, transparent, white } from '#/common/constants/colors';
import { isIos } from '#/common/constants/platform';
import { showErrorToast } from '#/common/utils/toast';
import { MODAL_ICON_SIZE } from '#/screens/NewSighting/styles';
import { translate } from '#/translations/utils';

import { Button } from '../Button';
import { Text } from '../Text';
import { styles } from './styles';

export type CameraPermissionModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

export function CameraPermissionModal({ closeModal, isOpen }: CameraPermissionModalProps) {
  const { top } = useSafeAreaInsets();
  return (
    <Modal
      animationType="fade"
      transparent
      visible={isOpen}
      onRequestClose={() => {
        closeModal();
      }}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.modalBackground}>
          <Pressable style={styles.modalContainer}>
            <Image source={cameraImage} style={styles.modalImage as ImageStyle} />
            <Text tx="Permissions.cameraPermissionRequired" style={styles.modalTitle} />
            <Text tx="Permissions.settingsForCamera" style={styles.modalSubtitle} />
            <View style={styles.modalButtons}>
              <Button
                Svg={SettingsIcon}
                iconStroke={white}
                iconFill={transparent}
                iconStrokeWidth={1.5}
                iconSize={MODAL_ICON_SIZE}
                style={styles.modalButton}
                title="Permissions.goToSettings"
                intent={BUTTON_INTENTS.PRIMARY}
                onPress={() => {
                  try {
                    Linking.openSettings();
                    closeModal();
                  } catch {
                    showErrorToast({ topOffset: top, text2: translate('Error.couldNotOpenSettings') });
                  }
                }}
              />
              <Button
                Svg={CrossCircleIcon}
                iconStroke={isPressed => (isPressed ? white : primary.default)}
                iconFill={transparent}
                iconStrokeWidth={1.5}
                iconSize={MODAL_ICON_SIZE}
                style={styles.modalButton}
                title="Core.close"
                intent={BUTTON_INTENTS.SECONDARY}
                onPress={closeModal}
              />
            </View>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
