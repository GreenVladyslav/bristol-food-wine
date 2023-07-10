import React from 'react';
// import data
import { socialData } from '../data';

const Socials = () => {
  return (
    <div className="flex gap-x-[10px]">
      {socialData.map((item, index) => {
        const isDisabled = item.href === '/';

        if (isDisabled) {
          return (
            <span
              className="border rounded-full w-[35px] h-[35px] flex items-center justify-center text-sm transition-all hover:text-rose-600 hover:border-rose-600 opacity-50 cursor-not-allowed"
              key={index}>
              {item.icon}
            </span>
          );
        }

        return (
          <a
            target="_blank"
            rel="noreferrer"
            className="border rounded-full w-[35px] h-[35px] flex items-center justify-center text-sm transition-all hover:text-accent hover:border-accent"
            href={item.href}
            key={index}>
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
