import { getApiKey } from './api';

export function getBaseUrl() {
  const BASE_URL = `${getApiKey()}/$discovery/rest?version=v3`;
  const API_KEY = import.meta.env.VITE_TRANSLATE_API_KEY;

  const completeURL = `${BASE_URL}&key=${API_KEY}`;
  return completeURL;
}
