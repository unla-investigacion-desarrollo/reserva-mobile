import { ApisauceInstance, create } from 'apisauce';
import { CamelcaseSerializer, SnakecaseSerializer } from 'cerealizr';

import { ENVIROMENT } from '../constants/envs';

export const deserializer = new CamelcaseSerializer();
export const serializer = new SnakecaseSerializer();

export const HEADER = {
  PLATFORM: 'X-PLATFORM',
  AUTHORIZATION: 'Authorization',
  TENANT: 'X-TENANT'
};

export const api = create({
  baseURL: ENVIROMENT.BASE_URL,
  timeout: 15000,
  headers: {
    [HEADER.TENANT]: ENVIROMENT.TENANT,
    [HEADER.PLATFORM]: ENVIROMENT.PLATFORM
  }
});

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

export default api;
