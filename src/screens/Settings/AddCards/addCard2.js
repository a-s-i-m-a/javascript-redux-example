import React from 'react';
import Header from '@screens/Settings/components/Header';
import card from '@assets/svg/blackCard.svg';
import { Link } from 'react-router-dom';
import Button from '@screens/Settings/components/Button';

const AddCard2 = () => {
  return (
    <div className="flex flex-col m-auto justify-center md:w-2/5">
      <div className="mx-5 my-5">
        <Header />
        <p className="text-xl my-6 ">Добавить карту</p>
        <hr />
        <div className="text-center text-gray-400 text-xs uppercase my-6 flex flex-col justify-center items-center">
          <p>Поместите карту вкадр</p>
          <img src={card} alt="card" className="my-14 " />
          <Link to="" className="text-blue-400 text-xs">
            ввести данные вручную
          </Link>
          <Link to="" className="text-blue-400 text-xs my-5">
            исползовать NFC
          </Link>
        </div>

        <Button prop={'Продолжить'} />
      </div>
    </div>
  );
};

export default AddCard2;
