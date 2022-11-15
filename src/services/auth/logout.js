import http from '../config';
import { LOGOUT } from './CONSTANTS';

const logout = async ({ fromAll = true }) => {
	try {
		const params = new URLSearchParams({ from_all: fromAll });
		const { data } = await http.post(`${LOGOUT}?${params.toString()}`);
		return data;
	} catch (err) {
		return err.response.data;
	}
};

export { logout };
