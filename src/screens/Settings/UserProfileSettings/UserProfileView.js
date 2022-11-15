import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import userImg from '@assets/svg/user.svg';
import icon from '@assets/img/Icon.png';
import route from '@assets/svg/route.svg';
import insurance from '@assets/svg/guard.svg';
import scan from '@assets/svg/scan.svg';
import settings from '@assets/svg/nonitification.svg';
import home from '@assets/svg/home.svg';
import brief from '@assets/svg/briefcase.svg';
import Button from '@screens/Settings/components/Button';
import Header from '@screens/Settings/components/Header';
import {
  getUserInformation,
  getUserSettings,
  updateUserSettings,
} from '@services/users/users';
import { USER_INSURANCE, USER_SETTINGS } from '@navigation/CONSTANTS';

const UserProfileView = () => {
  const [userName, setUserName] = useState('');
  const [user, setUser] = useState({
    isDirty: false,
    homeAddress: '',
    workAddress: '',
  });

  const setValueAdress = (adress) => {
    setUser({ ...user, homeAddress: adress });
  };
  const setValueWorkAdress = (adress) => {
    setUser({ ...user, workAddress: adress });
  };

  const fetchUserInfo = async () => {
    const resp = await getUserSettings();
    const name = await getUserInformation();
    setUser({ ...user, ...resp.data });
    setUserName(name.data.firstName);
  };

  const setIsDirty = () => {
    setUser({ ...user, isDirty: true });
  };

  useEffect(() => {
    if (user.isDirty) {
      updateUserSettings({ ...user })
        .then((resp) => console.log('resp', resp))
        .catch((err) => console.error(err));
      setUser({ ...user, isDirty: false });
    }
  }, [user]);

  useEffect(() => {
    fetchUserInfo();
  }, []);
  return (
    <div className="flex flex-col m-auto justify-center md:w-2/5">
      <div className="mx-5 my-5">
        <Header />
        <div className="flex flex-col items-center py-8 my-6 border rounded-lg">
          <img src={userImg} alt="" className="w-20" />
          <p>{userName}</p>
          <p className="text-sm text-gray-400">{user.email}</p>
        </div>
        <div className="flex justify-between mt-6 mb-2">
          <Link to="" className="flex items-center">
            <img src={route} alt="" className="mr-2" />
            <p className="leading-3 ">Поездки</p>
          </Link>
          <button>
            <img src={icon} alt="" />
          </button>
        </div>
        <hr />
        <div className="flex justify-between mt-6 mb-2">
          <Link to={USER_INSURANCE} className="flex items-center">
            <img src={insurance} alt="" className="mr-2" />
            <p className="leading-3 ">Страховка</p>
          </Link>
          <button>
            <img src={icon} alt="" />
          </button>
        </div>
        <hr />
        <div className="flex justify-between mt-6 mb-2">
          <Link to="" className="flex items-center">
            <img src={scan} alt="" className="mr-2" />
            <p className="leading-3 flex flex-col ">
              <span className="pb-1"> Сканировать QR-код</span>

              <span className="text-xs text-gray-400 m-0">
                для получения промокода
              </span>
            </p>
          </Link>
          <button>
            <img src={icon} alt="" />
          </button>
        </div>
        <hr />
        <div className="flex justify-between mt-6 mb-2">
          <Link
            to={{
              pathname: USER_SETTINGS,
            }}
            className="flex items-center">
            <img src={settings} alt="" className="mr-2" />
            <p className="leading-3 ">Настройка</p>
          </Link>
          <button>
            <img src={icon} alt="" />
          </button>
        </div>
        <hr />
        <div className="flex justify-between mt-7 mb-2">
          <div className="flex items-center">
            <img src={home} alt="" className="mr-2" />
            <p className="flex flex-col">
              <span className="text-xs text-gray-400 m-0">Домашний адрес</span>
              <span className="pt-1">
                <input
                  onBlur={setIsDirty}
                  onChange={(e) => setValueAdress(e.target.value)}
                  type="text"
                  value={user.homeAddress}
                  className="outline-none placeholder-black"
                />
              </span>
            </p>
          </div>
        </div>
        <hr />

        <div className="flex justify-between mt-6 mb-2">
          <div className="flex items-center">
            <img src={brief} alt="" className="mr-2" />
            <p className="flex flex-col">
              <span className="text-xs text-gray-400 m-0">Рабочий адрес</span>
              <span className="pt-1">
                <input
                  onBlur={setIsDirty}
                  onChange={(e) => setValueWorkAdress(e.target.value)}
                  type="text"
                  value={user.workAddress}
                  className="outline-none placeholder-black"
                />
              </span>
            </p>
          </div>
        </div>
        <hr />

        <Button prop={'Выйти'} />
      </div>
    </div>
  );
};

export default UserProfileView;
