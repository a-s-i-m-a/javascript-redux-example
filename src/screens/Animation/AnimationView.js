import React, { useState } from 'react';
// import sircle from '@assets/svg/Ellipse 21.svg';
import sircle2 from '@assets/svg/sircle.svg';
import i from '@assets/svg/i.svg';
import v from '@assets/svg/v.svg';
import sharing from '@assets/svg/Sharing.svg';

const AnimationView = () => {
  const [visible, setInvisible] = useState(true);
  setTimeout(() => {
    setInvisible(false);
  }, 600);
  return (
    <div className="flex justify-center items-center p-auto h-screen flex-col">
      <div
        className={` animated animate__fadeOut h-screen absolute top-0 w-full bg-black opacity-70 text-transparent ${
          visible ? 'block' : 'hidden'
        }`}>
        .
      </div>
      <div className=" flex justify-center items-center ">
        <img src={i} alt="" className=" animated animate__backInLeft" />
        <img src={sircle2} alt="" className=" animated animate__zoomIn " />
        <img src={v} alt="" className=" animated animate__backInRight -m-4" />
      </div>
      <div className="flex justify-center ">
        <img src={sharing} alt="" className="animated animate__backInUp" />
      </div>
    </div>
  );
};

export default AnimationView;
