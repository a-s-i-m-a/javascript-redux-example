import {AUTH_ERROR, CONFIRM_CODE_ACTION} from "../actions/authActions";

const initialState = {
	authData: null,
	errors: null
};

export const authReducer = (state=initialState, action) => {
	const {type, payload} = action;
	switch (type) {
		case CONFIRM_CODE_ACTION:
			return {
				...state,
				authData: payload
			};
		case AUTH_ERROR:
			return {
				...state,
				errors: payload
			};
		default:
			return state;
	}
};
