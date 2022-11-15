import { useState } from 'react';

export const Tariff = ({
  id,
  index,
  selected,
  selectTariff,
  period,
  price,
}) => {
  const [state, setState] = useState(false);
  const onClicked = () => {
    setState(!state);
    selectTariff({
      tariffId: id,
      pricePeriod: period,
    });
  };
  return (
    <button
      className={`
							car
							flex flex-col
							justify-center
							bg-gradient-to-r
							rounded-2xl
							mr-5
							text-white text-center
							font-light
							text-md
							px-5
							leading-5
							py-1
							border
							border-transparent
							${state ? 'bg-red-400' : 'to-minutes-grad-2 from-minutes-grad-1'}
			`}
      onClick={onClicked}>
      {period}
      <span className="text-gray-300 uppercase whitespace-nowrap">
        {price} ₽ / {period}
      </span>
    </button>
  );
};
