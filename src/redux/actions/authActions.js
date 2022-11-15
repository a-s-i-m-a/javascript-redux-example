import { confirmCode } from '../../services';

export const CONFIRM_CODE_ACTION = 'CONFIRM_CODE_ACTION';
export const AUTH_ERROR = 'AUTH_ERROR';

export const confirmCodeAction =
  ({ code }) =>
  async (dispatch) => {
    try {
      const { data } = await confirmCode({ code });
      dispatch({
        type: CONFIRM_CODE_ACTION,
        payload: data,
      });
      return Promise.resolve(data);
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: err,
      });
      throw err;
    }
  };
