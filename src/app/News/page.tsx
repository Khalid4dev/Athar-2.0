"use client";
import PageTitle from "../../components/PageTitle";
import Image from "next/image";
import posterImage from "../../assets/images/poster.jpg";
import { Calendar } from "@/components/ui/calendar"
import { InstagramEmbed } from 'react-social-media-embed';

export default function Home() {
  return (
    <main>
      <PageTitle title="Actualités" />
      <section>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mx-auto max-w-screen-xl pt-12 pb-12">
          <div className="grid col-span-2 grid-row-1 gap-10 px-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
              <div key={index} className="flex">
                <div>
                  <Image
                    src={posterImage}
                    alt="Devenir Bénévole"
                    className="object-cover w-96 h-auto"
                  />
                </div>
                <div className="flex flex-col items-start gap-4 pl-2 relative w-full">
                  <div className="relative text-xl font-bold text-black">
                    Let’s together provide them a healthy food
                  </div>
                  <div className="relative font-normal text-primary-grey text-sm">
                      15 Dec 22
                    </div>
                  <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem doloremque illo reiciendis? Repellat unde odio praesentium...</p>
                  <div className="relative items-end">
                    <a
                      className="bg-secondary-red flex items-center justify-end p-3 text-white"
                      href="#"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            ))}

          </div>
          <div className="bg-blue-50 col-span-2 sm:col-span-1 pt-8 px-4">
            <h1 className="text-center text-2xl font-bold pb-6">EVÈNEMENTS A VENIR</h1>
            <div className="bg-white flex items-center justify-center mb-4">
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
            <div className="text-center">
              <h1 className="text-2xl font-bold p-4">Instagram</h1>
              <InstagramEmbed url="https://www.instagram.com/athar.alkhair/"/>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
