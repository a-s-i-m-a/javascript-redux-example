import {
	CAR_BOOKING,
	CAR_BOOKING_CHECKOUT,
	CAR_BOOKING_COMPLETE,
	CAR_BOOKING_CONFIRM,
	CAR_BOOKING_CONTRACT,
	CAR_BOOKING_INFORMATION,
	CAR_BOOKING_ISPECTION,
	CAR_BOOKING_PAUSE,
	CAR_BOOKING_UPLOAD
} from './CONSTANTS';
import http from "../config";

const carBooking = async (payload = {
	car: null,
	tariff: null,
	timeRent: null,
	agreement: null,
	userLocation: {
		lat: null,
		lng: null
	}
}) => {
	try {
		const { data } = await http.post(CAR_BOOKING, { ...payload });
		return data;
	} catch (err) {
		return err.response.data;
	}
};

const carBookingInspection =  async (bookingId, payload = {inspection: true}) => {
	try {
		const { data } = await http.put(CAR_BOOKING_ISPECTION(bookingId), { ...payload });
		return data;
	} catch (err) {
		return err.response.data;
	}
};

const carBookingUpload = async (bookingId, payload = { file: null }) => {
	try {
		const { data } = await http.put(CAR_BOOKING_UPLOAD(bookingId),
			{ ...payload },
			{
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			}
		);
		return data;
	} catch (err) {
		return err.response.data;
	}
};

const carBookingConfirm = async (bookingId, payload = { confirm: true }) => {
	try {
		const { data } = await http.put(CAR_BOOKING_CONFIRM(bookingId), { ...payload });
		return data;
	} catch (err) {
		return err.response.data;
	}
};

const carBookingInformation = async (bookingId) => {
	try {
		const { data } = await http.get(CAR_BOOKING_INFORMATION(bookingId));
		return data;
	} catch (err) {
		return err.response.data;
	}
};

const carBookingPause = async (bookingId, payload = { pause: true }) => {
	try {
		const { data } = await http.put(CAR_BOOKING_PAUSE(bookingId), { ...payload });
		return data;
	} catch (err) {
		return err.response.data;
	}
};

const carBookingComplete = async (bookingId, payload = { complete: true }) => {
	try {
		const { data } = await http.put(CAR_BOOKING_COMPLETE(bookingId), { ...payload });
		return data;
	} catch (err) {
		return err.response.data;
	}
};

const carBookingCheckout = async (bookingId) => {
	try {
		const { data } = await http.get(CAR_BOOKING_CHECKOUT(bookingId));
		return data;
	} catch (err) {
		return err.response.data;
	}
};

const carBookingConrtact = async () => {
	try {
		const { data } = await http.get(CAR_BOOKING_CONTRACT);
		return data;
	} catch (err) {
		return err.response.data;
	}
};

export {
	carBookingConrtact,
	carBookingCheckout,
	carBookingComplete,
	carBookingPause,
	carBookingInformation,
	carBookingConfirm,
	carBookingUpload,
	carBookingInspection,
	carBooking,
};
