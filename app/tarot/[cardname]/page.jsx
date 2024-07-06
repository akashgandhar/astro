"use client"
import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';


const tarotCards = [
    {
        image: '/tarot/theEmpress.png',
        name: 'THE EMPRESS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.Sit amet venenatis urna cursus eget nunc scelerisque. Vestibulum mattis ullamcorper velit sed. Facilisis leonon tellus orci ac auctor augue. Cras sed felis eget velit aliquet sagittis itae auctor eu augue ut lectus.Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Eu ultrices vitae auctor eu augue ut lectus arcu. Nisi est sit amet facilisis magna etiam tempor. Neque convallis a cras semper auctor neque vitae tempus. ',
    },
    {
        image: '/tarot/emperor.png',
        name: 'THE EMPEROR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.Sit amet venenatis urna cursus eget nunc scelerisque. Vestibulum mattis ullamcorper velit sed. Facilisis leonon tellus orci ac auctor augue. Cras sed felis eget velit aliquet sagittis itae auctor eu augue ut lectus.Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Eu ultrices vitae auctor eu augue ut lectus arcu. Nisi est sit amet facilisis magna etiam tempor. Neque convallis a cras semper auctor neque vitae tempus.',
    },
    {
        image: '/tarot/death.png',
        name: 'DEATH',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.Sit amet venenatis urna cursus eget nunc scelerisque. Vestibulum mattis ullamcorper velit sed. Facilisis leonon tellus orci ac auctor augue. Cras sed felis eget velit aliquet sagittis itae auctor eu augue ut lectus.Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Eu ultrices vitae auctor eu augue ut lectus arcu. Nisi est sit amet facilisis magna etiam tempor. Neque convallis a cras semper auctor neque vitae tempus.',
    },
    {
        image: '/tarot/fool.png',
        name: 'THE FOOL',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.Sit amet venenatis urna cursus eget nunc scelerisque. Vestibulum mattis ullamcorper velit sed. Facilisis leonon tellus orci ac auctor augue. Cras sed felis eget velit aliquet sagittis itae auctor eu augue ut lectus.Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Eu ultrices vitae auctor eu augue ut lectus arcu. Nisi est sit amet facilisis magna etiam tempor. Neque convallis a cras semper auctor neque vitae tempus.',
    },
    {
        image: '/tarot/devil.png',
        name: 'THE DEVIL',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.Sit amet venenatis urna cursus eget nunc scelerisque. Vestibulum mattis ullamcorper velit sed. Facilisis leonon tellus orci ac auctor augue. Cras sed felis eget velit aliquet sagittis itae auctor eu augue ut lectus.Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Eu ultrices vitae auctor eu augue ut lectus arcu. Nisi est sit amet facilisis magna etiam tempor. Neque convallis a cras semper auctor neque vitae tempus.',
    },
    {
        image: '/tarot/magician.png',
        name: 'THE MAGICIAN',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.Sit amet venenatis urna cursus eget nunc scelerisque. Vestibulum mattis ullamcorper velit sed. Facilisis leonon tellus orci ac auctor augue. Cras sed felis eget velit aliquet sagittis itae auctor eu augue ut lectus.Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Eu ultrices vitae auctor eu augue ut lectus arcu. Nisi est sit amet facilisis magna etiam tempor. Neque convallis a cras semper auctor neque vitae tempus.',
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