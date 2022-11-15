import http from '../config';
import { REFRESH_TOKEN } from './CONSTANTS';

const refreshAccessToken = async ({
  refreshToken,
  grantType = 'refresh_token',
}) => {
  try {
    const params = new URLSearchParams({ grant_type: grantType });
    const { data } = await http.post(`${REFRESH_TOKEN}?${params.toString()}`, {
      refreshToken,
    });
    return data;
  } catch (err) {
    throw err.response;
  }
};

export { refreshAccessToken };
