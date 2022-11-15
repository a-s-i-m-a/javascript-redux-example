import {GET_MESSAGE_DIALOG, REGISTRATION_ACTION, REGISTRATION_UPDATE_DATA_ACTION} from "../actions/signUpActions";

const initialState = {
	dialog: null,
	user: null,
};

export const signUpReducer = (state=initialState, action) => {
	const {type, payload} = action;
	switch (type) {
		case GET_MESSAGE_DIALOG:
			return {
				...state,
				dialog: payload
			};
		case REGISTRATION_ACTION:
			return {
				...state,
				user: payload
			};
		case REGISTRATION_UPDATE_DATA_ACTION:
			return {
				...state,
				user: payload
			};
		default:
			return state;
	}
};
