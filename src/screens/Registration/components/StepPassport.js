import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import {appLocalStorage} from "@utils/storage";
import {REGISTRATION} from "@navigation/CONSTANTS";
import {useDispatch} from "react-redux";
import {registrationUpdateDataAction} from "@redux/actions/signUpActions";

const StepPassport = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = (data) => {
		const user = appLocalStorage.getItem('user');
		if (user) {
			dispatch(registrationUpdateDataAction(user.id, {passport: data}));
			history.replace(`${REGISTRATION}?step=7`);
		}
	};
	return (
		<div className="container flex flex-col">
    	<span className="text-center text-gray-300 my-10">
				Введите данные паспорта
    	</span>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="series">
					<input
						className={`
							bg-gray-100
							outline-none
							w-full
							px-4
							py-4
							rounded-full
							${errors.series ? 'border-red-500 border' : null}
						`}
						{...register("series", { required: true })}
						type="text"
						placeholder="Серия"

					/>
				</div>
				<div className="numbers mt-5">
					<input
						className={`
							bg-gray-100
							outline-none
							w-full
							px-4
							py-4
							rounded-full
							${errors.numbers ? 'border-red-500 border' : null}
						`}
						{...register("numbers", { required: true })}
						type="text"
						placeholder="Номер"
					/>
				</div>
				<div className="date-of-issue mt-5">
					<input
						className={`
							bg-gray-100
							outline-none
							w-full
							px-4
							py-4
							rounded-full
							${errors.dateOfIssue ? 'border-red-500 border' : null}
						`}
						{...register("dateOfIssue", { required: true })}
						type="date"
						placeholder="Дата выдачи"
					/>
				</div>
				<div className="issued-by mt-5">
					<textarea
						className={`
							bg-gray-100
							outline-none
							w-full
							px-4
							py-4
							rounded-lg
							${errors.issuedBy ? 'border-red-500 border' : null}
						`}
						{...register("issuedBy", { required: true })}
						placeholder="Кем выдан"
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

export default StepPassport;
