import ReactNativeBlobUtil from 'react-native-blob-util';

import { api, apiBaseURL, handleApiResponse } from '#/common/config/api';
import { buildCreateSightingBody } from '#/common/utils/files';

import { ErrorResponse } from '../types';
import {
  CreateSightingParams,
  CreateSightingResponse,
  GetSightingByIdParams,
  GetSightingByIdResponse,
  GetSightingsParams,
  GetSightingsResponse
} from './types';

const BASE_URL = '/sighting';

export const getSightings = (params: GetSightingsParams) =>
  api.get<GetSightingsResponse, ErrorResponse>(BASE_URL, params).then(handleApiResponse);

export const getSightingById = ({ id }: GetSightingByIdParams) =>
  api.get<GetSightingByIdResponse, ErrorResponse>(`${BASE_URL}/${id}`).then(handleApiResponse);

export const createSighting = (values: CreateSightingParams) =>
  ReactNativeBlobUtil.fetch(
    'POST',
    `${apiBaseURL}${BASE_URL}/create`,
    {
      ...api.headers,
      'Content-Type': 'multipart/form-data'
    },
    buildCreateSightingBody(values)
  ).then(res => {
    if (res.respInfo.status === 201) {
      return res.json() as CreateSightingResponse;
    }
    const error = { ...res.json(), status: res.respInfo.status } as ErrorResponse;
    throw error;
  });
