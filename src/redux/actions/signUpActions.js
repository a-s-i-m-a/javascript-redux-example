import {registration, registrationDialog, registrationUpdateData, registrationUploadFile} from "../../services";

export const GET_MESSAGE_DIALOG = 'GET_MESSAGE_DIALOG';
export const REGISTRATION_ACTION = 'REGISTRATION_ACTION';
export const REGISTRATION_UPDATE_DATA_ACTION = 'REGISTRATION_UPDATE_DATA_ACTION';


export const getMessageRegistrationDialog = (answer) => async (dispatch) => {
	try {
		const { data } = await registrationDialog({ answer });
		dispatch({
			type: GET_MESSAGE_DIALOG,
			payload: data
		});
		return Promise.resolve(data);
	} catch (err) {
		return Promise.reject(err);
	}
};

export const registrationAction = (registrationData) => async (dispatch) => {
	try {
		const { data } = await registration({...registrationData});
		dispatch({
			type: REGISTRATION_ACTION,
			payload: data
		});
		return Promise.resolve(data);
	} catch (err) {
		return Promise.reject(err);
	}
};

export const registrationUpdateDataAction = (id,regData) => async (dispatch) => {
	try {
		const { data } = await registrationUpdateData(id, {...regData});
		dispatch({
			type: REGISTRATION_UPDATE_DATA_ACTION,
			payload: data
		});
		return Promise.resolve(data);
	} catch (err) {
		return Promise.reject(err);
	}
};

export const uploadUserPhoto = (userId, { typeFile, file }) => async (dispatch) => {
	try {
		const { data } = await registrationUploadFile(userId,  { typeFile, file });
		return Promise.resolve(data);
	} catch (err) {
		return Promise.reject(err);
	}
};
