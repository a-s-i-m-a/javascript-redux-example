import React, { useState } from 'react';
import car from '@assets/img/solaris-big.png';
import logo from '@assets/svg/logo.svg';
import fuel from '@assets/svg/fuel.svg';
import { Modal } from '@components/Modal';
import AnimationContainer from '@screens/Animation';

const BookingFinishView = ({ toFinish, setAnimation }) => {
  const [isOpen, setIsOpen] = useState();
  const animation = () => {
    setAnimation(true);
    toFinish(true);
    return <AnimationContainer />;
  };

  return (
    <div className="flex flex-col m-auto justify-center md:w-2/5 ">
      <div className="mx-5 my-5">
        <div className="header flex justify-center items-center text-center">
          <h2>
            <img src={logo} className="w-10 h-10" alt="" />{' '}
            <div className="w-15 text-gray-200 bg-gray-200 h-1 rounded">.</div>
          </h2>
        </div>

        <div className="flex justify-between items-center pt-2">
          <h3 className="text-normal">HYUNDAI SOLARIS</h3>
          <div
            className=" flex
          justify-center
          items-center
          number-car
          bg-gradient-to-r
          from-blue-grad-2
          to-blue-grad-1
          h-7
          px-3
          rounded
          font-light
          text-white">
            А 858 ЕУ 123
          </div>
        </div>
        <div className="text-center py-1 my-10 text-8xl text-gray-800 border-b">
          <h1>16:00</h1>
        </div>

        <div className="flex justify-between py-1">
          <p>
            <span>Аренда</span>
            <span className="text-blue-500"> 10₽ / мин </span>
          </p>
          <p>
            <span>Тарифы</span>
            <span className="text-blue-500"> минуты </span>
          </p>
        </div>
      </div>
      <div className="bg-gray-200 flex justify-center py-8">
        <img src={car} alt="car" className="w-26" />
      </div>
      <div className="mx-5 my-2 flex justify-between">
        <div>
          <p className="flex justify-between items-center ">
            <span className="flex">
              <img src={fuel} alt="" className="mr-1" />
              <span className="uppercase text-gray-400">Топливо</span>
            </span>
            <span className="text-blue-500 mx-2"> 21 Л</span>
          </p>
          <div className="h-2 relative max-w-xl overflow-hidden">
            <div className="w-full h-full bg-gray-200 absolute" />
            <div className="h-full bg-button-blue-color absolute w-1/2" />
          </div>
        </div>
        <div>
          <p className="flex justify-between items-center ">
            <span className="uppercase text-gray-400">Запас хода</span>
            <span className="text-blue-500 mx-2"> 220км</span>
          </p>
          <div className="h-2 relative max-w-xl overflow-hidden">
            <div className="w-full h-full bg-gray-200 absolute" />
            <div className="h-full bg-button-blue-color absolute w-1/2" />
          </div>
        </div>
      </div>
      <div className="mx-5 my-5">
        <button
          className="bg-blue-500 text-white py-4 w-full rounded-xl   "
          onClick={() => setIsOpen(true)}>
          Приостановить
        </button>
      </div>
      <button
        onClick={() => setIsOpen(false)}
        className={` text-transparent bg-black h-screen w-full l-0 left-0 bottom-0 opacity-50 absolute top-0 ${
          isOpen ? 'block' : 'hidden'
        }`}>
        .
      </button>
      <div className="absolute bottom-0 w-full left-0 ">
        <Modal state={isOpen}>
          <div className="rules-button mt-4 ">
            <button
              className="bg-button-blue-color
								w-full
								py-4
								text-white
								font-light
								text-md
								rounded-2xl
								mt-4
							"
              onClick={() => setIsOpen(false)}>
              Продолжить аренду
            </button>
            <button
              onClick={() => animation()}
              className="
              	w-full
								py-4
								text-white
								bg-red-500
								font-light
								rounded-2xl
								mt-4
							">
              Завершить аренду
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default BookingFinishView;
