import SettingsPanelView from '@screens/Settings/Settings/SettingsPanelView';
import { Helmet } from 'react-helmet';

export function SettingsPanelContainer() {
  return (
    <>
      <Helmet>
        <title>Настройки</title>
      </Helmet>
      <SettingsPanelView />
    </>
  );
}
