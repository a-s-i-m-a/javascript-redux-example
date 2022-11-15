import React, { useEffect, useState } from 'react';
import Header from '@screens/Settings/components/Header';
import Input from 'react-phone-number-input/input';
import { updateUserSettings } from '@services/users/users';
import { useHistory, useLocation } from 'react-router-dom';
import { USER_SETTINGS } from '@navigation/CONSTANTS';
import { isValidPhoneNumber } from 'react-phone-number-input';

const PhonePanelView = () => {
  const location = useLocation();
  const history = useHistory();

  const [phone, setPhone] = useState({ isDirty: false, value: '' });
  const [isValidPhone, setValidPhone] = useState(true);

  const setValueNumber = (value) => {
    if (!value) {
      return;
    }
    if (value.length > 12) {
      setPhone({ ...phone, value: value.slice(0, 12) });
    }
    if (!isValidPhoneNumber(value)) {
      setValidPhone(false);
      return;
    }
    setValidPhone(true);
    setPhone({ ...phone, value });
  };

  const setIsDirty = () => {
    if (!isValidPhone) {
      return;
    }
    setPhone({ ...phone, isDirty: true });
  };

  useEffect(() => {
    if (phone.isDirty) {
      updateUserSettings({ phone: phone.value })
        .then((resp) => console.log('resp', resp))
        .catch((err) => console.error(err));
      setPhone({ ...phone, isDirty: false });
    }
  }, [phone]);

  useEffect(() => {
    if (!location.state) {
      history.push({ pathname: USER_SETTINGS });
      return;
    }
    setPhone({ ...phone, value: location.state.phone });
  }, []);

  return (
    <div className="flex flex-col m-auto justify-center md:w-2/5">
      <div className="mx-5 my-5">
        <Header />
        <p className="text-xl mt-6">Номер телефона</p>
        <div className=" mt-40 flex flex-col justify-center items-center">
          <div className="w-1/2">
            <Input
              value={phone.value}
              onChange={setValueNumber}
              onBlur={setIsDirty}
              className={`
								text-center
								border-b-2
								${isValidPhone ? 'border-button-gray-color' : 'border-red-500'}
								outline-none
								w-full
								text-sm
								px-2
								py-2
							`}
            />
          </div>
          <br />
          <p className="text-blue-400 text-xs">Подтвержденный номер</p>
        </div>
      </div>
    </div>
  );
};

export default PhonePanelView;
