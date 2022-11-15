import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { appLocalStorage } from '@utils/storage';
import { confirmCodeAction } from '@redux/actions/authActions';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { REGISTRATION } from '@navigation/CONSTANTS';
import ReactPinField from 'react-pin-field';

const StepCode = () => {
  const history = useHistory();

  const { user } = useSelector((state) => state.signUp);
  const { errors } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [code, setCode] = useState(null);

  useEffect(() => {
    appLocalStorage.setItem('user', user);
  }, [user]);

  useEffect(() => {
    if (errors) {
      toast.error('Неверно указан код подтверждения');
    }
  }, [errors]);

  const sendCode = () => {
    if (code && code.length === 4) {
      dispatch(confirmCodeAction({ code }));
      history.replace(`${REGISTRATION}?step=4`);
    }
  };

  return (
    <div className="container flex justify-center w-full flex-col">
      <span className="text-center text-gray-300 mt-48 my-8">
        {' '}
        Введите SMS код{' '}
      </span>
      <form>
        <div className="flex verify justify-center">
          <ReactPinField
            length={4}
            className="pin-field"
            onChange={(value) => setCode(value)}
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
            type="button"
            onClick={sendCode}>
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepCode;
