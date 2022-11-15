import React, { useEffect, useState } from 'react';
import Header from '@screens/Settings/components/Header';
import { Link } from 'react-router-dom';
import question from '@assets/svg/in-qust.svg';
import Toggle from '@screens/Settings/components/Toggle';
import { getUserSettings, updateUserSettings } from '@services/users/users';

const InsurancePanelView = () => {
  const [user, setUser] = useState({ isDirty: false });

  const setValueToggle = (insurance) => {
    setUser({ ...user, ...insurance, isDirty: true });
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
    <div className="flex flex-col m-auto justify-center md:w-2/5">
      <div className="mx-5 my-5">
        <Header />
        <p className="text-xl my-6 ">Страховка</p>
        <div className="flex justify-between items-center">
          <Link to="/insurance" className="flex items-center">
            <p className="leading-3">Страховка</p>
            <img src={question} alt="" className="ml-2" />
          </Link>
          <p className="text-gray-400 text-xs">БАЗОВАЯ</p>
        </div>
        <div className="flex justify-between items-center my-6">
          <div className="flex items-center">
            <p className="leading-3">Расширенная страховка</p>
            <img src={question} alt="" className="ml-2" />
          </div>
          <Toggle
            value={user.isExtendedInsurance}
            name="isExtendedInsurance"
            setValue={setValueToggle}
          />
        </div>
      </div>
    </div>
  );
};

export default InsurancePanelView;
