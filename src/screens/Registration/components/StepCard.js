import MaskInput from 'react-maskinput';
import {useState} from "react";
import {MAIN} from "@navigation/CONSTANTS";
import {useDispatch} from "react-redux";
import {addUserCreditCard} from "@redux/actions/userAction";
import {useHistory} from "react-router-dom";

const StepCard = () => {
	const [mask, setMask] = useState('0000 0000 0000 0000');
	const [isDirty, setIsDirty] = useState(false);
	const [creditCard, setCreditCard] = useState({
		cardNumber: null,
		cardDate: null,
		cardCvv: 0,
		cardDefault: true
	});

	const dispatch = useDispatch();

	const history = useHistory();

	const onChange = e => {
		if (e.target.value) {
			setIsDirty(true);
		} else {
			setIsDirty(false);
		}
		if (e.target.value.indexOf('34') === 0 || e.target.value.indexOf('37') === 0) {
			setMask('0000 000000 00000');
			return;
		}
		setMask('0000 0000 0000 0000');
		setCreditCard({...creditCard, cardNumber: e.target.value.replace(/\s/g, '')})
	};

	const onChangeCardDate = (e) => {
		setCreditCard({...creditCard, cardDate: e.target.value.replace(/\s/g, '')})
	};
	const onChangeCardCvv = (e) => {
		setCreditCard({...creditCard, cardCvv: +e.target.value.replace(/\s/g, '')})
	};

	const clearInput = () => {
		setMask(null);
		setIsDirty(false);
	};

	const submitForm = () => {
		if (creditCard.cardDate && creditCard.cardNumber && creditCard.cardCvv) {
			dispatch(addUserCreditCard(creditCard));
			history.push(MAIN);
		}
	}

	return (
		<div className="container flex flex-col mt-10">
    	<span className="text-center text-gray-300 my-10">
				Введите данные карты
    	</span>
			<form>
				<div className="h-48 w-11/12 m-auto bg-black rounded-2xl px-6 py-8">
					<div className="input-card relative mt-4">
						<MaskInput onChange={onChange}
											 maskChar="_"
											 mask={mask}
											 placeholder="0000 0000 0000 0000"
											 size={20}
											 className="bg-gray-400 bg-opacity-40	text-gray-400 rounded-md outline-none w-full px-2 p-1"
						/>;
						<button
							type="button"
							className={`
								absolute
								rounded-full
								bg-gray-500
								bg-opacity-40
								p-0.5
								right-2
								top-1.5
								${isDirty ? 'visible' : 'invisible'}`
							}
							onClick={clearInput}
						>
							<svg xmlns="http://www.w3.org/2000/svg"
									 className="h-4 w-4  text-gray-400"
									 fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					<div className="flex justify-between mt-6">
						<div className="date w-20">
							<MaskInput
								onChange={onChangeCardDate}
								maskChar="_"
								mask="00 / 00"
								size={4}
								placeholder="MM / YY"
								className="bg-gray-400 bg-opacity-40	text-gray-400 rounded-md outline-none w-full pl-2 py-1"
							/>
						</div>
						<div className="cvv flex w-32">
							<small className="text-white text-xs	leading-3	">
								три цифры с обратной стороны
							</small>
							<MaskInput
								onChange={onChangeCardCvv}
								maskChar="_"
								mask="000"
								size={3}
								placeholder="000"
								className="bg-gray-400 bg-opacity-40 w-4	text-gray-400 rounded-md outline-none w-full pl-2.5 py-1"
							/>
						</div>
					</div>
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
						type="button"
						onClick={submitForm}
					>
						Добавить
					</button>
				</div>
			</form>
		</div>
	);
};

export default StepCard;
