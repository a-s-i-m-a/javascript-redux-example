import BookingInspectionView from '@screens/BookingInspetion/BookkingInspectionView';
import logo from '@assets/svg/logo.svg';
import { useHistory } from 'react-router-dom';
import { ROOT } from '@navigation/CONSTANTS';

export function BookingInspectionContainer() {
  const history = useHistory();
  return (
    <div className="mx-5 my-5">
      <div className="header flex justify-between items-center">
        <button
          className="text-button-blue-color"
          onClick={() => history.goBack()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h2>
          <img src={logo} className="w-10 h-10" alt="" />{' '}
        </h2>
        <button
          className="bg-gray-100 rounded-full py-1 px-1"
          onClick={() => history.push(ROOT)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="container-step h-screen">
        <BookingInspectionView />
      </div>
    </div>
  );
}
