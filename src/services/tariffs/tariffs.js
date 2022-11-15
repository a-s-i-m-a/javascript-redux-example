import http from '../config';
import { TARIFF, TARIFF_CONDITIONS } from './CONSTANTS';

const getTariffConditions = async (tariffId) => {
	try {
		const { data } = await http.get(TARIFF_CONDITIONS(tariffId));
		return data;
	} catch (err) {
		return err.response.data;
	}
};
const getTariff = async (tariffId) => {
	try {
		const { data } = await http.get(TARIFF(tariffId));
		return data;
	} catch (err) {
		return err.response.data;
	}
};

export {
	getTariffConditions,
	getTariff
};
