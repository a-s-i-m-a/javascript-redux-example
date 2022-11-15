import { Helmet } from 'react-helmet';

import RadarView from '@screens/Radar/RadarView';

export function RadarContainer() {
  return (
    <>
      <Helmet>
        <title>Радар</title>
      </Helmet>
      <RadarView />
    </>
  );
}
