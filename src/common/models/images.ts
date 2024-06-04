import api from '../config/api';
import { ENVIROMENT } from '../constants/envs';
import { SightingImage } from '../types/stightings';

export const buildImageUrl = (img: SightingImage) => ({
  uri: `${ENVIROMENT.BASE_URL}/storage/${img.url}`,
  headers: api.headers
});
