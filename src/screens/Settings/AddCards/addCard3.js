import React, { useState } from 'react';
import Header from '@screens/Settings/components/Header';
import Button from '@screens/Settings/components/Button';
import MaskInput from 'react-maskinput';
import { addUserCreditCard } from '@redux/actions/userAction';

const AddCard3 = () => {
  const [mask, setMask] = useState('0000 0000 0000 0000');
  const [isDirty, setIsDirty] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardDate, setCardDate] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [creditCard, setCreditCard] = useState({
    cardNumber: null,
    cardDate: null,
    cardCvv: 0,
    cardDefault: true,
  });

  const addUserCard = () => {
    addUserCreditCard({
      cardNumber: cardNumber,
      cardDate: cardDate,
      cardCvv: cardCvv,
      cardDefault: false,
    });
    console.log('Card Added');
  };

  const onChange = (e) => {
    if (e.target.value) {
      setIsDirty(true);
    } else {
      setIsDirty(false);
    }
    if (
      e.target.value.indexOf('34') === 0 ||
      e.target.value.indexOf('37') === 0
    ) {
      setMask('0000 000000 00000');
      return;
    }
    setMask('0000 0000 0000 0000');
    setCreditCard({
      ...creditCard,
      cardNumber: e.target.value.replace(/\s/g, ''),
    });
  };

  const onChangeCardDate = (e) => {
    setCreditCard({
      ...creditCard,
      cardDate: e.target.value.replace(/\s/g, ''),
    });
  };
  const onChangeCardCvv = (e) => {
    setCreditCard({
      ...creditCard,
      cardCvv: +e.target.value.replace(/\s/g, ''),
    });
  };

  const clearInput = () => {
    setMask(null);
    setIsDirty(false);
  };

  return (
    <div className="flex flex-col m-auto justify-center md:w-2/5">
      <div className="mx-5 my-5">
        <Header />
        <p className="text-xl my-6 ">Добавить карту</p>
        <hr />
        <div className="text-center text-gray-400  uppercase my-6 flex flex-col justify-center items-center">
          <p className="text-xs mb-6">Введите данные карты</p>
          <div className="h-48 w-11/12 m-auto bg-black rounded-2xl px-6 py-8">
            <div className="input-card relative mt-4">
              <MaskInput
                onChange={onChange}
                onValueChange={(e) => setCardNumber(e.value)}
                maskChar="_"
                mask={mask}
                placeholder="0000 0000 0000 0000"
                size={20}
                className="bg-gray-400 bg-opacity-40	text-gray-400 rounded-md outline-none w-full px-2 p-1"
              />

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
								${isDirty ? 'visible' : 'invisible'}`}
                onClick={clearInput}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4  text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex justify-between mt-6">
              <div className="date w-20">
                <MaskInput
                  onValueChange={(e) => setCardDate(e.value)}
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
                  onValueChange={(e) => setCardCvv(e.value)}
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
        </div>
        <button onClick={() => addUserCard()}>
          <Button prop={'Продолжить'} />
        </button>
      </div>
    </div>
  );
};

export default AddCard3;
