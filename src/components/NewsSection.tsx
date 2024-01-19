import React from 'react';
import Card from './Card';
import cardimage from '../assets/images/Cardimage.jpeg';

const NewsSection: React.FC = () => {
  return (
    <section className="bg-white p-8">
      <h2 className="text-center text-3xl text-black font-bold mb-8">
        Actualités
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-screen-xl">
        {[1, 2, 3].map((index) => (
          <div key={index} className="mb-8">
            <Card
              cardImage={cardimage}
              headline="Dynamic Headline"
              description="Dynamic description goes here. Provide a brief overview of your content."
              date="20 Dec. 23"
              readMoreLink="/dynamic-link"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-cyan-300 text-black px-4 py-2 rounded-full hover:bg-cyan-100">
          Voir plus
        </button>
      </div>
    </section>
  );
};

export default NewsSection;
