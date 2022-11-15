import axios from 'axios';
import { refreshAccessToken } from './auth/refreshAccessToken';
import { appLocalStorage } from '@utils/storage';
import { errorLogger } from '@utils/errorLogger';
import { LOGIN } from '@navigation/CONSTANTS';

const http = axios.create({
  baseURL: 'https://api.app.amics-tech.ru/api/',
});

http.interceptors.request.use(
  (config) => {
    /** Login get AccessToken */
    const bearerToken = appLocalStorage.getItem('accessToken') || '';
    if (config.data instanceof FormData) {
      config.headers = {
        Authorization: `Bearer ${bearerToken}`,
        'Content-Type': `multipart/form-data`,
      };
      return config;
    }
    config.headers = {
      Authorization: `Bearer ${bearerToken.replace(/"/g, '')}`,
      Accept: 'application/json',
    };
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

http.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const {
          data: { accessToken, refreshToken },
        } = await refreshAccessToken({
          refreshToken: appLocalStorage.getItem('refreshToken'),
        });
        appLocalStorage.setItem('accessToken', accessToken);
        appLocalStorage.setItem('refreshToken', refreshToken);
        axios.defaults.headers.common['Authorization'] =
          'Bearer ' + accessToken;
        return http(originalRequest);
      } catch (error) {
        errorLogger(error);
        document.location = LOGIN;
      }
    }
    return Promise.reject(error);
  }
);

export default http;
