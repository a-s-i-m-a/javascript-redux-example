import radar from '@assets/svg/radar.svg';
import settings from '@assets/svg/settings.svg';
import zone from '@assets/svg/zone.svg';
import { Link, useHistory } from 'react-router-dom';
import { FILTER, RADAR, ZONE } from '@navigation/CONSTANTS';

const SearchPanelView = () => {
  const history = useHistory();

  const goToFilter = () => {
    history.push(FILTER, { height: 'h-2/4' });
  };

  return (
    <div className="px-4">
      <div className="search-box relative z-30">
        <input
          type="text"
          className="w-full bg-gray-200 p-2 pl-9 rounded-full outline-none z-10"
          placeholder="Маршрут"
        />
        <div className="absolute inset-y-2.5 left-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 fill-current"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="absolute right-4 inset-y-2.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 fill-current"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="buttons flex justify-between pt-6 px-8 text-button-blue-color">
        <Link to={RADAR} type="button" className="text-center">
          <img src={radar} className="mx-auto" alt="" />
          Радар
        </Link>
        <button onClick={goToFilter}>
          <img src={settings} className="mx-auto" alt="" />
          Фильтр
        </button>
        <Link to={ZONE} type="button">
          <img src={zone} className="mx-auto" alt="" />
          Зоны
        </Link>
      </div>
    </div>
  );
};
export default SearchPanelView;
