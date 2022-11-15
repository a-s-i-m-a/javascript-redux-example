import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useHistory, useLocation } from 'react-router-dom';
import { LOGIN, MAIN } from '@navigation/CONSTANTS';
import { confirmCode } from '@services/auth/login';
import ReactPinField from 'react-pin-field';

const ConfirmCodeForm = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (!location.state) {
      history.push(LOGIN);
    }
  });

  const [code, setCode] = useState(null);
  const sendCode = async () => {
    if (code && code.length === 4) {
      try {
        await confirmCode({ code });
        history.push(MAIN);
      } catch (e) {
        toast.error('Неверно указан код');
      }
    }
  };

  return (
    <div className="container flex justify-center w-full flex-col">
      <span className="text-center text-gray-300 mt-48 my-8">
        Введите SMS код
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
            Подтвердить
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConfirmCodeForm;
