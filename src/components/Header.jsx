import React, { useEffect, useState } from 'react';
// import components
import Socials from './Socials';
import Nav from './Nav';
// import logo
import LogoWhite from '../assets/img/header/logo.png';
// import motion
import { motion } from 'framer-motion';
// import variants
import { staggerContainer, fadeIn, headerVariants, navVariants } from '../variants';
const Header = () => {
  // nav ref
  const ref = React.useRef();
  // header state
  const [isActive, setIsActive] = useState(false);
  // nav state
  const [nav, setNav] = useState(false);
  // event listener
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.composedPath().includes(ref.current)) {
        setNav(false);
      }
    };

    document.body.addEventListener('mousedown', handleClickOutside);

    return () => document.body.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate={isActive ? 'show' : 'hidden'}
      className="fixed w-full max-w-[1800px] z-50 py-4">
      <motion.div
        variants={staggerContainer(0.3, 1)}
        initial="hidden"
        animate={'show'}
        className="container mx-auto">
        <div className="flex justify-between items-center px-4 lg:px-0 relative text-white">
          {/* menu button */}
          <motion.div
            variants={fadeIn('down', 'tween', 1, 1.4)}
            className={`${
              nav ? 'gap-y-0' : 'gap-y-2'
            } flex flex-col items-center justify-center w-12 h-12 p-3 order-2 lg:order-none cursor-pointer border-2 rounded-full`}
            onClick={() => setNav(!nav)}>
            {/* solid strip */}
            <motion.div
              initial={{
                rotate: 0,
              }}
              animate={{ rotate: nav ? -45 : 0, translateY: nav ? 2 : 0 }}
              className="w-full h-[2px] bg-white"></motion.div>
            {/* solid strip-second */}
            <motion.div
              initial={{
                rotate: 0,
              }}
              animate={{ rotate: nav ? 45 : 0 }}
              className="w-full h-[2px] bg-white"></motion.div>
          </motion.div>
          {/* logo */}
          <motion.div
            variants={fadeIn('down', 'tween', 1.2, 1.4)}
            className="order-1 lg:order-none lg:ml-[11rem]">
            <a href="/#">
              {/* if header is active make logo 90x90px else 107x107px */}
              <img
                className={`${
                  isActive ? 'w-[90px] h-[90px]' : 'w-[107px] h-[107px]'
                } border-2 border-white rounded-full`}
                src={LogoWhite}
                alt="logo"
              />
            </a>
          </motion.div>
          {/* social icons */}
          <motion.div variants={fadeIn('down', 'tween', 1.4, 1.4)} className="hidden lg:flex">
            <Socials />
          </motion.div>
          {/* nav */}
          <motion.div
            ref={ref}
            variants={navVariants}
            initial="hidden"
            animate={nav ? 'show' : ''}
            className="absolute bg-accent w-[310px] h-[50vh] right-0 lg:left-0 top-[120px] bottom-0 z-50 rounded-lg shadow-xl">
            <Nav />
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
