import Logo from '@components/';
import carRegistration from '../../assets/img/car_registration.png';
import { useHistory } from 'react-router-dom';
import { LOGIN, REGISTRATION } from '@navigation/CONSTANTS';

const HomeView = ({ token }) => {
  const history = useHistory();
  return (
    <div className="h-screen flex flex-col m-auto justify-center md:w-2/5">
      <Logo />
      <div className="car-container flex justify-center">
        <img src={carRegistration} alt="" />
      </div>
      <div className="container-text flex justify-center">
        <h2 className="text-lg">сервис аренды</h2>
      </div>
      <div className="container-button flex flex-col justify-center mt-12 p-3">
        <button
          className="bg-button-blue-color py-3 px-10 text-white rounded order-1"
          onClick={() => history.push(LOGIN, { token })}>
          Войти
        </button>
        <button
          className="bg-button-blue-color py-3 px-10 text-white rounded mb-2 order-0"
          onClick={() => history.push(`${REGISTRATION}`, { token })}>
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
};

export default HomeView;
