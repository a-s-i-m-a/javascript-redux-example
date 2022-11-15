import BookingShutDown from '@screens/bookigShutDown/BookingShutDownView';
import { Helmet } from 'react-helmet';

export function BookingShutDownContainer() {
  return (
    <>
      <Helmet>
        <title>завершение поездки</title>
      </Helmet>
      <BookingShutDown />
    </>
  );
}
