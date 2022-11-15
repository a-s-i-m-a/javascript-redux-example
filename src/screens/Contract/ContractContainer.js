import { Helmet } from 'react-helmet';
import ContractView from '@screens/Contract/ContractView';

export function ContractContainer() {
  return (
    <>
      <Helmet>
        <title>Договор</title>
      </Helmet>
      <ContractView />
    </>
  );
}
