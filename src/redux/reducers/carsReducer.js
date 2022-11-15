import { GET_ALL_CARS_BY_FILTER } from '@redux/actions/carsAction';

const initialState = {
  cars: [],
  errors: null,
};

export const carsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_CARS_BY_FILTER:
      return {
        ...state,
        cars: payload,
      };
    default:
      return state;
  }
};
