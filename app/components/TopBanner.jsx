import UnderlinedText from '@/utils/UnderlinedText';
import React from 'react';
import { FaFacebook, FaPhone } from 'react-icons/fa'; // Importing phone icon from Font Awesome
import { MdMessage } from 'react-icons/md'; // Importing message icon from Material Icons
import { FaMapMarkerAlt } from 'react-icons/fa'; // Importing location icon from Font Awesome
import { FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';
export default function TopBanner() {
  return (
    <section className='hidden md:flex w-full items-center justify-center min-h-[2vh] bg-black py-2'>
      <div className='flex items-center justify-between w-full '>
        <div className="flex items-center">
          <div className='flex px-2 pl-4'>
            <FaPhone className='w-4 h-4 text-white' />
          </div>
          <div className="flex text-white text-sm">
            <UnderlinedText text='Call +919999999999' />
          </div>

          <div className="flex ">
            <div className='flex px-2 pl-4 items-center'>
              <MdMessage className='w-4 h-4 text-white' />
            </div>
            <div className="flex text-white text-sm">
              <UnderlinedText text='text@text.com' />
            </div>
          </div>
          <div className="flex ">
            <div className='flex px-2 pl-4 items-center'>
              <FaMapMarkerAlt className='w-4 h-4 text-white' />
            </div>
            <div className="flex text-white text-sm">
              <UnderlinedText text='121, location to your workplace' />
            </div>
          </div>
        </div>
        <div className="flex px-2">
          <div className="flex text-white text-sm px-4">
          <UnderlinedText text='Follow Us On Social' />
          </div>
          <div className="flex px-1">
            <a href="https://facebook.com">
            <FaFacebookF className='w-4 h-4 text-white' />
            </a>
          </div>
          <div className="flex px-1">
            <a href="https://instagram.com">
            <FaInstagram className='w-4 h-4 text-white' />
            </a>
          </div>
          <div className="flex px-1">
            <a href="https://twitter.com">
            <FaTwitter className='w-4 h-4 text-white' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}