import InsurancePanelView from '@screens/Settings/InsuranceSettings/InsurancePanelView';
import { Helmet } from 'react-helmet';

export function InsuranceSettingsContainer() {
  return (
    <>
      <Helmet>
        <title>Страховка</title>
      </Helmet>
      <InsurancePanelView />
    </>
  );
}
