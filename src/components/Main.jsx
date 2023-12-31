import React from 'react';
// import data
import { mainData } from '../data';
// import components
import Header from './Header';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn, staggerContainer } from '../variants';
import { Link } from 'react-router-dom';

const Main = () => {
  // destructure Main data
  const { pretitle, title, subtitle, btnText } = mainData;

  return (
    <section className="min-h-[980px] bg-main bg-cover bg-right" id="#">
      {/* header */}
      <Header />
      <div className="container mx-auto min-h-[980px] flex justify-center items-center">
        {/* text */}
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial="hidden"
          whileInView={'show'}
          className="text-center flex flex-col items-center">
          {/* pretitile */}
          <motion.div
            variants={fadeIn('down', 'tween', 0.2, 1.1)}
            className="text-white text-[24px] lg:text-[28px] font-primary italic lg:font-medium mb-1">
            {pretitle}
          </motion.div>
          {/* title */}
          <motion.h1 variants={fadeIn('down', 'tween', 0.3, 1.1)} className="h1 mb-1">
            {title}
            <div>
              FOOD <span className="text-5xl font-secondary">&</span> WINE
            </div>
            {/* <div>{titleLow}</div> */}
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 'tween', 0.4, 1.1)}
            className="text-white max-w-[540px] mb-8">
            {subtitle}
          </motion.p>
          {/* button */}
          <motion.div variants={fadeIn('down', 'tween', 0.5, 1.1)}>
            <Link to="/history">
              <button type="button" className="btn">
                {btnText}
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Main;
