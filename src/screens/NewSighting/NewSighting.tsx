import { useState } from 'react';

import { View } from 'react-native';

import { Image, ImageStyle } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import { StatusBar } from 'expo-status-bar';

import { queryClient } from '#/common/api';
import { useCreateSighting } from '#/common/api/sighting/useCreateSighting';
import { BUTTON_INTENTS } from '#/common/constants/button';
import { primary, white } from '#/common/constants/colors';
import { SIGHTING } from '#/common/constants/queryKeys';
import { Button, Text } from '#/components';
import { BackButtonHeader } from '#/components/BackButtonHeader';

import { styles } from './styles';

export function NewSighting() {
  const [image, setImage] = useState<ImagePicker.ImagePickerAsset | null>(null);
  const [status, requestPermission] = ImagePicker.useCameraPermissions();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0
    });

    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

  const takePhoto = async () => {
    if (!status || !status.granted) {
      const permResult = await requestPermission();
      if (!permResult.granted) {
        return;
      }
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,

      quality: 1,
      allowsEditing: true
    });
    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

  const { mutate } = useCreateSighting({
    onError: err => {
      console.log('err', err);
    },
    onSuccess: res => {
      queryClient.resetQueries({ queryKey: [SIGHTING], stale: true });
      console.log('suc', res);
    }
  });

  const data = {
    userId: 3,
    name: 'Grillo campestre',
    scientificName: 'Gryllus campestris',
    latitude: 34.47179,
    longitude: 58.2633,
    type: 'insectos',
    fields: [
      {
        title: 'Características físicas',
        description:
          'El pico es fuerte y cónico, terminado en punta como de cincel o de tijera. Para beber agua, llenan de esa sustancia su pico y luego mueven la cabeza hacia atrás con el fin de que el agua pase por su garganta. Su plumaje es duro, poco abundante y rígido. A esta especie se la suele llamar también carpintero de nuca roja debido a la mancha carmín que tienen machos y hembras.'
      },
      {
        title: 'Hábitat',
        description:
          'Esta especie habita en el centro y centro-sur de América del Sur, en Argentina, Bolivia, Brasil, Paraguay, Colombia y Uruguay. En la Argentina, mora en las provincias del norte, el litoral y en algunas partes de las provincias de Neuquén y Río Negro.'
      }
    ]
  };

  return (
    <View style={styles.newSighting}>
      <StatusBar animated style="light" />
      <BackButtonHeader backgroundColor={primary.default} buttonColor={white} />
      <Button
        intent={BUTTON_INTENTS.TEXT}
        style={styles.pad}
        title="Pick an image from camera roll"
        onPress={pickImage}
      />
      <Button intent={BUTTON_INTENTS.TEXT} title="Take a photo" onPress={takePhoto} />
      <Button
        intent={BUTTON_INTENTS.TEXT}
        title="Create sighting"
        onPress={() => {
          image &&
            mutate({
              files: [
                {
                  name:
                    image.fileName?.replace(/ /g, '_') ??
                    image.uri.split('/').pop()?.replace(/ /g, '_') ??
                    'image.png',
                  uri: image.uri,
                  mimeType: image.mimeType ?? `image/${image.uri.split('.').pop()}`
                }
              ],
              request: data
            });
        }}
      />
      {image && <Image contentFit="contain" source={{ uri: image.uri }} style={styles.image as ImageStyle} />}
    </View>
  );
}
