import { useEffect } from 'react';

function CalcScroll() {
  const div = document.createElement('div');

  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';

  document.body.append(div);

  let scrollWidth = div.offsetWidth - div.clientWidth;

  div.remove();

  return scrollWidth;
}

const useCalcScroll = (open) => {
  const scroll = CalcScroll();

  useEffect(() => {
    const headerElement = document.querySelector('header');
    if (open) {
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scroll}px`;
      headerElement.classList.add('pr-[8px]');
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
      headerElement.classList.remove('pr-[8px]');
    };
  }, [open, scroll]);
};

export default useCalcScroll;
