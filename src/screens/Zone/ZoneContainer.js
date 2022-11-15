import { Helmet } from 'react-helmet';
import ZoneView from '@screens/Zone/ZoneView';

export function ZoneContainer() {
  return (
    <>
      <Helmet>
        <title>Зоны</title>
      </Helmet>
      <ZoneView />
    </>
  );
}
