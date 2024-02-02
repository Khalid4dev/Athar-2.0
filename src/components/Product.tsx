import React from 'react';
import Image from 'next/image';

interface ProductProps {
  id: number;
  name: string;
  image: string;
}

const Product: React.FC<ProductProps> = ({ id, name, image }) => {
  return (
    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
    <a href="#" id={id.toString()}>
        <Image className="hover:grow hover:shadow-lg" src={image} alt={name} width={400} height={400} />
        <div className="pt-3 ">
            <p>{name}</p> 
        </div>
        <p className="pt-1 text-gray-900">9.99 DHS</p>
    </a>
    </div>
  );
};

export default Product;
