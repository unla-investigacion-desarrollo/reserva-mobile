import api from '../config/api';
import { ENVIROMENT } from '../constants/envs';

export const buildImageUrl = (url: string) => ({
  uri: `${ENVIROMENT.BASE_URL}/storage/${url}`,
  headers: api.headers
});
