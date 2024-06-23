import ReactNativeBlobUtil from 'react-native-blob-util';

import api, { apiBaseURL } from '#/common/config/api';
import { buildCreateSightingBody } from '#/common/utils/files';

import {
  CreateSightingParams,
  CreateSightingResponse,
  GetSightingByIdParams,
  GetSightingByIdResponse,
  GetSightingsParams,
  GetSightingsResponse
} from './types';

const BASE_URL = '/sighting';

export const getSightings = (params: GetSightingsParams) => api.get<GetSightingsResponse>(BASE_URL, params);

export const getSightingById = ({ id }: GetSightingByIdParams) =>
  api.get<GetSightingByIdResponse>(`${BASE_URL}/${id}`);

export const createSighting = (values: CreateSightingParams) =>
  ReactNativeBlobUtil.fetch(
    'POST',
    `${apiBaseURL}${BASE_URL}/create`,
    {
      ...api.headers,
      'Content-Type': 'multipart/form-data'
    },
    buildCreateSightingBody(values)
  ).then(res => ({ ...res, json: res.json() as CreateSightingResponse }));
