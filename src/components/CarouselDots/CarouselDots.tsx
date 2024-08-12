import { View } from 'react-native';

import { Dot } from './Dot';
import { styles } from './styles';

export type CarouselDotsProps<T> = {
  data: T[];
  currentItemIndex: number;
};

export function CarouselDots<T>({ data, currentItemIndex }: CarouselDotsProps<T>) {
  return (
    <View style={styles.dotRow}>
      {data.map((item, index) => (
        <Dot key={`dot-${index}`} index={index} item={item} currentIndex={currentItemIndex} />
      ))}
    </View>
  );
}
