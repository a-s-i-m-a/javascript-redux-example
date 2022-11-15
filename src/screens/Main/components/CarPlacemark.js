import carMapBookingWork from '@assets/svg/carMapWork.svg';
import carMapBookingUser from '@assets/svg/carMapIcon.svg';
import { Placemark } from 'react-yandex-maps';

const CarPlacemark = ({ coordinates, bookingType, goToCar }) => {
  return (
    <Placemark
      geometry={coordinates}
      options={{
        iconLayout: 'default#image',
        iconImageHref:
          bookingType === 1 ? carMapBookingWork : carMapBookingUser,
        iconContentSize: [1, 1],
        iconContentOffset: [10, 10],
        balloonCloseButton: true,
        hideIconOnBalloonOpen: false,
      }}
      onClick={goToCar}
    />
  );
};

export default CarPlacemark;
