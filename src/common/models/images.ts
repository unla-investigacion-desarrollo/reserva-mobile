import { ENVIROMENT } from '../constants/envs';
import { SightingImage } from '../types/stightings';

export const buildImageUrl = (img: SightingImage) => `${ENVIROMENT.BASE_URL}/storage/${img.url}`;
