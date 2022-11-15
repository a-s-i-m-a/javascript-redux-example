import PhonePanelView from '@screens/Settings/PhoneNumberSettings/PhonePanelView';
import { Helmet } from 'react-helmet';

export function NumberSettingContainer() {
  return (
    <>
      <Helmet>
        <title>Изменение номера телефона</title>
      </Helmet>
      <PhonePanelView />
    </>
  );
}
