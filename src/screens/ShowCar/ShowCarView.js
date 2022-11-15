import { Link, useHistory, useLocation } from 'react-router-dom';
import solarisBig from '@assets/img/solaris-big.png';
import taxiBig from '@assets/img/taxiBig.png';
import fuel from '@assets/svg/fuel-white.svg';
import { useEffect, useState } from 'react';
import { BOOKING, FILTER } from '@navigation/CONSTANTS';
import { toast } from 'react-hot-toast';
// import { carBooking } from '@services/booking/booking';
import { getAddress } from '@utils/getAddress';
import { Tariff } from '@screens/ShowCar/components/Tariff';
import { Modal } from '@components/Modal';
import { carBooking } from '@services/booking/booking';

const ShowCarView = () => {
  const location = useLocation();
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedTariff, setSelectedTariff] = useState({
    pricePeriod: null,
    isSelected: false,
    index: 0,
  });
  const [car, setCar] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    if (!location.state) {
      history.push(FILTER);
    }
    if (location.state) {
      console.log(location.state);
      setCar(location.state.car);
      const { lat, lng } = location.state.car.info.location;
      getAddress({
        lat,
        lon: lng,
      }).then((res) => {
        setAddress(res.suggestions[0].data);
      });
    }
    console.log(address);
  }, [location]);

  useEffect(() => {
    console.log(selectedTariff);
    console.log(address);
  }, [selectedTariff]);

  const bookingCar = () => {
    if (!selectedTariff) {
      toast('Пожалуйста выберите тариф');
      return;
    }
    setIsOpen(true);
    console.log(selectedTariff);
    console.log(address);
  };

  const booking = async () => {
    try {
      const { data } = await carBooking({
        carId: car.id,
        tariffId: selectedTariff.tariffId,
        timeRent: selectedTariff.pricePeriod,
        agreement: true,
      });
      history.push(BOOKING, { bookingId: data.id, car, address });
    } catch (err) {
      toast.error('Автомобиль уже забронирован.');
    }
  };
  return (
    <>
      <div className="relative">
        <div className="title-tariff mt-2 flex justify-between px-4">
          <span>
            {car ? (
              <h3 className="uppercase text-lg leading-4">
                {car.brand.name} {car.model.name}
              </h3>
            ) : null}
            {address ? (
              <small className="text-gray-400">
                {address.street_type}. {address.street}, {address.house}
              </small>
            ) : null}
          </span>
          {car ? (
            <span
              className={`
								flex
								justify-center
								items-center
								number-car
								bg-gradient-to-r
								${
                  car.bookingType === 1
                    ? 'from-yellow-grad-1 to-yellow-grad-2'
                    : 'from-blue-grad-2 to-blue-grad-1'
                }
                h-7
								px-3
								rounded
								font-light
								text-white
        		`}>
              А 858 ЕУ 123
            </span>
          ) : null}
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
            {car ? (
              <img
                src={car.bookingType === 1 ? taxiBig : solarisBig}
                alt=""
                className={`${car.bookingType === 1 ? 'w-2/5' : null}`}
              />
            ) : null}
          </div>
          <div className="car-info mt-1 w-full border-b pb-2">
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
          </div>
          <div className="small-tariff px-4">
            <div className="tariff-car-title mt-2 flex justify-start items-center">
              <span className="uppercase text-sm text-gray-400">Тариф</span>
            </div>
            <div className="tariff-cars w-screen">
              <div className="content flex mt-2 w-screen overflow-x-scroll">
                {car
                  ? car.tariff.prices.map((p, index) => {
                      return (
                        <Tariff
                          key={index}
                          selected={selectedTariff}
                          id={car.tariff.id}
                          index={index}
                          period={p.period}
                          price={p.price}
                          selectTariff={setSelectedTariff}
                        />
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
          {/*<div*/}
          {/*  className="full-tariff overflow-y-scroll px-4"*/}
          {/*  style={{ height: '335px' }}>*/}
          {/*  <div className="tariff-car-title mt-2 flex justify-start items-center">*/}
          {/*    <span className="uppercase text-sm text-gray-400">На борту</span>*/}
          {/*  </div>*/}
          {/*  <div className="info">*/}
          {/*    <span className="flex items-center my-2 text-gray-400 text-sm">*/}
          {/*      <img src={videoReg} alt="" className="mr-2 h-4" />*/}
          {/*      Видео регистратор*/}
          {/*    </span>*/}
          {/*    <span className="flex items-center my-2 text-gray-400 text-sm">*/}
          {/*      <img src={auto} alt="" className="mr-2 h-4" />*/}
          {/*      Автозапуск с охлаждением*/}
          {/*    </span>*/}
          {/*    <span className="flex items-center my-2 text-gray-400 text-sm">*/}
          {/*      <img src={computer} alt="" className="mr-2 h-4" />*/}
          {/*      Бортовой компьютер*/}
          {/*    </span>*/}
          {/*    <span className="flex items-center my-2 text-gray-400 text-sm">*/}
          {/*      <img src={bluetooth} alt="" className="mr-3 h-4" />*/}
          {/*      Bluetooth подключение*/}
          {/*    </span>*/}
          {/*  </div>*/}
          {/*  <div className="tariff-car-title mt-2 flex justify-start items-center">*/}
          {/*    <span className="uppercase text-sm text-gray-400">Тариф</span>*/}
          {/*  </div>*/}
          {/*  <div className="content flex relative h-52 mt-4">{tariffsRender}</div>*/}
          {/*</div>*/}
          <div className="to-book absolute w-full px-4 mt-4 fixed bottom-3 z-50 bottom-0 ">
            <button
              className="
								bg-button-blue-color
								w-full
								py-4
								text-white
								font-light
								text-md
								rounded-2xl
								disabled:opacity-95
          		"
              onClick={bookingCar}>
              Забронировать
            </button>
          </div>
        </div>
      </div>
      <Modal state={isOpen}>
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
								uppercase
							">
            договор аренды авто
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
            onClick={() => booking()}>
            Ознакомлен, бронировать
          </button>
          <button
            className="
              	w-full
								py-4
								text-white
								bg-gray-500
								font-light
								rounded-2xl
								mt-4
							"
            onClick={() => setIsOpen(false)}>
            назад
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ShowCarView;
