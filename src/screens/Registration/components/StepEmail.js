import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {appLocalStorage} from "@utils/storage";
import {useHistory} from "react-router-dom";
import {registrationUpdateDataAction} from "@redux/actions/signUpActions";
import {toast} from "react-hot-toast";
import {REGISTRATION} from "@navigation/CONSTANTS";


const StepEmail = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { register, handleSubmit, formState: { errors } } = useForm();
	const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i;

	const onSubmit = (data) => {
		const user = appLocalStorage.getItem('user');
		if (user) {
			dispatch(registrationUpdateDataAction(user.id, data));
			toast.success('Для подтверждения email, Вам было отправленно письмо!');
			history.replace(`${REGISTRATION}?step=5`);
		}
	};

	return (
		<div className="container flex justify-center w-full flex-col">
			<span className="text-center text-gray-300 mt-48 my-8"> Введите e-mail </span>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="email">
					<input
						className={`
            border-b-2
            ${errors.email ? 'border-red-500' : 'border-button-blue-color'}
            outline-none
            w-full
            text-2xl
            px-2
            py-2
          `}
						{...register("email", { required: true, pattern })}
						placeholder="e-mail"
						type="email"
					/>
				</div>
				<div className="button-container mt-5 w-full">
					<button
						className="
            bg-button-blue-color
            outline-none
            w-full
            py-3
            px-10
            text-white
            rounded
          "
					>
						Отправить
					</button>
				</div>
			</form>
		</div>
	);
};

export default StepEmail;
