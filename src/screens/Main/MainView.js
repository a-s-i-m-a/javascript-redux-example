import { Map, Placemark, YMaps } from 'react-yandex-maps';
import { useCallback, useEffect, useRef, useState } from 'react';
import pin from '@assets/svg/userMapIcon.svg';
import union from '@assets/svg/union.svg';
import burger from '@assets/svg/burger.svg';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FILTER, SETTINGS, SUPPORT } from '@navigation/CONSTANTS';
import { useAsync } from '@hooks/useAsync';
import { getAllCars } from '@services/cars/cars';
import CarPlacemark from '@screens/Main/components/CarPlacemark';

const MainView = ({ children }) => {
  const history = useHistory();
  const map = useRef(null);

  const { result, execute } = useAsync({
    asyncFunction: getAllCars,
  });

  const [geolocation, setGeolocation] = useState([
    55.7519644167253, 48.75228868454745,
  ]);

  const [ymaps, setYmaps] = useState(null);
  const [cars, setCars] = useState([]);

  const [isResize, setIsResize] = useState(false);
  const [height, setHeight] = useState('h-1/4');
  const location = useLocation();

  useEffect(() => {
    execute({ userCords: { lng: geolocation[0], lat: geolocation[1] } });
  }, [geolocation]);

  useEffect(() => {
    if (result) {
      setCars(result.data);
    }
  }, [result]);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        //setGeolocation([position.coords.latitude, position.coords.longitude]);
        setGeolocation([55.7519644167253, 48.75228868454745]);
      });
    } else {
      console.log('Not Available');
    }
  }, []);

  const rendererCarMaps = cars.map((car) => {
    if (car.info) {
      return (
        <CarPlacemark
          key={car.id}
          coordinates={[car.info.location.lat, car.info.location.lng]}
          bookingType={car.bookingType}
          goToCar={() => history.push(`/car/${car.id}`, { car })}
        />
      );
    }
    return null;
  });

  const addRoute = useCallback(
    (coords) => {
      const pointCar = [coords.lat, coords.lng];
      if (!ymaps) {
        history.push(FILTER);
      }
      const multiRoute = new ymaps.multiRouter.MultiRoute(
        {
          referencePoints: [[55.7519644167253, 48.75228868454745], pointCar],
          params: {
            routingMode: 'pedestrian',
          },
        },
        {
          wayPointStart: false,
          boundsAutoApply: true,
        }
      );
      map.current.geoObjects.add(multiRoute);
    },
    [history, ymaps]
  );

  useEffect(() => {
    if (location.state) {
      setHeight(location.state.height);
      if (location.state.coords) {
        addRoute(location.state.coords);
      }
    }
  }, [addRoute, location]);

  const resizeBlock = (e) => {
    setIsResize(!isResize);
  };

  const createYmaps = (ymap) => {
    setYmaps(ymap);
  };

  return (
    <div
      className="
      container
      lg:w-1/3
      lg:mx-auto
      w-full
      h-screen
      relative
      overflow-hidden
    ">
      <YMaps query={{ apikey: '8b8cc230-9194-47ac-91b0-32d395e54bf0' }}>
        <Map
          width="100%"
          height="82%"
          defaultState={{
            center: [55.7519644167253, 48.75228868454745],
            zoom: 15,
          }}
          state={{ center: [55.7519644167253, 48.75228868454745], zoom: 15 }}
          instanceRef={map}
          modules={['multiRouter.MultiRoute']}
          onLoad={createYmaps}>
          <Placemark
            geometry={[55.7519644167253, 48.75228868454745]}
            options={{
              iconLayout: 'default#image',
              iconImageHref: pin,
              iconContentSize: [100, 100],
              iconContentOffset: [10, 10],
              balloonCloseButton: true,
              hideIconOnBalloonOpen: false,
            }}
          />
          {rendererCarMaps}
        </Map>
      </YMaps>
      <div className="map-buttons w-full absolute top-5">
        <Link
          to={SUPPORT}
          className="absolute left-5 bg-white px-3 py-3 shadow-3xl rounded-xl">
          <img src={union} className="mx-auto" alt="" />
        </Link>
        <Link
          to={SETTINGS}
          className="absolute right-5 bg-white px-3 py-3 shadow-3xl rounded-xl">
          <img src={burger} className="mx-auto" alt="" />
        </Link>
      </div>
      <div
        className={`
        menu-control
        absolute
        bottom-0
        w-full
        bg-white
        rounded-t-3xl
        shadow-2xl
        py-4
        z-10
        transition-all
        ${isResize ? 'h-on-full' : height}
      `}>
        <button
          className="
						div-rules
						w-1/4
						h-1.5
						bg-gray-400
						mx-auto
						absolute
						-top-3
						z-10
						inset-x-1
						rounded-full
    			"
          onClick={resizeBlock}
        />
        {children}
      </div>
    </div>
  );
};

export default MainView;
