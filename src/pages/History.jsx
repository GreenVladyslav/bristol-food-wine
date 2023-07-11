import React from 'react';
// import link
import { Link } from 'react-router-dom';
// import data
import { historyData } from '../data';
// import variants
import { staggerContainer, fadeIn } from '../variants';
// import motion
import { motion } from 'framer-motion';

const History = () => {
  return (
    <section className="bg-body">
      <div className="container mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={'show'}
          className="flex flex-col justify-center items-center gap-y-8">
          <motion.h2 variants={fadeIn('down', 'tween', 0.2, 1.1)} className="h2 capitalize pt-4">
            Наша історія
          </motion.h2>
          <motion.div variants={fadeIn('down', 'tween', 0.3, 1.1)} className="px-10 space-y-4">
            <div>
              Розташований у самому серці житлового кварталу Нової Англії, Bristol FOOD & WINE
              вабить своїм теплим і привабливим шармом. У його стінах розгорталися історії та
              кувалися спогади. Спокусливі аромати кулінарних шедеврів наповнювали повітря,
              залучаючи відвідувачів насолоджуватися вишуканими смаками, створеними вмілими
              кухарями. Від брязкання келихів до сміху, який наповнював кімнату, Bristol FOOD & WINE
              став улюбленим місцем зустрічі, де друзі та родини збиралися разом, щоб відсвяткувати
              радощі життя.
            </div>
            <div>
              З кожним відвідуванням ресторан ставав не просто місцем обіду — він ставав свідченням
              сили смачної їжі та спільного досвіду. Привітна атмосфера та бездоганне обслуговування
              перетворювали незнайомих людей на друзів, розмови плиніли, а зв’язки зміцнювалися.
              Bristol FOOD & WINE став місцем, де спогади були вплетені в саму тканину спільноти,
              назавжди закарбувавши її ім’я в серцях тих, хто мав привілей обідати в її стінах.
            </div>
          </motion.div>

          {/* flex */}
          <motion.div
            variants={fadeIn('down', 'tween', 0.4, 1.1)}
            className="flex flex-col md:flex-row gap-x-4 gap-y-2 md:gap-y-0">
            {historyData.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item} alt="history" />
                </div>
              );
            })}
          </motion.div>

          <motion.div variants={fadeIn('down', 'tween', 0.5, 1.1)}>
            <Link to="/">
              <button className="btn mb-4">Повернутися на головну</button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default History;

// const navigate = useNavigate();

// const goBack = () => navigate(-1);
