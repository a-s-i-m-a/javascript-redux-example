import { getAllCars } from '@services/cars/cars';

export const GET_ALL_CARS_BY_FILTER = 'GET_ALL_CARS_BY_FILTER';

export const getCarsByFilters =
  ({ userCords }) =>
  async (dispatch) => {
    try {
      const response = await getAllCars({
        userCords,
      });
      dispatch({
        type: GET_ALL_CARS_BY_FILTER,
        payload: response.data,
      });
      return Promise.resolve(response.data);
    } catch (err) {
      throw err;
    }
  };
