import { Dimensions, Platform, StatusBar } from 'react-native';

const isStringVersion = (version: string | number): version is string => typeof version === 'string';
const PLATFORM_VERSION_NUMBER = isStringVersion(Platform.Version)
  ? parseInt(Platform.Version, 10)
  : Platform.Version;

export const ROOT = 'root';

export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';

const IOS_STATUS_BAR_HEIGHT = 20;
const NATIVE_BAR_CURRENT_HEIGHT = StatusBar.currentHeight || 0;
export const STATUS_BAR_HEIGHT = isIos ? IOS_STATUS_BAR_HEIGHT : NATIVE_BAR_CURRENT_HEIGHT;
export const STATUS_BAR_IS_FIXED = isAndroid && PLATFORM_VERSION_NUMBER < 21;
export const ACTION_BAR_HEIGHT = STATUS_BAR_IS_FIXED ? 74 : 64;
export const TAB_BAR_HEIGHT = 60;

const screenDimensions = Dimensions.get('screen');
export const SCREEN_HEIGHT = screenDimensions.height;
export const SCREEN_WIDTH = screenDimensions.width;

const windowDimensions = Dimensions.get('window');
export const WINDOW_HEIGHT = windowDimensions.height;
export const WINDOW_WIDTH = windowDimensions.width;

export const VIEWPORT_HEIGHT =
  WINDOW_HEIGHT - TAB_BAR_HEIGHT - ACTION_BAR_HEIGHT - (STATUS_BAR_IS_FIXED ? STATUS_BAR_HEIGHT : 0);

export const IS_SMALL_DEVICE = WINDOW_HEIGHT < 570;
