"use client";
import PageTitle from "../../components/PageTitle";
import Image from "next/image";
import posterImage from "../../assets/images/poster.jpg";
import { Calendar } from "@/components/ui/calendar"
import { InstagramEmbed } from 'react-social-media-embed';
import Photo from "../../assets/images/News.jpeg";
import { useState } from "react";

export default function Home() {
const [currentIndex, setCurrentIndex] = useState(0);

  const increment = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const decrement = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const images = [
    'https://source.unsplash.com/collection/1346951/800x800?sig=1',
    'https://source.unsplash.com/collection/1346951/800x800?sig=2',
    'https://source.unsplash.com/collection/1346951/800x800?sig=3',
    'https://source.unsplash.com/collection/1346951/800x800?sig=4',
    'https://source.unsplash.com/collection/1346951/800x800?sig=5',
    'https://source.unsplash.com/collection/1346951/800x800?sig=6',
    'https://source.unsplash.com/collection/1346951/800x800?sig=7',
    'https://source.unsplash.com/collection/1346951/800x800?sig=8',
    'https://source.unsplash.com/collection/1346951/800x800?sig=9',
  ];
  return (
    <main>
      <PageTitle title="Actualités" />
      <div className="container mx-auto flex flex-wrap max-w-screen-xl py-6">
    <section className="w-full md:w-2/3 flex flex-col items-center px-3">
      <article className="flex flex-col shadow my-4">
        <a href="#" className="hover:opacity-75">
          <Image src={Photo} alt='1'/>
        </a>
        <div className="bg-white flex flex-col justify-start p-6">
          <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Theme</a>
          <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
          <p className="text-sm pb-3">
            By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
          </p>
          <a href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
          <a href="/Events" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
        </div>
      </article>

      <article className="flex flex-col shadow my-4">
        <a href="#" className="hover:opacity-75">
          <Image src={Photo} alt="News Poster" />
        </a>
        <div className="bg-white flex flex-col justify-start p-6">
          <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Theme</a>
          <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
          <p className="text-sm pb-3">
            By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on January 12th, 2020
          </p>
          <a href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
          <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
        </div>
      </article>


      <div className="flex items-center py-8">
        <a href="#" className="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center">1</a>
        <a href="#" className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">2</a>
        <a href="#" className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Next <i className="fas fa-arrow-right ml-2"></i></a>
      </div>

    </section>

    <aside className="w-full md:w-1/3 flex flex-col items-center px-3">

      <div className="w-full bg-white shadow flex flex-col my-4 p-6">
        <p className="text-xl font-semibold pb-5 text-center">Upcoming Events</p>
        <div className="flex items-center justify-center mb-4">
              <Calendar
                mode="single"
                selected={new Date()}
              />
            </div>

            {[1, 2, 3].map((index) => (
              <div key={index}>
                <div className="flex items-center">
                  <div className="bg-secondary-yellow border border-black text-center w-20">
                    <div className="p-1 h-1/2 font-semibold">
                      <div className="bg-white">
                        11
                      </div>
                      Feb
                    </div>

                  </div>
                  <div className="flex flex-col items-start gap-4 pl-4 relative w-full">
                    <div className="text-lg font-semibold text-black">
                      Let’s together provide them a healthy food
                    </div>
                    <span className="text-gray-500">11 Feb - 12:00:00</span>
                  </div>

                </div>
                <hr className="my-5 border-t border-white" />
              </div>
            ))}
      </div>

      <div className="w-full bg-white shadow flex flex-col my-4 p-6">
        <p className="text-xl font-semibold text-center pb-5">Instagram</p>
        <InstagramEmbed url="https://www.instagram.com/athar.alkhair/"/>

      </div>

    </aside>

  </div>
  <section>
      <div className="relative w-full flex items-center invisible md:visible md:pb-12">
        <button
          className="absolute z-10 bg-blue-800 hover:bg-blue-700 text-white text-2xl font-bold hover:shadow rounded-full w-16 h-16 ml-12"
          onClick={decrement}
        >
          &#8592;
        </button>
        {images.slice(currentIndex, currentIndex + 6).map((image, index) => (
          <img
            key={index}
            className="w-1/6 hover:opacity-75"
            src={image}
            alt={`Image ${index + currentIndex + 1}`}
            
          />
        ))}
        <button
          className="absolute z-10 right-0 bg-blue-800 hover:bg-blue-700 text-white text-2xl font-bold hover:shadow rounded-full w-16 h-16 mr-12"
          onClick={increment}
        >
          &#8594;
        </button>
      </div>
    </section>
  
    </main>
    

  );
}
