import React, { useState } from 'react';
// import data
import { reservationData } from '../data';
// import datapicker
import DatePicker from 'react-datepicker';
// import datepicker css
import 'react-datepicker/dist/react-datepicker.css';
// import timepicker
import TimePicker from 'react-time-picker';
// import timepicker css
import '../timepicker.css';
// import icons
import { FaUsers, FaCalendar, FaClock } from 'react-icons/fa';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn, staggerContainer } from '../variants';
// import components
import ReservationInfoPopup from './ReservationInfoPopup';

const Reservation = () => {
  // destructure reservation data
  const { title, subtitle, modelImg, btnText } = reservationData;
  // data state
  const [startDate, setStartDate] = useState(new Date());
  //clock state
  const [clock, setClock] = useState('9:00');
  // people state
  const [people, setPeople] = useState('1');
  // popup state
  const [isOpen, setIsOpen] = useState(false);
  // reservationInfo
  const [reservationInfo, setReservationInfo] = useState(null);

  const setInputValue = (event) => {
    setPeople(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setReservationInfo({
      date: startDate,
      clock: clock,
      people: people,
    });

    setIsOpen(true);

    console.log(reservationInfo);

    // Clear the input field
    setPeople('1');
    setClock('9:00');
    setStartDate(new Date());
  };

  return (
    <section className="relative top-96 z-30 pb-20 lg:py-[100px]" id="resrvation">
      <div className="container mx-auto">
        {/* text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={'show'}
          className="text-center">
          {/* title */}
          <motion.h2 variants={fadeIn('up', 'tween', 0.2, 1.6)} className="h2 capitalize">
            {title}
          </motion.h2>
          {/* subtitle */}
          <motion.p variants={fadeIn('up', 'tween', 0.4, 1.6)} className="mb-8 text-dark">
            {subtitle}
          </motion.p>
          {/* model */}
          <motion.div
            variants={fadeIn('up', 'tween', 0.6, 1.6)}
            className="flex justify-center mb-8">
            <img src={modelImg} alt="" />
          </motion.div>
        </motion.div>
        {/* form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={fadeIn('up', 'tween', 0.7, 1.6)}
          initial="hidden"
          whileInView={'show'}>
          <div className="flex flex-col lg:flex-row gap-y-4 items-center justify-between mb-8">
            {/* datepicker */}
            <div>
              <div className="flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3">
                <FaCalendar />
                <div>Виберіть Дату</div>
              </div>
              <DatePicker
                className="input"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            {/* timepicker */}
            <div>
              <div className="flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3">
                <FaClock />
                <div>Виберіть Час</div>
              </div>
              <TimePicker
                className="input"
                clearIcon={false}
                clockIcon={false}
                onChange={setClock}
                value={clock}
              />
            </div>
            {/* person nubmber */}
            <div>
              <div className="flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3">
                <FaUsers />
                <div>Скільки людей?</div>
              </div>
              <input
                value={people}
                onChange={setInputValue}
                className="input"
                type="text"
                placeholder="1"
              />
            </div>
          </div>
          {/* button */}
          <div className="max-w-[316px] mx-auto flex justify-center">
            <button className="btn capitalize w-full lg:w-auto" type="submit">
              {btnText}
            </button>
          </div>
        </motion.form>
        <ReservationInfoPopup
          isOpen={isOpen}
          reservationInfo={reservationInfo}
          setIsOpen={setIsOpen}
        />
      </div>
    </section>
  );
};

export default Reservation;
