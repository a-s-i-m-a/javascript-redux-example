import React, { useEffect, useState } from 'react';
import card from '@assets/svg/card.svg';
import icon from '@assets/img/Icon.png';
import { Link } from 'react-router-dom';
import Header from '@screens/Settings/components/Header';
import Toggle from '@screens/Settings/components/Toggle';
import { getUserSettings, updateUserSettings } from '@services/users/users';
import {
  USER_SETTINGS_EMAIL,
  USER_SETTINGS_NUMBER,
} from '@navigation/CONSTANTS';
//

const UserSettingsPanelView = () => {
  const [user, setUser] = useState({ isDirty: false });

  const setValueToggle = (notification) => {
    setUser({ ...user, ...notification, isDirty: true });
  };

  const fetchUserInfo = async () => {
    const resp = await getUserSettings();
    setUser({ ...resp.data, ...user });
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  useEffect(() => {
    console.log(user);
    if (user.isDirty) {
      updateUserSettings({ ...user })
        .then((resp) => console.log('resp', resp))
        .catch((err) => console.error(err));
      setUser({ ...user, isDirty: false });
    }
  }, [user]);

  return (
    <div className=" flex flex-col m-auto justify-center md:w-2/5">
      <div className="mx-5 my-5">
        <Header />
        <p className="text-xl mt-4 mb-4 ">Настройка</p>
        <div className="flex justify-between mt-6 mb-6">
          <Link
            to={{
              pathname: USER_SETTINGS_NUMBER,
              state: { phone: user.phone },
            }}
            className="flex items-center">
            <p className="leading-3 flex  flex-col">
              <span className="mb-1"> {user.phone}</span>
              <span className="text-xs text-gray-400 m-0">номер телефона</span>
            </p>
          </Link>
          <button>
            <img src={icon} alt="" />
          </button>
        </div>
        <div className="flex justify-between mt-6 mb-6">
          <Link
            to={{
              pathname: USER_SETTINGS_EMAIL,
              state: { email: user.email },
            }}
            className="flex items-center">
            <p className="leading-3 flex  flex-col ">
              <span className="mb-1"> {user.email}</span>
              <span className="text-xs text-gray-400 m-0">номер телефона</span>
            </p>
          </Link>
          <button>
            <img src={icon} alt="" />
          </button>
        </div>
        <div className="flex justify-between mt-6 mb-6">
          <Link to="card-settings" className="flex items-center">
            <img src={card} alt="card" />
            <p className="leading-3 ">...0000</p>
          </Link>
          <button>
            <img src={icon} alt="" />
          </button>
        </div>
        <div className="flex justify-between mt-6 mb-6">
          <button className="flex items-center">
            <p className="leading-3 ">Уведомления</p>
          </button>
          <Toggle
            value={user.isNotification}
            name="isNotification"
            setValue={setValueToggle}
          />
        </div>
        <div className="flex justify-between mt-6 mb-6">
          <button className="flex items-center">
            <p className="leading-3 ">Сохранять фото осмотров</p>
          </button>
          <Toggle
            value={user.isSavePhotoInspect}
            name="isSavePhotoInspect"
            setValue={setValueToggle}
          />
        </div>
        <div className="flex justify-between mt-6 mb-6">
          <div className="flex items-center">
            <p className="leading-3 ">Применить темную тему</p>
          </div>
          <Toggle value={false} />
        </div>
      </div>
    </div>
  );
};

export default UserSettingsPanelView;
