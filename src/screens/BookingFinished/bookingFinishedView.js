import React, { useEffect, useState } from 'react';
import logo from '@assets/svg/logo.svg';
import AnimationView from '@screens/Animation/AnimationView';
import { useHistory, useParams } from 'react-router-dom';
import { FILTER } from '@navigation/CONSTANTS';
import { carBookingCheckout } from '@services/booking/booking';
import { useAsync } from '@hooks/useAsync';
const BookingFinishedView = () => {
  const history = useHistory();
  const { id } = useParams();
  const { result, execute } = useAsync({
    asyncFunction: carBookingCheckout,
  });
  const [animate, setAnimate] = useState(true);
  const [checkOut, setCheckOut] = useState(null);

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      setAnimate(false);
    }, 2000);
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [animate]);

  useEffect(() => {
    execute(id);
  }, []);

  useEffect(() => {
    if (result) {
      setCheckOut(result.data);
    }
  }, [result]);
  return (
    <>
      {animate ? <AnimationView /> : null}
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
              <img src={logo} className="w-10 h-10" alt="" />
            </h2>
            <button
              className="bg-gray-100 rounded-full py-1 px-1"
              onClick={() => history.push(FILTER)}>
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
          <h3 className="uppercase pl-4 py-2 text-normal">Аренда завершена</h3>
          <hr />
          <table className="w-full mt-2">
            <tbody>
              <tr>
                <td>
                  <p className="text-gray-500">Бронь</p>
                </td>
                <td className="text-center">
                  <p>{checkOut ? checkOut.timeBooking : 0}</p>
                </td>
                <td className="text-right">
                  <p className="text-blue-500 ">
                    {checkOut ? checkOut.sumBooking : 0} ₽
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-gray-500">Осмотр</p>
                </td>
                <td className="text-center">
                  <p>{checkOut ? checkOut.timeInspection : 0}</p>
                </td>
                <td className="text-right">
                  <p className="text-blue-500 ">
                    {checkOut ? checkOut.sumInspection : 0} ₽
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-gray-500">Поездка</p>
                </td>
                <td className="text-center">
                  <p>{checkOut ? checkOut.timeTrip : 0}</p>
                </td>
                <td className="text-right">
                  <p className="text-blue-500 ">
                    {checkOut ? checkOut.sumTrip : 0} ₽
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <hr />
          <div className="flex justify-between items-center py-2 ">
            <p>Оплаченно:</p>
            <p className="text-blue-500">{checkOut ? checkOut.sumPaid : 0} ₽</p>
          </div>
          <button
            className="bg-blue-500 text-white py-4 w-full rounded-xl mt-64 mb-5"
            onClick={() => history.push(FILTER)}>
            Закрыть
          </button>
        </div>
      </div>
    </>
  );
};

export default BookingFinishedView;
