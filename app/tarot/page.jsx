"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // Import Image component if needed
import Link from 'next/link'; // Import Link for declarative routing

const tarotCards = [
  {
    image: '/tarot/theEmpress.png', // Corrected the path for case sensitivity
    name: 'THE EMPRESS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: '/tarot/emperor.png', // Corrected the path for case sensitivity
    name: 'THE EMPEROR',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  // Add other cards similarly
  {
    image: '/tarot/death.png', // Corrected the path for case sensitivity
    name: 'DEATH',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: '/tarot/fool.png', // Corrected the path for case sensitivity
    name: 'THE FOOL',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: '/tarot/devil.png', // Corrected the path for case sensitivity
    name: 'THE DEVIL',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: '/tarot/magician.png', // Corrected the path for case sensitivity
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
    <div className="justify-center items-center bg-[#FDF8F3] pt-20 pl-[10%] pb-[10%]">
      {tarotCards.map((card, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center pb-4">
          <div className="w-1/5 cursor-pointer">
            <Link legacyBehavior href={`/tarot/${card.name.toLowerCase().replace(/ /g, '')}`}>
              <a>
                <Image src={card.image} alt={card.name} width={200} height={200} className="shadow-lg rounded-xl" />
              </a>
            </Link>
          </div>
          <div className="w-1/2 p-4 pl-20 flex flex-col justify-center">
            <h2 className="text-5xl font-light py-6 text-[#926D41] cursor-pointer" onClick={() => redirectToCardDetail(card.name)}>
              {card.name}
            </h2>
            <p>{card.description}</p>
            <p className="mt-4 py-2 text-black cursor-pointer" onClick={() => redirectToCardDetail(card.name)}>
              Learn More
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
