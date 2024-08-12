import { Modal, View } from 'react-native';

import { Image, ImageStyle } from 'expo-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { globeImage } from '#/assets';
import { BUTTON_INTENTS } from '#/common/constants/button';
import { TxOrString } from '#/common/types/i18n';

import { Button } from '../Button';
import { Text } from '../Text';
import { styles } from './styles';

export type SuccessModalProps = {
  isOpen: boolean;
  title?: TxOrString;
  subtitle?: TxOrString;
  primaryButtonTitle?: TxOrString;
  onPrimaryButtonPress?: () => void;
  secondaryButtonTitle?: TxOrString;
  onSecondaryButtonPress?: () => void;
};

export function SuccessModal({
  isOpen,
  title,
  subtitle,
  primaryButtonTitle,
  onPrimaryButtonPress,
  secondaryButtonTitle,
  onSecondaryButtonPress
}: SuccessModalProps) {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <Modal animationType="slide" transparent visible={isOpen}>
      <View style={styles.modalHeader(top)}>
        <View style={styles.modalContainer(bottom)}>
          <View style={styles.imageSection}>
            <Image source={globeImage} style={styles.modalImage as ImageStyle} />
            {title && (
              <Text tx={title} style={styles.modalTitle}>
                {title}
              </Text>
            )}
            {subtitle && (
              <Text tx={subtitle} style={styles.modalSubtitle}>
                {subtitle}
              </Text>
            )}
          </View>
          <View style={styles.modalButtons}>
            {(primaryButtonTitle || onPrimaryButtonPress) && (
              <Button
                style={styles.modalButton}
                title={primaryButtonTitle}
                intent={BUTTON_INTENTS.PRIMARY}
                onPress={onPrimaryButtonPress}
              />
            )}
            {(secondaryButtonTitle || onSecondaryButtonPress) && (
              <Button
                style={styles.modalButton}
                title={secondaryButtonTitle}
                intent={BUTTON_INTENTS.SECONDARY}
                onPress={onSecondaryButtonPress}
              />
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
}
