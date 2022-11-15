import http from '../config';
import { CAR, CARS, CAR_ACTION } from './CONSTANTS';

const getAllCars = async (filter = {}) => {
  try {
    const {
      userCords = {},
      radius = 5,
      aggregator = null,
      carType = {},
      filters = {},
    } = filter;

    const params = new URLSearchParams({
      userCords: JSON.stringify(userCords),
      radius,
      aggregator,
      carType: JSON.stringify(carType),
      filters: JSON.stringify(filters),
    });

    const { data } = await http.get(`${CARS}?${params.toString()}`);
    return data;
  } catch (err) {
    return err;
  }
};

const getCar = async (carId, filter = {}) => {
  try {
    const { bookingType = 1 } = filter;
    const params = new URLSearchParams({
      bookingType,
    });
    const { data } = await http.get(`${CAR(carId)}?${params.toString()}`);
    return data;
  } catch (err) {
    return err;
  }
};

const carAction = async (carId, payload = {}) => {
  try {
    const { signal = true, warmUp = true } = payload;
    const { data } = await http.post(`${CAR_ACTION(carId)}`, {
      signal,
      warmUp,
    });
    return data;
  } catch (err) {
    return err;
  }
};

export { getAllCars, getCar, carAction };
