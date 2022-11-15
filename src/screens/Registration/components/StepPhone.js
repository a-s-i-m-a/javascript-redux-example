import Input from 'react-phone-number-input/input';
import { useState } from 'react';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { useForm } from 'react-hook-form';
import { appLocalStorage } from '@utils/storage';
import { useDispatch } from 'react-redux';
import { registrationAction } from '@redux/actions/signUpActions';
import { useHistory } from 'react-router-dom';
import { REGISTRATION } from '@navigation/CONSTANTS';

const StepPhone = ({ token }) => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [value] = useState();
  const [isValidPhone, setValidPhone] = useState(true);

  const changeValuePhone = (phone) => {
    setValidPhone(isValidPhoneNumber(phone));
  };

  const onSubmit = (data) => {
    const registrationData = {
      ...appLocalStorage.getItem('user'),
      phone: data.phone.replace(/\s/g, ''),
      token,
    };
    dispatch(registrationAction(registrationData));
    history.replace(`${REGISTRATION}?step=3`);
  };

  return (
    <div className="container flex justify-center w-full flex-col">
      <span className="text-center text-gray-300 mt-48 my-8">
        Введите номер телефона
      </span>
      <div className="container-select-country flex justify-center mb-8">
        <select defaultValue="+7" className="w-auto text-gray-300 bg-white">
          <option value="+7">Россия</option>
        </select>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="phone">
          <Input
            {...register('phone', { required: true })}
            value={value}
            onChange={changeValuePhone}
            country="RU"
            international
            withCountryCallingCode
            className={`
							border-b-2
							${isValidPhone ? 'border-button-blue-color' : 'border-red-500'}
							outline-none
							w-full
							text-3xl
							px-2
							py-2
						`}
          />
          <small
            className={`text-red-500 ${
              !isValidPhone ? 'visible' : 'invisible'
            }`}>
            Номер указан не верно
          </small>
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
          ">
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepPhone;
