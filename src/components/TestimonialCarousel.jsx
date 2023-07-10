import React from 'react';
// import carousel slider
import { Carousel } from 'react-responsive-carousel';
// import base carousel styles
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import my rewritten carousel  styles
import '../slider.css';

const TestimonialCarousel = ({ slider }) => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      autoPlay={false}
      infiniteLoop={true}
      className="w-full max-w-[1024px] flex items-center justify-center">
      {slider.map((item, index) => {
        // destructure item
        const { image, message, name, occupation } = item;
        return (
          <div className="max-w-[840px] mx-auto px-14 sm:px-24 text-white" key={index}>
            <div className="text-base ss:text-lg mb-9 lg:text-2xl leading-snug">{message}</div>
            <div className="max-w-[70px] lg:max-w-[100px] mx-auto mb-3">
              <img className="rounded-full" src={image} alt="testemomials" />
            </div>
            <div className="font-bold text-[22px] text-accent">{name}</div>
            <div className="font-medium italic">{occupation}</div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default TestimonialCarousel;
