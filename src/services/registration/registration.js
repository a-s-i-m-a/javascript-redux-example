import http from '../config';
import { DIALOG_REGISTRATION, REGISTRATION, REGISTRATION_UPDATE_DATA, UPLOAD_REGISTRATION_FILE } from './CONSTANTS';

const registration = async ({ firstName, lastName, middleName, phone, token}) => {
	try {
		const { data } = await http.post(
			REGISTRATION, {
				firstName, lastName, middleName, phone, token
			});
		return data;
	} catch (err) {
		return err.response;
	}
};
const registrationDialog = async ({ answer }) => {
	try {
		const { data } = await http.post(
			DIALOG_REGISTRATION, { answer });
		return data;
	} catch (err) {
		return err.response;
	}
};
const registrationUploadFile = async (userId, { typeFile, file }) => {
	try {
		const params = new URLSearchParams({ type: typeFile });
		const { data } = await http.put(
			`${UPLOAD_REGISTRATION_FILE(userId)}?${params.toString()}`,
			file,
			{
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			}
		);
		return data;
	} catch (err) {
		return err.response;
	}
};
const registrationUpdateData = async (userId, { email = undefined, passport = undefined }) => {
	try {
		const { data } = await http.put(
			REGISTRATION_UPDATE_DATA(userId), { email, passport });
		return data;
	} catch (err) {
		return err.response;
	}
};

export {
	registration,
	registrationDialog,
	registrationUploadFile,
	registrationUpdateData
};
