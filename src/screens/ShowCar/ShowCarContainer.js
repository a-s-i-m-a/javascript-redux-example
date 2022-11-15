import { Helmet } from 'react-helmet';
import ShowCarView from '@screens/ShowCar/ShowCarView';

export function ShowCarContainer() {
  return (
    <>
      <Helmet>
        <title>Показать машины</title>
      </Helmet>
      <ShowCarView />
    </>
  );
}
