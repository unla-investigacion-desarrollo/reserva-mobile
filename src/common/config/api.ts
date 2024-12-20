import { ApiResponse, ApisauceInstance, create } from 'apisauce';
import { CamelcaseSerializer, SnakecaseSerializer } from 'cerealizr';

import { ENVIROMENT } from '../constants/envs';
import { ErrorResponse } from '../services/types';

export const deserializer = new CamelcaseSerializer();
export const serializer = new SnakecaseSerializer();

export const HEADER = {
  PLATFORM: 'X-PLATFORM',
  AUTHORIZATION: 'Authorization',
  TENANT: 'X-TENANT'
} as const;

export const apiBaseURL = ENVIROMENT.BASE_URL;

export const api = create({
  baseURL: apiBaseURL,
  timeout: 15000,

  headers: {
    [HEADER.TENANT]: ENVIROMENT.TENANT,
    [HEADER.PLATFORM]: ENVIROMENT.PLATFORM
  }
});

export const setAuthHeader = (token: string) => api.setHeader(HEADER.AUTHORIZATION, `Bearer ${token}`);
export const removeAuthHeader = () => api.deleteHeader(HEADER.AUTHORIZATION);

export const handleApiResponse = (res: ApiResponse<any, ErrorResponse>) => {
  if (!res.ok) {
    const error = { ...res.data, status: res.status };
    throw error;
  }
  return res.data;
};

export const apiSetup = (baseApi: ApisauceInstance) => {
  baseApi.addResponseTransform(response => {
    response.data = deserializer.serialize(response.data) ?? response.data;
  });

  baseApi.addRequestTransform(request => {
    const serialize = (field: typeof request) => serializer.serialize(field) ?? field;
    request.params = serialize(request.params);
    request.data = serialize(request.data);
  });
};
