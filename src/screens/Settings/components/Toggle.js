import React from 'react';

const Toggle = ({ value, name, setValue }) => {
  const toggleTrueFalse = () => {
    setValue({ [name]: !value });
  };
  return (
    <>
      <button
        className={
          value
            ? 'bg-green-500 w-14 rounded-2xl p-1 flex justify-end'
            : 'bg-gray-300 w-14 rounded-2xl p-1 flex justify-start'
        }
        onClick={() => toggleTrueFalse()}>
        <div className="bg-white text-transparent rounded-full w-6 text-center shadow-lg ">
          .
        </div>
      </button>
    </>
  );
};

export default Toggle;
