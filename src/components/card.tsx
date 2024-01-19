import React from 'react';
import Image from 'next/image';

interface CardProps {
  className?: string;
  cardImage: string;
  headline: string;
  description: string;
  date: string;
  readMoreLink: string;
}

const Card: React.FC<CardProps> = ({
  className,
  cardImage,
  headline,
  description,
  date,
  readMoreLink,
}) => {
  return (
    <div className={`flex flex-col w-[352px] items-start justify-end relative bg-white rounded-2xl shadow-md ${className}`}>
      <img className="w-full h-48 object-cover rounded-2xl" alt="Cardimage" src={cardImage} />
      <div className="flex flex-col items-center gap-4 p-4 relative w-full">
        <div className="flex flex-col gap-2 relative w-full">
          <div className="relative text-xl font-bold text-black">{headline}</div>
          <p className="relative text-base font-normal text-black">{description}</p>
        </div>
        <div className="flex items-center justify-between relative w-full">
          <div className="flex items-center gap-2 relative bg-gray-300 rounded-full p-2">
            <div className="relative font-normal text-black text-sm">{date}</div>
          </div>
          <a className="flex items-center justify-end text-cyan-400 hover:text-cyan-300" href={readMoreLink}>
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
