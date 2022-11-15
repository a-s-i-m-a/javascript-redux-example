import React from 'react';
import Header from '@screens/Settings/components/Header';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import card from '@assets/svg/card1.svg';
import red from '@assets/svg/redCard.svg';
import grey from '@assets/svg/grayCard.svg';
import Button from '@screens/Settings/components/Button';

const CardSettingsView = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="flex flex-col m-auto justify-center md:w-2/5">
      <div className="mx-5 my-5">
        <Header />
        <p className="text-xl mt-6 ">Банковские карты</p>
        <Carousel
          className="my-10"
          responsive={responsive}
          swipeable={true}
          showDots={true}
          arrows={false}>
          <div>
            <div className="flex justify-center items-center">
              <img src={card} alt="" />
            </div>
            <p className="my-10 text-center">карта по умолчанию</p>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <img src={red} alt="" />
            </div>
            <p className="my-10 text-center">сделать картой по умолчанию</p>
          </div>

          <div>
            <div className="flex justify-center items-center">
              <img src={grey} alt="" />
            </div>
            <p className="my-10 text-center">сделать картой по умолчанию</p>
          </div>
        </Carousel>
        <Button prop={'Добавить карту'} />
      </div>
    </div>
  );
};

export default CardSettingsView;
