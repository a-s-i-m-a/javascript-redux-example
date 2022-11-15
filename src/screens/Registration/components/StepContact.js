import { useForm } from 'react-hook-form';
import { appLocalStorage } from '@utils/storage';
import { useHistory } from 'react-router-dom';
import { REGISTRATION } from '@navigation/CONSTANTS';

const StepContact = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    appLocalStorage.setItem('user', { ...data });
    history.replace(`${REGISTRATION}?step=2`);
  };

  return (
    <div className="container flex flex-col">
      <span className="text-center text-gray-300 my-16">
        Введите ваши данные
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="last-name">
          <input
            className={`
							bg-gray-100
							outline-none
							w-full
							px-4
							py-4
							rounded-full
							${errors.lastName ? 'border-red-500 border' : null}
						`}
            {...register('lastName', { required: true })}
            type="text"
            placeholder="Фамилия"
          />
          {errors.lastName && (
            <small className="text-red-500 ml-2">
              Обязательно для заполнения
            </small>
          )}
        </div>
        <div className="first-name mt-5">
          <input
            className={`
							bg-gray-100
							outline-none
							w-full
							px-4
							py-4
							rounded-full
							${errors.firstName ? 'border-red-500 border' : null}
						`}
            {...register('firstName', { required: true })}
            type="text"
            placeholder="Имя"
          />
          {errors.firstName && (
            <small className="text-red-500 ml-2">
              Обязательно для заполнения
            </small>
          )}
        </div>
        <div className="middle-name mt-5">
          <input
            className={`
							bg-gray-100
							outline-none
							w-full
							px-4
							py-4
							rounded-full
							${errors.firstName ? 'border-red-500 border' : null}
						`}
            {...register('middleName', { required: true })}
            type="text"
            placeholder="Отчество"
          />
          {errors.middleName && (
            <small className="text-red-500 ml-2">
              Обязательно для заполнения
            </small>
          )}
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

export default StepContact;
