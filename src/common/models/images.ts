import { HEADER, apiBaseURL } from '../config/api';

export const buildImageUrl = (url: string, authToken?: string) => ({
  uri: `${apiBaseURL}/storage/${url}`,
  headers: { [HEADER.AUTHORIZATION]: authToken ? `Bearer ${authToken}` : '' }
});
