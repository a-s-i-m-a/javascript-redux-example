import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getMessageRegistrationDialog, uploadUserPhoto} from "@redux/actions/signUpActions";
import DialogMessage from "./DialogMessage";
import { useHistory } from "react-router-dom";
import {appLocalStorage} from "@utils/storage";

const StepDialog = () => {
	const { dialog } = useSelector((state) => state.signUp);
	const dispatch = useDispatch();

	const user = appLocalStorage.getItem('user');

	const history = useHistory();

	const [messages, setMessages] = useState([
		{
			text: "Здравствуйте! Я робот Юл каршеринга. Помогаю регестрировать новых пользователей",
			answer: false,
			file: false
		},
		{text: `Приготовьте следующие документы:
    паспорт, водительское удостоверение
    и банковскую карту. Необходимо быть старше 21 года и стаж категории
    “B” не менее 2 лет`,
			answer: false,
			file: false
		}
	]);
	const [buttons, setButtons] = useState([{ text: 'Хорошо', value: 'OK' }]);

	const uploadPhoto = (e) => {
		setMessages([...messages, {image:true, url: URL.createObjectURL(e.target.files[0]), answer: true}]);
		const file = new FormData();
		file.append('file', e.target.files[0]);
		switch (messages.filter(m => m.image).length) {
			case 0:
				dispatch(uploadUserPhoto(user.id, {typeFile: 'passport-1', file: file}));
				break;
			case 1:
				dispatch(uploadUserPhoto(user.id, {typeFile: 'passport-2', file}));
				dispatch(getMessageRegistrationDialog('uploadPassport'));
				break;
			case 2:
				dispatch(uploadUserPhoto(user.id, {typeFile: 'driver-licence', file}));
				dispatch(getMessageRegistrationDialog('uploadDrive'));
				break;
			case 3:
				dispatch(uploadUserPhoto(user.id, {typeFile: 'passport-selfie', file}));
				dispatch(getMessageRegistrationDialog('uploadSelfie'));
				break;
			default:
				return null;
		}
	};

	const getTodayTime = () => {
		const today = new Date();
		const h = today.getHours();
		const m = today.getMinutes();
		return `${h}:${m < 10 ? "0" + m : m}`;
	};

	const messagesDialog = messages.map((message, index) => {
		return <DialogMessage
			key={index}
			answer={message.answer}
			message={message.text}
			time={getTodayTime()}
			file={message.file}
			url={message.url}
			image={message.image}
		/>
	});

	const sendMessage = (text, value, file, redirect) => () => {
		if (file) {
			return;
		}
		if (redirect) {
			history.replace('/sign-up?step=6');
		}
		dispatch(getMessageRegistrationDialog(value));
		setMessages([...messages, {text, answer: true}]);
	};

	useEffect(() => {
		if (Array.isArray(dialog)) {
			const d = dialog.map((d) => ({
				...d,
				text: d.message,
				answer: false
			}));
			setMessages([...messages, ...d]);
			setButtons([{text: dialog[0].button.message, value: dialog[0].button.value, file: dialog[0].button.file}]);
			return true;
		}
		if (dialog) {
			setMessages([...messages, {text: dialog.message, answer: false}]);
			if (dialog.button) {
				setButtons([{
					text: dialog.button.message,
					value: dialog.button.value,
					file: dialog.button.file,
					redirect: dialog.button.redirect
				}]);
			}
		}// eslint-disable-next-line
	}, [dialog])

	const buttonsDialog = buttons.map((button, index) => {
		return (
			<label
				className="
            text-button-blue-color
            border border-button-blue-color
            px-4
            py-1
            rounded-full
            outline-none
            flex
            items-center
          "
				key={index}
				onClick={sendMessage(button.text, button.value, button.file, button.redirect )}
			>
				{ button.file ?
					(
						<span className="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 mr-2"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="text-base leading-normal">{button.text}</span>
								<input
									type="file"
									className="hidden"
									accept="image/*"
									onChange={uploadPhoto}
								/>
						</span>
					)
					:
					<span className="text-base leading-normal">{button.text}</span>
				}
			</label>
		);
	});
	return (
		<div className="container flex v-80-h justify-start w-full flex-col relative">
			<div
				className="dialog-container h-5/6 mt-16 flex flex-col overflow-y-scroll"
			>
				{messagesDialog}
				<div className="button-container absolute -bottom-3 flex w-full justify-end">
					{buttonsDialog}
				</div>
			</div>
		</div>
	);
};

export default StepDialog;
