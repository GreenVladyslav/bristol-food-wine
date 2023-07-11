import React, { useRef, useEffect, useState } from 'react';
// import data
import { menuPhoto } from '../data';
// import carousel slider
import { Carousel } from 'react-responsive-carousel';
// import base carousel styles
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import my rewritten carousel  styles
import '../slider.css';
// import icons
import { AiOutlineClose } from 'react-icons/ai';
// import calcScroll
import useCalclScroll from '../helpers/useCalclScroll';

const MenuCarousel = ({ isOpen, setIsOpen }) => {
  // menuCarousel ref
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

    return () => {
      document.body.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  useCalclScroll(isOpen);

  return (
    <div className="relative z-50">
      {isOpen && showPopup ? (
        <div className="fixed inset-0 flex items-center justify-center bg-overflow">
          <div ref={ref} className="relative">
            <div className="absolute top-0 right-[21rem] lg:right-0 sm:right-[17rem] text-4xl text-white/70 cursor-pointer z-50">
              <AiOutlineClose onClick={handleClose} className=" " />
            </div>

            <Carousel
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              autoPlay={false}
              infiniteLoop={true}
              className="max-w-[1024px] flex items-center justify-center ">
              {menuPhoto.map((item, index) => {
                return (
                  <div className="mx-auto px-14 sm:px-24 text-white" key={index}>
                    <div className="w-2/5 h-2/5 ss:w-1/2 ss:h-1/2 sm:w-3/5 sm:h-3/5 mx-auto">
                      <img className="rounded-lg" src={item} alt="menuphoto" />
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MenuCarousel;
