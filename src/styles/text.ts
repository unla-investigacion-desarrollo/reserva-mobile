import { SIZES } from '#/common/constants/fonts';
import { moderateScale } from '#/common/utils/scaling';

type ModerateSize = Record<string, number>;

const getModerateSize = (size: number): ModerateSize => ({ fontSize: moderateScale(size) });

export const TEXT_SIZE = Object.keys(SIZES).reduce((acc: Record<string, ModerateSize>, key: string) => {
  acc[key] = getModerateSize(SIZES[key as keyof typeof SIZES]);
  return acc;
}, {});

const TEXT_STYLE = {
  ALIGN: {
    CENTER: {
      textAlign: 'center'
    },
    JUSTIFY: {
      textAlign: 'justify'
    },
    RIGHT: {
      textAlign: 'right'
    }
  },
  UPPERCASE: { textTransfrom: 'uppercase' }
};

export const { ALIGN: textAlign, UPPERCASE: uppercase } = TEXT_STYLE;
