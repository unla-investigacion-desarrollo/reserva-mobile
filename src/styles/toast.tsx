import { StyleSheet, ViewStyle } from 'react-native';

import { BaseToastProps, ErrorToast, InfoToast, SuccessToast } from 'react-native-toast-message';

import { CheckCircleIcon, CrossCircleIcon, InfoCircleIcon } from '#/assets';
import { accent, error, primary } from '#/common/constants/colors';
import { REGULAR_WEIGHT, SEMIBOLD_WEIGHT, SIZES } from '#/common/constants/fonts';
import { ColorGroup } from '#/common/types/colors';
import { fontMaker } from '#/common/utils/fonts';
import { scale, verticalScale } from '#/common/utils/scaling';

import { FLEX_START } from './positions';

export const toastConfig = {
  success: (props: BaseToastProps) => (
    <SuccessToast
      {...props}
      style={styles.toast(primary) as ViewStyle}
      contentContainerStyle={styles.container}
      renderLeadingIcon={() => <CheckCircleIcon style={styles.icon} stroke={primary.default} />}
      text2Style={styles.subtitle(primary)}
      text1Style={styles.title(primary)}
      text2NumberOfLines={3}
    />
  ),
  error: (props: BaseToastProps) => (
    <ErrorToast
      {...props}
      style={styles.toast(error) as ViewStyle}
      contentContainerStyle={styles.container}
      renderLeadingIcon={() => <CrossCircleIcon style={styles.icon} stroke={error.default} strokeWidth={2} />}
      text2Style={styles.subtitle(error)}
      text1Style={styles.title(error)}
      text2NumberOfLines={3}
    />
  ),
  info: (props: BaseToastProps) => (
    <InfoToast
      {...props}
      style={styles.toast(accent) as ViewStyle}
      contentContainerStyle={styles.container}
      renderLeadingIcon={() => <InfoCircleIcon style={styles.icon} stroke={accent.default} />}
      text2Style={styles.subtitle(accent)}
      text1Style={styles.title(accent)}
      text2NumberOfLines={3}
    />
  )
};

export const styles = StyleSheet.create({
  container: {
    alignItems: FLEX_START,
    flex: 1,
    paddingBottom: verticalScale(16),
    paddingLeft: 0,
    paddingRight: scale(12),
    paddingTop: verticalScale(21)
  },
  icon: {
    marginLeft: scale(12),
    marginTop: verticalScale(17)
  },
  subtitle: (colorGroup: ColorGroup) => ({
    ...fontMaker({ color: colorGroup.darker, size: SIZES.SMALL, weight: REGULAR_WEIGHT }),
    lineHeight: verticalScale(20)
  }),
  title: (colorGroup: ColorGroup) => ({
    ...fontMaker({ color: colorGroup.darker, size: SIZES.SMALL, weight: SEMIBOLD_WEIGHT })
  }),
  toast: (colorGroup: ColorGroup) => ({
    backgroundColor: colorGroup.lighter,
    borderColor: colorGroup.light,
    borderLeftColor: colorGroup.light,
    borderLeftWidth: 1,
    borderRadius: scale(15),
    borderWidth: 1,
    gap: scale(8),
    height: 'auto',
    width: '80%'
  })
});
