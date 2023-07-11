import React, { useEffect, useRef, useState } from 'react';
// import icons
import { IoClose } from 'react-icons/io5';
// import calcScroll
import useCalclScroll from '../helpers/useCalclScroll';

const ReservationInfoPopup = ({ isOpen, setIsOpen, reservationInfo }) => {
  const ref = useRef();
  // delay
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isOpen) {
      timeoutId = setTimeout(() => {
        setShowPopup(true);
      }, 300);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const handleEscape = (event) => {
        if (event.code === 'Escape') {
          setIsOpen(false);
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    }
  });

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.composedPath().includes(ref.current)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener('mousedown', handleClickOutside);

    return () => document.body.removeEventListener('mousedown', handleClickOutside);
  }, [setIsOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  useCalclScroll(isOpen);

  return (
    <div className="relative">
      {isOpen && showPopup ? (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-overflow">
          <div
            dir="rtl"
            className="bg-popup bg-center p-10 md:p-20 bg-cover w-8/12 rounded-lg"
            ref={ref}>
            <div className="relative text-4xl text-white/70 cursor-pointer">
              <IoClose
                onClick={handleClose}
                className="absolute h-10 w-10 md:h-14 md:w-14 -top-[2rem] -start-[2.5rem] md:-top-[4rem] md:-start-[5rem]"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl sm:text-[26px] font-primary italic text-white capitalize mb-2">
                Деталі бронювання
              </h2>
              <p>Дата: {reservationInfo.date.toLocaleDateString()}</p>
              <p>Час: {reservationInfo.clock}</p>
              <p>Кількість людей: {reservationInfo.people}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ReservationInfoPopup;
