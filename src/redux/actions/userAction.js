import {createUserCard} from "@services/users/users";

export const ADD_USER_CREDIT_CARD = 'ADD_USER_CREDIT_CARD';
export const USER_ERROR = 'USER_ERROR';

export const addUserCreditCard = (creditCardData) => async (dispatch) => {
	try {
		const { data } = await createUserCard(creditCardData);
		dispatch({
			type: ADD_USER_CREDIT_CARD,
			payload: data
		});
		return Promise.resolve(data);
	} catch (err) {
		dispatch({
			type: USER_ERROR,
			payload: err.response.data
		});
		throw err;
	}
};
