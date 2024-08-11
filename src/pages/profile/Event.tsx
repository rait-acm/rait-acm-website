import React from 'react';

interface CardProps {
  title: string;
  desc: string;
  imgSrc: string;
  link: string;
}

const EventCard: React.FC<CardProps> = ({ title, desc, imgSrc, link }) => {
  return (
    <div className="m-4 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={link}>
        <img className="rounded-t-lg" src={imgSrc} alt={title} />
      </a>
      <div className="p-4">
        <a href={link}>
          <h5 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-2 text-sm font-normal text-gray-700 dark:text-gray-400">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default EventCard;


