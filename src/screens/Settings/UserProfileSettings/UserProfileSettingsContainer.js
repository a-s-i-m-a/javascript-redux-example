import { Helmet } from 'react-helmet';
import UserProfileView from '@screens/Settings/UserProfileSettings/UserProfileView';

export function UserProfileSettingsContainer() {
  return (
    <>
      <Helmet>
        <title>Настроек пользователя</title>
      </Helmet>
      <UserProfileView />
    </>
  );
}
