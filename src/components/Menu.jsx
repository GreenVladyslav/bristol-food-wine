import React from 'react';
// import data
import { menuData } from '../data';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn, staggerContainer, menuVariants } from '../variants';
// import components
import MenuCarousel from './MenuCarousel';

const Menu = () => {
  // destructure menu data
  const { title, subtitle, modelImg, menuItems, btnText } = menuData;

  // menuCarousel state
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <section className="min-h-[780px]" id="menu">
      {/* background */}
      <div className="h-[780px] bg-menu absolute w-full max-w-[1800px] -z-0"></div>
      {/* text */}
      <div className="relative z-10 top-72 lg:top-52">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className="container mx-auto flex flex-col items-center text-center">
          <motion.h2
            variants={fadeIn('down', 'tween', 0.2, 1.6)}
            className="h2 capitalize text-white max-w-[400px] text-center">
            {title}
          </motion.h2>
          <motion.p
            variants={fadeIn('down', 'tween', 0.4, 1.6)}
            className="text-white/70 capitalize mb-8">
            {subtitle}
          </motion.p>
          <motion.div variants={fadeIn('down', 'tween', 0.6, 1.6)}>
            <img src={modelImg} alt="model" />
          </motion.div>
        </motion.div>
      </div>
      {/* menu gallery */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        whileInView={'show'}
        className="relative top-80 lg:top-96">
        <div className="container mx-auto">
          <div className="lg:-mt-24 min-h-[590px] z-30 mb-8 md:mb-4 xl:mb-16">
            {/* grid */}
            <div className="grid grid-cols-1  lg:grid-cols-4 min-h-[590px]">
              {menuItems.map((item, index) => {
                //destructure item
                const { image, name, price, description } = item;

                return (
                  <div key={index}>
                    <div className="flex flex-row lg:flex-col h-full">
                      {/* image */}
                      {/* reverse order for the first image and the last one */}
                      <div
                        className={`w-[45%] md:w-auto my-1 lg:my-0 ${
                          index === 1 || index === 3 ? 'lg:order-1' : 'order-none'
                        }`}>
                        <img src={image} alt="menu" />
                      </div>
                      {/* text */}
                      <div className="bg-[#fff3e4] my-1 lg:my-0 flex-1 flex-col justify-center p-2 sm:p-6 lg:px-6 lg:p-12 lg:max-h-[250px] xl:max-h-max">
                        <div className="text-center">
                          <div className="text-base sm:text-xl font-semibold text-dark xl:text-xl">
                            {name}
                          </div>
                          <div className="my-1 text-base sm:text-[20px] lg:text-[40px] lg:my-6 text-accent font-semibold">
                            {price}
                          </div>
                          <div className="text-sm sm:text-lg">{description}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <button onClick={handleClick} className="btn mx-auto capitalize">
            {btnText}
          </button>
        </div>
      </motion.div>
      <MenuCarousel isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
};

export default Menu;
