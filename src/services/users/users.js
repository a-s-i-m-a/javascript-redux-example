import http from '../config';
import {
  USER,
  USER_CARD,
  USER_CARDS,
  USER_SETTINGS,
  USER_TRAVEL,
  USER_TRAVELS,
} from './CONSTANTS';

const getUserInformation = async () => {
  try {
    const { data } = await http.get(`${USER}`);
    return data;
  } catch (err) {
    return err;
  }
};

const getUserTravels = async () => {
  try {
    const { data } = await http.get(`${USER_TRAVELS}`);
    return data;
  } catch (err) {
    return err.response.data;
  }
};
const getUserOneTravel = async (travelId) => {
  try {
    const { data } = await http.get(`${USER_TRAVEL(travelId)}`);
    return data;
  } catch (err) {
    return err.response.data;
  }
};

const getUserSettings = async () => {
  try {
    const { data } = await http.get(`${USER_SETTINGS}`);
    return data;
  } catch (err) {
    return err;
  }
};
const updateUserSettings = async (payload = {}) => {
  try {
    const { data } = await http.put(`${USER_SETTINGS}`, { ...payload });
    return data;
  } catch (err) {
    return err;
  }
};

const updateUserCard = async (cardId, payload = {}) => {
  try {
    const { data } = await http.put(`${USER_CARD(cardId)}`, { ...payload });
    return data;
  } catch (err) {
    return err.response.data;
  }
};

const getUserCards = async () => {
  try {
    const { data } = await http.get(`${USER_CARDS}`);
    return data;
  } catch (err) {
    return err;
  }
};

const createUserCard = async (
  payload = {
    cardNumber: undefined,
    cardDate: undefined,
    cardCvv: undefined,
    cardDefault: undefined,
  }
) => {
  try {
    const { data } = await http.post(`${USER_CARDS}`, { ...payload });
    return data;
  } catch (err) {
    return err.response.data;
  }
};

export {
  getUserInformation,
  getUserTravels,
  getUserOneTravel,
  getUserSettings,
  updateUserSettings,
  updateUserCard,
  getUserCards,
  createUserCard,
};
