"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const tarotCards = [
  {
    image: '/tarot/theEmpress.png',
    name: 'THE EMPRESS',
    description: 'The Empress symbolizes motherhood, fertility, and abundance. She brings nurturing and growth, indicating a time of prosperity and comfort.',
  },
  {
    image: '/tarot/emperor.png',
    name: 'THE EMPEROR',
    description: 'The Emperor stands for authority, structure, and control. He represents a powerful leader who brings order and stability.',
  },
  {
    image: '/tarot/death.png',
    name: 'DEATH',
    description: 'Death signifies transformation, endings, and the start of new beginnings. It suggests letting go of the old to make way for the new.',
  },
  {
    image: '/tarot/fool.png',
    name: 'THE FOOL',
    description: 'The Fool represents new beginnings, innocence, and a leap of faith. It signifies embarking on an adventure without knowing the outcome.',
  },
  {
    image: '/tarot/devil.png',
    name: 'THE DEVIL',
    description: 'The Devil symbolizes bondage, addiction, and materialism. It warns against being trapped by desires or being in a situation that doesn’t serve you.',
  },
  {
    image: '/tarot/magician.png',
    name: 'THE MAGICIAN',
    description: 'The Magician signifies manifestation, resourcefulness, and power. It suggests you have the skills and capabilities to realize your goals and desires.',
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
          <div className="w-full md:w-2/3 p-4 md:pl-20 flex flex-col ">
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


