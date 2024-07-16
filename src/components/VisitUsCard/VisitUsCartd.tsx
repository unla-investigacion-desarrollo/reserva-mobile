import { View } from 'react-native';

import { ImageBackground, ImageStyle } from 'expo-image';
import { openURL } from 'expo-linking';

import { birdBackgroud } from '#/assets';
import { WEBSITE_LINK } from '#/common/constants/links';

import { Text } from '../Text';
import { styles } from './styles';

export function VisitUsCard() {
  return (
    <ImageBackground
      blurRadius={0}
      imageStyle={styles.backgroundImage as ImageStyle}
      contentFit="cover"
      style={styles.visitUsCard}
      source={birdBackgroud}>
      <View style={styles.content}>
        <Text style={styles.title} tx="VisitUs.comeVisit" />
        <Text style={styles.subtitle} tx="VisitUs.openTimes" />
        <Text onPress={() => openURL(WEBSITE_LINK)} style={styles.link} tx="VisitUs.link" />
        <Text style={styles.author}>PH: Leonel Melvern</Text>
      </View>
    </ImageBackground>
  );
}
