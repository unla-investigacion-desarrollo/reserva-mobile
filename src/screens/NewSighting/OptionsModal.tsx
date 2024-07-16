import { Modal, Pressable, TouchableWithoutFeedback, View } from 'react-native';

import { Image, ImageStyle } from 'expo-image';

import { CameraIcon, ImageIcon, globeImage } from '#/assets';
import { BUTTON_INTENTS } from '#/common/constants/button';
import { primary, transparent, white } from '#/common/constants/colors';
import { Button, Text } from '#/components';

import { MODAL_ICON_SIZE, styles } from './styles';

export type ImageOptionsModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  onPickFromGalery: () => void;
  onTakeAPhoto: () => void;
};

export function OptionsModal({ closeModal, isOpen, onPickFromGalery, onTakeAPhoto }: ImageOptionsModalProps) {
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
            <Image source={globeImage} style={styles.modalImage as ImageStyle} />
            <Text tx="NewSighting.selectAnOption" style={styles.modalLabel} />
            <View style={styles.modalButtons}>
              <Button
                Svg={ImageIcon}
                iconStroke={isPressed => (isPressed ? white : primary.default)}
                iconFill={transparent}
                iconStrokeWidth={1.5}
                iconSize={MODAL_ICON_SIZE}
                style={styles.modalButton}
                title="NewSighting.pickFromGalery"
                intent={BUTTON_INTENTS.SECONDARY}
                onPress={onPickFromGalery}
              />
              <Button
                Svg={CameraIcon}
                iconStroke={isPressed => (isPressed ? white : primary.default)}
                iconFill={transparent}
                iconStrokeWidth={1.5}
                iconSize={MODAL_ICON_SIZE}
                style={styles.modalButton}
                title="NewSighting.takeAPhoto"
                intent={BUTTON_INTENTS.SECONDARY}
                onPress={onTakeAPhoto}
              />
            </View>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
