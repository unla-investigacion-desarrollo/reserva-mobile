import { BUTTON_INTENTS, BUTTON_STATES } from '#/common/constants/button';
import { neutral, primary, transparent, white } from '#/common/constants/colors';
import { MEDIUM_WEIGHT, REGULAR_WEIGHT, SIZES } from '#/common/constants/fonts';
import { ButtonIntentStyles } from '#/common/types/buttons';
import { fontMaker } from '#/common/utils/fonts';
import { scale, verticalScale } from '#/common/utils/scaling';

export const BUTTON_INTENT_STYLES: ButtonIntentStyles = {
  [BUTTON_INTENTS.PRIMARY]: {
    [BUTTON_STATES.ENABLED]: {
      CONTAINER: {
        backgroundColor: primary.default,
        paddingHorizontal: scale(24),
        paddingVertical: verticalScale(16),
        borderRadius: 8
      },
      TEXT: {
        ...fontMaker({ color: neutral.lighter, weight: REGULAR_WEIGHT, size: SIZES.SMALL }),
        lineHeight: scale(20)
      }
    },
    [BUTTON_STATES.DISABLED]: {
      CONTAINER: {
        backgroundColor: neutral.default
      }
    },
    [BUTTON_STATES.PRESSED]: {
      CONTAINER: {
        backgroundColor: primary.darker
      }
    },
    ACTIVITY_INDICATOR: {
      color: neutral.lighter
    }
  },
  [BUTTON_INTENTS.SECONDARY]: {
    [BUTTON_STATES.ENABLED]: {
      CONTAINER: {
        backgroundColor: transparent,
        borderColor: primary.default,
        borderWidth: 2,
        paddingHorizontal: scale(24),
        paddingVertical: verticalScale(16),
        borderRadius: 8
      },
      TEXT: {
        ...fontMaker({ color: primary.default, weight: REGULAR_WEIGHT, size: SIZES.SMALL }),
        lineHeight: scale(20)
      }
    },
    [BUTTON_STATES.DISABLED]: {
      CONTAINER: {
        backgroundColor: transparent,
        borderColor: neutral.default
      },
      TEXT: {
        color: neutral.default
      }
    },
    [BUTTON_STATES.PRESSED]: {
      CONTAINER: {
        backgroundColor: primary.default,
        borderColor: primary.default
      },
      TEXT: {
        color: white
      }
    },
    ACTIVITY_INDICATOR: {
      color: primary.default
    }
  },
  [BUTTON_INTENTS.TEXT]: {
    [BUTTON_STATES.ENABLED]: {
      CONTAINER: {
        backgroundColor: transparent,
        paddingHorizontal: scale(24),
        paddingVertical: verticalScale(16)
      },
      TEXT: {
        ...fontMaker({ color: primary.default, weight: REGULAR_WEIGHT, size: SIZES.SMALL }),
        lineHeight: scale(20)
      }
    },
    [BUTTON_STATES.DISABLED]: {
      CONTAINER: {},
      TEXT: {
        color: neutral.default
      }
    },
    [BUTTON_STATES.PRESSED]: {
      CONTAINER: {},
      TEXT: {
        ...fontMaker({ color: primary.darker, weight: MEDIUM_WEIGHT, size: SIZES.SMALL })
      }
    },
    ACTIVITY_INDICATOR: {
      color: primary.default
    }
  }
} as const;
