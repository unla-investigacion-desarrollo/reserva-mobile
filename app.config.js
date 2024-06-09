export default () => {
  const isDev = process.env.EXPO_PUBLIC_TENANT === 'DEVELOPMENT';

  const appName = `reserva-ts${isDev ? '-development' : ''}`;
  const bundleName = `com.unla.reserva${isDev ? '.development' : ''}`;
  const googleServicesRoute = isDev ? 'development' : 'production';

  const fonts = [
    'Roboto-Black',
    'Roboto-Bold',
    'Roboto-Light',
    'Roboto-Medium',
    'Roboto-Regular',
    'Roboto-Thin'
  ];

  const fontRoutes = fonts.map(font => `./src/assets/fonts/${font}.ttf`);

  return {
    expo: {
      name: appName,
      slug: appName,
      scheme: appName,
      version: '1.0.0',
      orientation: 'portrait',
      icon: './src/assets/appIcons/icon.png',
      userInterfaceStyle: 'light',
      splash: {
        image: './src/assets/appIcons/splash.png',
        resizeMode: 'contain',
        backgroundColor: '#ffffff'
      },
      assetBundlePatterns: ['**/*'],
      ios: {
        supportsTablet: true,
        googleServicesFile: `./googleServices/${googleServicesRoute}/GoogleService-Info.plist`,
        bundleIdentifier: bundleName
      },
      android: {
        adaptiveIcon: {
          foregroundImage: './src/assets/appIcons/adaptive-icon.png',
          backgroundColor: '#ffffff'
        },
        googleServicesFile: `./googleServices/${googleServicesRoute}/google-services.json`,
        package: bundleName
      },
      web: {
        favicon: './src/assets/appIcons/favicon.png'
      },
      plugins: [
        'expo-localization',
        'expo-router',
        '@react-native-firebase/app',
        [
          'expo-build-properties',
          {
            ios: {
              useFrameworks: 'static'
            },
            android: {
              usesCleartextTraffic: true
            }
          }
        ],
        [
          'expo-font',
          {
            fonts: fontRoutes
          }
        ]
      ],
      extra: {
        eas: {
          projectId: 'b6ca9c92-773d-4b9e-8c22-5d5bb3c11ecc'
        }
      },
      experiments: {
        typedRoutes: true
      }
    }
  };
};
