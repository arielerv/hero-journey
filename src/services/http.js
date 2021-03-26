import { create } from 'apisauce';

import { clearToken, getToken, setToken } from './storage';

const { REACT_APP_ENDPOINT } = process.env;

const http = create(
  getToken()
    ? {
        baseURL: REACT_APP_ENDPOINT,
        headers: {
          Authorization: `Bearer ${getToken()}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        timeout: 20000,
      }
    : {
        baseURL: REACT_APP_ENDPOINT,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        timeout: 20000,
      }
);

export const setAuthorization = token => {
  setToken(token);
  http.setHeader('Authorization', `Bearer ${token}`);
};

const navMonitor = async response => {
  const isAuthRequest = response.config.url === '/auth/login';
  if (response.status === 401 && !isAuthRequest) {
    clearToken();
    window.location.href = '/';
  }
};

http.addAsyncResponseTransform(navMonitor);

export default http;