import ReactNativeBlobUtil from 'react-native-blob-util';

import { isIos } from '../constants/platform';
import { CreateSightingParams } from '../services/Sighting/types';

export const getFilePath = (uri: string) => (isIos ? uri.replace('file://', '') : uri);

export const buildCreateSightingBody = (values: CreateSightingParams) => [
  {
    name: 'request',
    type: 'application/json',
    data: JSON.stringify(values.request)
  },
  ...values.files.map(({ name, uri, mimeType }) => ({
    name: 'files',
    filename: name,
    type: mimeType,
    data: ReactNativeBlobUtil.wrap(decodeURIComponent(getFilePath(uri)))
  }))
];
