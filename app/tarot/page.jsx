"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const tarotCards = [
  {
    image: '/tarot/theEmpress.png',
    name: 'THE EMPRESS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: '/tarot/emperor.png',
    name: 'THE EMPEROR',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: '/tarot/death.png',
    name: 'DEATH',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: '/tarot/fool.png',
    name: 'THE FOOL',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: '/tarot/devil.png',
    name: 'THE DEVIL',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: '/tarot/magician.png',
    name: 'THE MAGICIAN',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const page = () => {
  const router = useRouter();

  const redirectToCardDetail = (cardName) => {
    router.push(`/tarot/${cardName.toLowerCase().replace(/ /g, '')}`);
  };

  return (
    <div className="justify-center items-center bg-[#FDF8F3] pt-20 md:px-[10%] py-[10%]">
      {tarotCards.map((card, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center pb-4 justify-center">
          <div className="w-full md:w-1/5 cursor-pointer mx-auto"> 
            <Link legacyBehavior href={`/tarot/${card.name.toLowerCase().replace(/ /g, '')}`}>
              <a>
                <Image src={card.image} alt={card.name} width={2000} height={2000} className="shadow-lg rounded-xl w-auto h-auto md:w-full md:h-full mx-auto" /> 
              </a>
            </Link>
          </div>
          <div className="w-full md:w-1/2 p-4 md:pl-20 flex flex-col ">
            <h2 className="text-2xl md:text-5xl font-light py-6 text-[#926D41] cursor-pointer text-center md:text-start w-full" onClick={() => redirectToCardDetail(card.name)}>
              {card.name}
            </h2>
            <p className='w-full text-center md:text-start '>{card.description}</p>
            <p className="mt-4 py-2 text-black cursor-pointer text-center md:text-start w-full" onClick={() => redirectToCardDetail(card.name)}>
              Learn More
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;


