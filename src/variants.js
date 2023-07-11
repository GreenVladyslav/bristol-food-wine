export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };
};

// about variants

export const plateVariants = {
  hidden: {
    x: '120%',
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      duration: 1.8,
      delay: 0.5,
    },
  },
};

// header variants
export const headerVariants = {
  hidden: {
    paddingTop: '84px',
    paddingBottom: '84px',
    background: 'rgba(0, 0, 0, 0)',
  },
  show: {
    paddingTop: '14px',
    paddingBottom: '14px',
    background: 'rgba(0, 0, 0, 0.92)',
    transition: {
      type: 'spring',
    },
  },
};

export const navVariants = {
  hidden: {
    clipPath: 'circle(5.8% at 50% 0)',
    opacity: 0,
    transition: {
      type: 'spring',
      delay: 0.2,
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    clipPath: 'circle(130% at 50% 0)',
    transition: {
      type: 'spring',
      stiffness: 80,
    },
  },
};

// menu variants

export const menuVariants = {
  hidden: {
    y: 150,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      delay: 0.2,
      duration: 1.6,
      ease: 'easeOut',
    },
  },
};

// initial={{
//   opacity: 0,
//   y: 150,
// }}
// whileInView={{
//   opacity: 1,
//   y: 0,
// }}
// transition={{
//   type: 'tween',
//   delay: 0.2,
//   duration: 1.6,
//   ease: 'easeOut',
// }}
