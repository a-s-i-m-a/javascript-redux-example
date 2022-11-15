import SupportView from '@screens/Support/SupportView';
import { Helmet } from 'react-helmet';

export function SupportContainer() {
  return (
    <>
      <Helmet>
        <title>Поддержка</title>
      </Helmet>
      <SupportView />
    </>
  );
}
