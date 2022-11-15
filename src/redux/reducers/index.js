import { combineReducers } from 'redux';
import { signUpReducer } from './signUpReducer';
import { authReducer } from './authReducer';
import { carsReducer } from '@redux/reducers/carsReducer';

export const rootReducer = combineReducers({
  signUp: signUpReducer,
  auth: authReducer,
  cars: carsReducer,
});
