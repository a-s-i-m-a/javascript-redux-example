import { useHistory } from 'react-router-dom';

const CarPreview = ({ image, car, name, count, link, coords }) => {
  const history = useHistory();

  const goToCar = () => {
    history.push(link, { height: 'h-3/5', coords, car });
  };

  return (
    <button
      onClick={goToCar}
      className="
            car
            flex flex-col
            bg-gradient-to-r
            from-blue-grad-2
            to-blue-grad-1
            rounded-2xl
            pt-3
            pb-1
            px-8
            mr-8
            relative
          ">
      <img src={image} alt="" />
      <span className="text-white text-sm font-light px-3 whitespace-nowrap">
        {name}
      </span>
      {count > 0 ? (
        <span
          className="
              absolute
              top-1
              right-2
              inline-flex
              items-center
              justify-center
              px-2
              py-1
              text-sm
              font-light
              leading-none
              text-red-100
              transform
              translate-x-1/2
              -translate-y-1/2
              bg-button-blue-color
              rounded-full
            ">
          {count}
        </span>
      ) : null}
    </button>
  );
};
export default CarPreview;
