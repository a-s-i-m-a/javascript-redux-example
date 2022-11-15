import React, { useState } from 'react';
import BookingFinishedView from '@screens/bookigShutDown/componets/bookingFinishedView';
import BookingFinishView from '@screens/bookigShutDown/componets/bookingFinishView';
import AnimationContainer from '@screens/Animation';

const BookingShutDownView = () => {
  const [isFinished, setFinished] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [removed, setRemove] = useState(false);
  const animationRemove = () => {
    setTimeout(() => {
      setRemove(true);
    }, 1500);
  };
  const renderComponent = () => {
    if (animation && !removed) {
      animationRemove();
      return <AnimationContainer />;
    }
    if (!isFinished) {
      return (
        <BookingFinishView toFinish={setFinished} setAnimation={setAnimation} />
      );
    }
    if (isFinished) {
      return <BookingFinishedView />;
    }
  };
  return <>{renderComponent()}</>;
};

export default BookingShutDownView;
