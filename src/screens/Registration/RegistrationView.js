import StepContact from './components/StepContact';
import StepPhone from './components/StepPhone';
import StepCode from './components/StepCode';
import StepEmail from './components/StepEmail';
import StepDialog from './components/StepDialog';
import StepPassport from './components/StepPassport';
import StepCard from './components/StepCard';

const RegistrationView = ({ step, token }) => {
  const renderedComponent = () => {
    switch (step) {
      case 1:
        return <StepContact />;
      case 2:
        return <StepPhone token={token} />;
      case 3:
        return <StepCode />;
      case 4:
        return <StepEmail />;
      case 5:
        return <StepDialog />;
      case 6:
        return <StepPassport />;
      case 7:
        return <StepCard />;
      default:
        return <StepContact />;
    }
  };
  return renderedComponent();
};

export default RegistrationView;
