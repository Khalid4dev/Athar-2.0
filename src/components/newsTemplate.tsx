import React from 'react';
import Image from 'next/image';
import Photo from "../assets/images/News.jpeg";
import PageTitle from './PageTitle';

const NewsTemplate: React.FC = () => {
  return (
    <main>
      <PageTitle title="Actualités" />
      <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8 !pt-0">
      <div className="mx-auto max-w-screen-lg">
        <div className="flex justify-center">
          <div className="flex gap-3">
            <a href="/category/technology">
              <span className="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-blue-600">Theme</span>
            </a>
          </div>
        </div>
        <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
          Architectural Engineering Wonders of the modern era for your Inspiration
        </h1>
        <div className="mt-3 flex justify-center space-x-3 text-gray-500">

          <span className="text-sm font-medium">Jan 31, 2024</span>
        </div>
        <div className="my-8">
          <Image
            src={Photo} // Replace this URL with your actual image URL
            alt="Architectural Engineering"
            className="w-full h-auto rounded-lg"
            width={1200}
            height={600}
          />
        </div>
        <div className="prose dark:prose-dark mt-8">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam laudantium dolorum veniam, culpa in modi nemo earum fuga odio doloremque ratione obcaecati! At illum inventore perferendis, debitis molestias excepturi? Ad!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam laudantium dolorum veniam, culpa in modi nemo earum fuga odio doloremque ratione obcaecati! At illum inventore perferendis, debitis molestias excepturi? Ad!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam laudantium dolorum veniam, culpa in modi nemo earum fuga odio doloremque ratione obcaecati! At illum inventore perferendis, debitis molestias excepturi? Ad!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam laudantium dolorum veniam, culpa in modi nemo earum fuga odio doloremque ratione obcaecati! At illum inventore perferendis, debitis molestias excepturi? Ad!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam laudantium dolorum veniam, culpa in modi nemo earum fuga odio doloremque ratione obcaecati! At illum inventore perferendis, debitis molestias excepturi? Ad!</p>
        </div>
        <div className="mb-7 mt-7 flex justify-center"><a className="rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 " href="/">← View all posts</a></div>
      </div>
    </div>
    </main>
  );
};

export default NewsTemplate;
