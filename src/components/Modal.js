export const Modal = ({ children, state }) => {
  return (
    <div
      className={`absolute transition-all w-full bottom-0 z-50 bg-gray-100 rounded-xl p-4 shadow
      animated animate__backInUp

 				${state ? 'visible' : 'invisible'}`}>
      {children}
    </div>
  );
};
