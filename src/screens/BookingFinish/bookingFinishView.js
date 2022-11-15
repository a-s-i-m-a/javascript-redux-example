import React, { useEffect, useState } from 'react';
import car from '@assets/img/solaris-big.png';
import taxi from '@assets/img/taxiBig.png';
import logo from '@assets/svg/logo.svg';
import fuel from '@assets/svg/fuel-white.svg';
import { Modal } from '@components/Modal';
import { useHistory, useParams } from 'react-router-dom';
import { useAsync } from '@hooks/useAsync';
import {
  carBookingComplete,
  carBookingInformation,
  carBookingPause,
} from '@services/booking/booking';
import { appLocalStorage } from '@utils/storage';
import { BOOKING_FINISHED } from '@navigation/CONSTANTS';

const padTime = (time) => {
  return String(time).length === 1 ? `0${time}` : `${time}`;
};

const format = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${padTime(seconds)}`;
};

const BookingFinishView = () => {
  const { id } = useParams();
  const { result, execute } = useAsync({
    asyncFunction: carBookingInformation,
  });
  const history = useHistory();

  const [isOpen, setIsOpen] = useState();
  const [counter, setCounter] = useState(0);
  const [counterPause, setCounterPause] = useState(0);

  const [booking, setBooking] = useState(null);

  const pauseRent = () => {
    setIsOpen(true);
    carBookingPause(id);
  };

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      if (isOpen) {
        setCounterPause((c) => c + 1);
      }
    }, 1000);
    if (!isOpen) {
      setCounterPause(0);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isOpen, counterPause]);

  const proceedRent = () => {
    setIsOpen(false);
    carBookingPause(id, { pause: false });
  };

  const completeRent = async () => {
    await carBookingComplete(id);
    await carBookingPause(id, { pause: false });
    history.push(BOOKING_FINISHED.replace(':id', id.toString()));
  };

  useEffect(() => {
    execute(id);
  }, [id]);

  useEffect(() => {
    if (result) {
      setBooking(result.data);
    }
  }, [result]);

  useEffect(() => {
    let timer;
    timer = setTimeout(() => setCounter((c) => c + 1), 1000);
    appLocalStorage.setItem('time', counter);
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [counter]);

  return (
    <div className="flex flex-col m-auto justify-center md:w-2/5 ">
      <div className="mx-5 my-5">
        <div className="header flex justify-center items-center text-center">
          <h2>
            <img src={logo} className="w-10 h-10" alt="" />{' '}
            <div className="w-15 text-gray-200 bg-gray-200 h-1 rounded">.</div>
          </h2>
        </div>

        <div className="flex justify-between items-center py-4">
          <h3 className="text-normal">
            {booking
              ? `${booking.car.brand.name} ${booking.car.model.name}`
              : null}
          </h3>
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
        <div className="text-center py-2 my-2 text-8xl text-gray-800 border-b">
          <h1>{format(counter)}</h1>
        </div>

        <div className="flex justify-between py-1">
          <p>
            <span>Аренда</span>
            <span className="ml-1 text-blue-500">
              {booking ? booking.tariff.prices[0].price : null}₽ / мин
            </span>
          </p>
          <p>
            <span>Тарифы</span>
            <span className="text-blue-500">
              {booking ? booking.timeRent : null}
            </span>
          </p>
        </div>
      </div>
      <div className="bg-gray-200 flex justify-center py-12">
        <img
          src={booking ? (booking.bookingType === 1 ? taxi : car) : null}
          alt="car"
          className="w-26"
        />
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
      <div className="mx-5">
        <button
          className="bg-blue-500 text-white py-4 w-full rounded-xl mt-10 mb-5 "
          onClick={() => pauseRent()}>
          Приостановить
        </button>
      </div>
      <button
        onClick={() => proceedRent()}
        className={`text-transparent bg-black h-screen w-full opacity-50 absolute top-0 ${
          isOpen ? 'block' : 'hidden'
        }`}>
        .
      </button>
      <div className="absolute -bottom-20 w-full">
        <Modal state={isOpen}>
          <div className="rules-button mt-4 ">
            <p>Пауза {format(counterPause)}</p>
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
              onClick={() => proceedRent()}>
              Продолжить аренду
            </button>
            <button
              className="
              	w-full
								py-4
								text-white
								bg-red-500
								font-light
								rounded-2xl
								mt-4
							"
              onClick={completeRent}>
              Завершить аренду
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default BookingFinishView;
