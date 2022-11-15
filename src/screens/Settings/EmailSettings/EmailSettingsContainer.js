import EmailPanelView from '@screens/Settings/EmailSettings/EmailPanelView';
import { Helmet } from 'react-helmet';

export function EmailSettingsContainer() {
  return (
    <>
      <Helmet>
        <title>Изменение email</title>
      </Helmet>
      <EmailPanelView />
    </>
  );
}
