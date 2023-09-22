import { getApiKey } from './api';

export function getBaseUrl() {
  const BASE_URL = 'https://translation.googleapis.com/language/translate/v2';
  const API_KEY = getApiKey();

  const completeURL = `${BASE_URL}?key=${API_KEY}`;
  return completeURL;
}
