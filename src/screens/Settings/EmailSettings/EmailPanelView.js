import React, { useEffect, useState } from 'react';
import Header from '@screens/Settings/components/Header';
import { updateUserSettings } from '@services/users/users';
import { validate } from 'react-email-validator';
import { useHistory, useLocation } from 'react-router-dom';
import { USER_SETTINGS } from '@navigation/CONSTANTS';

const EmailPanelView = () => {
  const location = useLocation();
  const history = useHistory();

  const [email, setEmail] = useState({ isDirty: false, value: '' });
  const [isValidEmail, setValidEmail] = useState(true);

  const setValueNumber = (value) => {
    if (!value) {
      return;
    }
    if (!validate(value)) {
      setValidEmail(false);
      return;
    }
    setValidEmail(true);
    setEmail({ ...email, value });
  };

  const setIsDirty = () => {
    if (!isValidEmail) {
      return;
    }
    setEmail({ ...email, isDirty: true });
  };

  useEffect(() => {
    if (email.isDirty) {
      updateUserSettings({ email: email.value }).catch((err) =>
        console.error(err)
      );
      setEmail({ ...email, isDirty: false });
    }
  }, [email]);

  useEffect(() => {
    if (!location.state) {
      history.push({ pathname: USER_SETTINGS });
      return;
    }
    setEmail({ ...email, value: location.state.email });
  }, []);

  return (
    <div className="flex flex-col m-auto justify-center md:w-2/5">
      <div className="mx-5 my-5">
        <Header />
        <p className="text-xl mt-6 ">E-mail</p>
        <div className="text-center mt-40">
          <input
            className={`text-center outline-none ${
              isValidEmail ? `border-b` : 'border border-red-500'
            }`}
            type="text"
            value={email.value}
            onChange={(e) => setValueNumber(e.target.value)}
            onBlur={setIsDirty}
          />
        </div>
      </div>
    </div>
  );
};

export default EmailPanelView;
