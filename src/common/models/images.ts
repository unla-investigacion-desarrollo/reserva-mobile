import api, { apiBaseURL } from '../config/api';

export const buildImageUrl = (url: string) => ({
  uri: `${apiBaseURL}/storage/${url}`,
  headers: api.headers
});
