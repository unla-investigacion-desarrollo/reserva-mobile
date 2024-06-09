import { StyleSheet } from 'react-native';

import { scale, verticalScale } from '#/common/utils/scaling';

export const styles = StyleSheet.create({
  typesSeparator: (gap = 0) => ({
    width: scale(gap),
    height: verticalScale(gap)
  })
});
