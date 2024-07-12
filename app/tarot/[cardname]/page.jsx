"use client"
import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';


const tarotCards = [
    {
        image: '/tarot/theEmpress.png',
        name: 'THE EMPRESS',
        description: 'The Empress embodies nurturing, fertility, and abundance. She is a symbol of growth, creativity, and maternal influence. In tarot readings, the Empress represents a period of flourishing and harmony. She encourages you to connect deeply with nature and your nurturing instincts, fostering growth in all aspects of life. This card suggests that now is a time to embrace creativity, to trust in the abundance of the universe, and to cultivate loving relationships. The Empress invites you to celebrate the beauty around you and to embody compassion and grace.',
    },
    {
        image: '/tarot/emperor.png',
        name: 'THE EMPEROR',
        description: 'The Emperor embodies authority, leadership, and structure. He represents power, stability, and strategic thinking. In tarot readings, the Emperor signifies a period of taking charge and asserting your authority. He encourages you to establish order and discipline in your life, to take responsibility for your actions, and to lead with confidence. This card suggests that now is a time to tap into your inner strength and wisdom, to set clear goals, and to take decisive action. The Emperor invites you to embrace leadership roles and to build a solid foundation for future success.',
    },
    {
        image: '/tarot/death.png',
        name: 'DEATH',
        description: 'Death symbolizes transformation, endings, and new beginnings. It represents the natural cycle of life and the inevitability of change. In tarot readings, Death signifies a time of profound transformation and renewal. This card encourages you to release the past, to let go of what no longer serves you, and to embrace new opportunities. It suggests that through endings, there is the potential for new beginnings and growth. Death invites you to trust in the process of transformation, to embrace the unknown, and to allow yourself to evolve into a new and empowered version of yourself.',
    },
    {
        image: '/tarot/fool.png',
        name: 'THE FOOL',
        description: 'The Fool symbolizes new beginnings, spontaneity, and innocence. He represents a fresh start and a sense of adventure. In tarot readings, the Fool encourages you to embrace your inner child, to take risks, and to approach life with an open heart and mind. This card suggests that now is a time for spontaneity and exploration, for stepping into the unknown with faith and optimism. The Fool invites you to trust in the universe, to follow your instincts, and to embark on a journey of self-discovery. It reminds you that every new beginning holds the potential for growth and transformation.',
    },
    {
        image: '/tarot/devil.png',
        name: 'THE DEVIL',
        description: 'The Devil symbolizes temptation, bondage, and materialism. He represents the shadow side of human nature and unhealthy attachments. In tarot readings, the Devil warns against succumbing to fear, addiction, or destructive patterns. This card challenges you to confront your inner demons, to break free from limitations, and to reclaim your personal power. It suggests that now is a time to release yourself from negative influences and to take responsibility for your actions. The Devil invites you to examine your beliefs and behaviors, to cultivate self-awareness, and to embrace freedom from the chains that bind you.',
    },
    {
        image: '/tarot/magician.png',
        name: 'THE MAGICIAN',
        description: 'The Magician symbolizes manifestation, power, and resourcefulness. He represents the ability to manifest your desires and to channel your energy effectively. In tarot readings, the Magician encourages you to tap into your potential, to take action with confidence, and to harness the power of creation. This card suggests that now is a time for initiative and innovation, for turning your dreams into reality through focused intention and skillful execution. The Magician invites you to explore your talents, to trust in your abilities, and to believe in the magic of your own potential. It reminds you that you have the power to shape your own destiny and to manifest positive outcomes in your life.',
    },
];



export default function TarotCardPage() {

    const { cardname } = useParams();
    const cardData = tarotCards.find(card => card.name.toLowerCase().replace(/ /g, '') === cardname);

    return (
        <div className='flex flex-col md:flex-row w-full items-center p-0 md:p-20 bg-[#FDF8F3]'>
            <div className="flex w-1/3 items-center justify-center">
                <img src={cardData?.image} alt={cardData?.name} />
            </div>
            <div className="flex flex-col w-full lg:w-1/2 px-4">
                <h1 className='text-xl md:text-5xl w-full text-center'>{cardData?.name}</h1>
                <p className='text-sm md:text-lg py-3 px-4 md:py-9 w-full md:w-full text-justify'>{cardData?.description}</p>
            </div>
        </div>
    );
}