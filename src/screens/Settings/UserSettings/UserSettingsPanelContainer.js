import UserSettingsPanelView from '@screens/Settings/UserSettings/UserSettingsPanelView';
import { Helmet } from 'react-helmet';

export function UserSettingsPanelContainer() {
  return (
    <>
      <Helmet>
        <title>Настройки</title>
      </Helmet>
      <UserSettingsPanelView />
    </>
  );
}
