import { useEffect, useState } from 'react';
import arrows from '@assets/svg/arrows.svg';
import oil from '@assets/svg/oil.svg';
import child from '@assets/svg/child.svg';
import bluetooth from '@assets/svg/bluetooth.svg';
import solaris from '@assets/img/solaris.png';
import polo from '@assets/img/polo.png';
import CarPreview from '@screens/Filters/components/CarPreview';
import { useAsync } from '@hooks/useAsync';
import { getAllCars } from '@services/cars/cars';
import { ROOT } from '@navigation/CONSTANTS';
import { useHistory } from 'react-router-dom';

const FilterView = () => {
  const [isYourSelf, setIsYourSelf] = useState(2);
  const history = useHistory();

  const [geolocation] = useState([55.7519644167253, 48.75228868454745]);

  const { result, execute } = useAsync({
    asyncFunction: getAllCars,
  });

  const [cars, setCars] = useState([]);

  const carsRender = () => {
    const carsGroupByType = cars.reduce((acc, value) => {
      if (!acc[value.type.name]) {
        acc[value.type.name] = [];
      }
      acc[value.type.name].push(value);
      return acc;
    }, {});
    const type = Object.keys(carsGroupByType);

    return type.map((key) => {
      const carPreview = carsGroupByType[key]
        .filter((c) => c.info && c.bookingType === isYourSelf)
        .map((car, index) => {
          return (
            <CarPreview
              key={index * Math.random()}
              image={car.id % 2 === 0 ? solaris : polo}
              car={car}
              name={`${car.brand.name} ${car.model.name}`}
              link={`/car/${car.id}`}
              coords={car.info ? car.info.location : null}
            />
          );
        });
      return (
        <div key={key} className="filter-cars mt-8">
          <div className="title flex justify-between items-center">
            <span className="uppercase text-sm text-gray-400">{key}</span>
            <a
              href="#123"
              className="text-sm font-light text-button-blue-color">
              Выбрать все
            </a>
          </div>
          <div className="content flex h-full pt-4 w-screen overflow-x-scroll">
            {carPreview}
          </div>
        </div>
      );
    });
  };

  const changeYourSelf = () => {
    setIsYourSelf(isYourSelf === 1 ? 2 : 1);
  };

  useEffect(() => {
    execute({
      userCords: { lng: geolocation[0], lat: geolocation[1] },
      bookingType: 1,
    });
  }, []);

  useEffect(() => {
    if (result) {
      setCars(result.data);
    }
  }, [result]);

  return (
    <div className="px-4">
      <div className="filter-title flex justify-between items-center">
        <h2 className="text-xl">Фильтр</h2>
        <button
          className="bg-gray-100 rounded-full px-1 py-1"
          onClick={() => history.push(ROOT)}>
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
      <div className="filter-rules mt-6 flex justify-between items-center">
        <div className="button-group">
          <button
            className={`
						 	bg-gradient-to-r
							px-4
							py-1
							rounded-l-2xl
							hover:outline-none
							focus:outline-none
							text-white
							${isYourSelf === 2 ? 'from-blue-grad-1 to-blue-grad-2' : 'bg-gray-400'}
						`}
            onClick={changeYourSelf}>
            Для себя
          </button>
          <button
            className={`
						 	bg-gradient-to-r
							px-4
							py-1
							rounded-r-2xl
							hover:outline-none
							focus:outline-none
							text-white
							${isYourSelf === 1 ? 'from-yellow-grad-1 to-yellow-grad-2' : 'bg-gray-400'}
						`}
            onClick={changeYourSelf}>
            Для работы
          </button>
        </div>
      </div>
      <div className="filter-options mt-6 flex overflow-x-scroll w-screen">
        <button
          className="
          bg-gray-100
          py-4
          pl-8
          pr-16
          text-lg
          flex
          mr-8
          items-center
          text-button-blue-color
          whitespace-nowrap
          rounded-2xl
        ">
          <img src={arrows} alt="" className="mr-6" />
          По межгороду
        </button>
        <button
          className="
          bg-gray-100
          py-4
          pl-8
          pr-16
          text-lg
          flex
          mr-8
          items-center
          text-button-blue-color
          whitespace-nowrap
          rounded-2xl
        ">
          <img src={oil} alt="" className="mr-6" />
          Полный бак
        </button>
        <button
          className="
          bg-gray-100
          py-4
          pl-8
          pr-16
          text-lg
          flex
          mr-8
          items-center
          text-button-blue-color
          whitespace-nowrap
          rounded-2xl
        ">
          <img src={child} alt="" className="mr-6" />
          Детское кресло
        </button>
        <button
          className="
          bg-gray-100
          py-4
          pl-8
          pr-16
          text-lg
          flex
          mr-8
          items-center
          text-button-blue-color
          whitespace-nowrap
          rounded-2xl
        ">
          <img src={bluetooth} alt="" className="mr-6" />
          Bluetooth
        </button>
      </div>
      {carsRender()}
    </div>
  );
};
export default FilterView;
