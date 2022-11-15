import { useQuery } from '@utils/useQuery';
import { useLocation } from 'react-router-dom';
import LoginForm from '@screens/Login/components/LoginForm';
import ConfirmCodeForm from '@screens/Login/components/ConfirmCodeForm';

const LoginView = () => {
  const query = useQuery(useLocation().search);
  const type = query.get('type') || 'phone';
  const renderComponent = () => {
    switch (type) {
      case 'phone':
        return <LoginForm />;
      case 'confirm':
        return <ConfirmCodeForm />;
      default:
        return <LoginForm />;
    }
  };
  return renderComponent();
};
export default LoginView;
