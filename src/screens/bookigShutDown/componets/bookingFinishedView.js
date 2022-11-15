import React from 'react';
import logo from '@assets/svg/logo.svg';

const BookingFinishedView = () => {
  return (
    <div className="flex flex-col m-auto justify-center md:w-2/5 ">
      <div className="mx-5 my-5">
        <div className="header flex justify-between items-center">
          <button className="text-button-blue-color">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h2>
            <img src={logo} className="w-10 h-10" alt="" />{' '}
          </h2>
          <button className="bg-gray-100 rounded-full py-1 px-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h3 className="uppercase p-4 text-normal">Аренда завершена</h3>
        <hr />
        <div className="flex justify-between text-left  py-5 ">
          <p className="text-gray-500">Бронь</p>
          <p className="text-left pr-16">10 мин</p>
          <p className="text-blue-500 ">0 ₽</p>
        </div>
        <div className="flex  justify-between items-start py-5 ">
          <p className="text-gray-500 pr-8">Осмотр</p>
          <p className="text-left"> 5 мин</p>
          <p className="text-blue-500  pl-28">0 ₽</p>
        </div>
        <div className="flex justify-between items-center py-5">
          <p className="text-gray-500">Поездка</p>
          <p className="text-left">16 мин 00 сек</p>
          <p className="text-blue-500 ">70.20 ₽</p>
        </div>
        <hr />
        <div className="flex justify-between items-center py-5 ">
          <p>Оплаченно:</p>
          <p className="text-blue-500">70.20</p>
        </div>
        <button className="bg-blue-500 text-white py-4 w-full rounded-xl mt-44 ">
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default BookingFinishedView;
