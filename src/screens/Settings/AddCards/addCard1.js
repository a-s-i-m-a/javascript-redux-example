import React from 'react';
import Header from '@screens/Settings/components/Header';
import load from '@assets/svg/load.svg';
import Button from '@screens/Settings/components/Button';

const AddCard1 = () => {
  return (
    <div className="flex flex-col m-auto justify-center md:w-2/5">
      <div className="mx-5 my-5">
        <Header />
        <p className="text-xl my-6 ">Добавить карту</p>
        <hr />
        <div className="text-center text-gray-400 text-xs uppercase my-4 flex flex-col justify-center items-center">
          <p>Приложите карту к устройству</p>
          <img src={load} alt="load" className="my-14 w-24" />
        </div>
        <Button prop={'Продолжить'} />
      </div>
    </div>
  );
};

export default AddCard1;
