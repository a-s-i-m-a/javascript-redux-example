import React from 'react';
import { ROOT } from '@navigation/CONSTANTS';
import { useHistory } from 'react-router-dom';
import { store } from '@redux/store';

const Button = ({ prop }) => {
  const history = useHistory();
  const handleClick = () => {
    if (prop === 'Выйти') {
      history.push(ROOT);
    }
  };
  return (
    <>
      <button
        className="bg-blue-500 text-white py-4 w-full rounded-xl mt-10 mb-5"
        onClick={() => handleClick()}>
        {prop}
      </button>
    </>
  );
};

export default Button;
