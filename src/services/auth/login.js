import http from '../config';
import { CONFIRM_CODE, LOGIN } from './CONSTANTS';
import { appLocalStorage } from '@utils/storage';

const login = async ({ phone, token }) => {
  try {
    const { data } = await http.post(LOGIN, { phone, token });
    return data;
  } catch (err) {
    throw err.response.data;
  }
};

const confirmCode = async ({ code }) => {
  try {
    const { data } = await http.post(CONFIRM_CODE, { code });
    appLocalStorage.setItem(
      'accessToken',
      data.data.accessToken.replace(/"/g, '')
    );
    appLocalStorage.setItem(
      'refreshToken',
      data.data.refreshToken.replace(/"/g, '')
    );
    appLocalStorage.setItem('isLogged', true);
    return data;
  } catch (err) {
    throw err.response.data;
  }
};

export { login, confirmCode };
