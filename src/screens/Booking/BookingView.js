import solarisBig from '@assets/img/solaris-big.png';
import fuel from '@assets/svg/fuel-white.svg';
import headlight from '@assets/svg/headlight.svg';
import climatization from '@assets/svg/climatization.svg';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BOOKING_INSPECTION, FILTER } from '@navigation/CONSTANTS';

const padTime = (time) => {
  return String(time).length === 1 ? `0${time}` : `${time}`;
};

const format = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${padTime(seconds)}`;
};

const BookingView = () => {
  const location = useLocation();
  const history = useHistory();
  const [car, setCar] = useState({ brand: {}, model: {} });
  const [address, setAddress] = useState({});
  const [counter, setCounter] = useState(900);

  useEffect(() => {
    if (!location.state) {
      return () => history.push(FILTER);
    }
    setCar(location.state.car);
    setAddress(location.state.address);
  }, [location.state, history]);

  useEffect(() => {
    let timer;
    if (counter > 0) {
      timer = setTimeout(() => setCounter((c) => c - 1), 1000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [counter]);

  return (
    <div className="relative">
      <div className="title-tariff mt-2 flex justify-between px-4">
        <span>
          <h3 className="uppercase text-lg leading-4">
            {car.brand.name} {car.model.name}
          </h3>
          <small className="text-gray-400">
            {address.street_type}. {address.street}, {address.house}
          </small>
        </span>
        <span
          className="
          flex
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
          text-white
        ">
          А 858 ЕУ 123
        </span>
      </div>
      <div>
        <div
          className="
          car-preview
          w-full
          flex
          justify-center
          items-center
          mt-2
          bg-gradient-to-r
          from-blue-grad-2
          to-blue-grad-1
          py-1
        ">
          <img src={solarisBig} alt="" />
        </div>
        <div className="car-info mt-1 w-full">
          <div className="container-info flex justify-between px-4">
            <div className="oil w-2/4 mr-4">
              <div className="info-title flex justify-between">
                <span
                  className="
                  flex
                  uppercase
                  text-gray-400
                  font-light
                  text-sm
                  items-center
                ">
                  <img src={fuel} alt="" className="h-5 mr-1" />
                  Топливо
                </span>
                <span className="uppercase font-light text-button-blue-color">
                  22 Л
                </span>
              </div>
              <div className="progress mt-2">
                <div className="h-2 relative max-w-xl overflow-hidden">
                  <div className="w-full h-full bg-gray-200 absolute" />
                  <div className="h-full bg-button-blue-color absolute w-1/2" />
                </div>
              </div>
            </div>
            <div className="stock w-2/4 ml-4">
              <div className="info-title flex justify-between">
                <span
                  className="
                  flex
                  uppercase
                  text-gray-400
                  font-light
                  text-sm
                  items-center
                ">
                  Запас хода
                </span>
                <span className="uppercase font-light text-button-blue-color">
                  220 км
                </span>
              </div>
              <div className="progress mt-2">
                <div className="h-2 relative max-w-xl overflow-hidden">
                  <div className="w-full h-full bg-gray-200 absolute" />
                  <div className="h-full bg-button-blue-color absolute w-1/2" />
                </div>
              </div>
            </div>
          </div>
          <div className="time-booking flex border-t mt-2 py-4  justify-between px-4">
            <div className="title">бесплатное бронирование</div>
            <div className="time text-button-blue-color">{format(counter)}</div>
          </div>
        </div>
        <div className="bg-gray-100 w-full h-full px-4 py-4">
          <div className="buttons flex">
            <button className="bg-white flex items-center rounded-xl py-2 px-4 text-gray-500 mr-2">
              <img src={headlight} alt="" className="mr-2 mt-0.5" />
              подать сигнал
            </button>
            <button className="bg-white flex items-center rounded-xl py-2 px-4 text-gray-500">
              <img src={climatization} alt="" className="mr-2 mt-0.5" />
              прогреть
            </button>
          </div>
          <div className="rules-button mt-4">
            <Link
              to="/transfer/certificate"
              className="
              	w-full
								py-2
								bg-white
								font-light
								rounded-xl
								mt-4
								text-left
								px-6
								flex
								justify-between
								items-center
							">
              Акт приема передачи
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
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
              onClick={() =>
                history.push(
                  `${BOOKING_INSPECTION.replace(
                    ':id',
                    location.state.bookingId.toString()
                  )}`
                )
              }>
              Открыть авто и подписать акт
            </button>
            <button
              className="
              	w-full
								py-4
								bg-white
								font-light
								rounded-2xl
								mt-4
							"
              onClick={() => history.push(FILTER)}>
              Отмена
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookingView;
