"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const tarotCards = [
  {
    image: '/tarot/theEmpress.png',
    name: 'theempress',
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

export default function TarotCardPage() {
  const router = useRouter();
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    console.log(router.isReady, router.query)
    if (router.isReady) {
      const { cardname } = router.query;
      const card = findCardByName(cardname);
      setCardData(card);
    }
    else {
        console.log(router)
    }
  }, [router.isReady, router.query]);

  const findCardByName = (nameParam) => {
    const normalizedParam = nameParam?.toLowerCase().replace(/-/g, '');

    const foundCard = tarotCards.find(card => {
      const normalizedCardName = card.name.toLowerCase().replace(/^the /i, '').replace(/ /g, '');
      return normalizedCardName === normalizedParam;
    });

    return foundCard;
  };

  if (!cardData) {
    return <div>Card not found</div>;
  }

  return (
    <div>
      <h1>{cardData.name}</h1>
      <img src={cardData.image} alt={cardData.name} />
      <p>{cardData.description}</p>
    </div>
  );
}