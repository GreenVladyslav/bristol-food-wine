import React from 'react';
// import components
import Main from '../components/Main';
import About from '../components/About';
import Menu from '../components/Menu';
import Team from '../components/Team';
import Testimonial from '../components/Testimonial';
import Reservation from '../components/Reservation';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div>
      <Main />
      <About />
      <Menu />
      <Team />
      <Testimonial />
      <Reservation />
      <Footer />
      <div className="h-[380px] md:h-[370px]"></div>
    </div>
  );
};

export default Layout;
