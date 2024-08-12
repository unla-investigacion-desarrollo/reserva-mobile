import { View, ViewStyle } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import { BellIcon, HeartIcon, UserIcon } from '#/assets';
import { white } from '#/common/constants/colors';
import { useSession } from '#/common/hooks/useSession';

import { Text } from '../Text';
import { styles } from './styles';

export function HomeHeader() {
  const { top } = useSafeAreaInsets();
  const { logOut } = useSession();

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Test Toast 🌳',
      text2:
        'Esse in duis incididunt deserunt nostrud. Commodo nostrud pariatur eu ad dolor deserunt velit amet sunt minim magna excepteur. Id non fugiat elit amet consectetur do ullamco. Voluptate amet aliquip mollit ullamco exercitation. Ipsum laboris sunt Lorem consequat reprehenderit sit non aliquip nostrud. Fugiat officia voluptate aliquip cillum ex mollit adipisicing non labore ullamco nulla consequat cillum est. Laboris reprehenderit tempor qui esse in ad do ad veniam mollit duis culpa officia magna.',
      position: 'top',
      topOffset: top,
      visibilityTime: 1000 * 120
    });
  };

  return (
    <View style={styles.container(top) as ViewStyle}>
      <View style={styles.background}>
        <View style={styles.header}>
          <Text style={styles.text}>¡Buen Dia!</Text>
          <View style={styles.iconSection}>
            <BellIcon stroke={white} style={styles.icon} />
            <HeartIcon onPress={showToast} stroke={white} style={styles.icon} />
            <UserIcon onPress={logOut} stroke={white} style={styles.icon} />
          </View>
        </View>
      </View>
    </View>
  );
}
