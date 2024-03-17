import React from 'react';
import WhatsappIcon from '@/app/SVG/WhatsappIcon';
import InstagramIcon from '@/app/SVG/InstagramIcon';

const Footer: React.FC = () => {
  return (
    <footer className='bg-black-secondary py-10 mt-10'>
      <div className='grid grid-cols-2 text-sm justify-items-center md:gap-20'>
        <div className='md:place-self-end'>
          <h2 className='font-bold text-center'>Contacto</h2>
          <ul className='text-xs md:text-sm mt-2 text-center'>
            <li className='flex flex-row items-center'>
              <WhatsappIcon />
              <p className='ml-5'>+57 {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.slice(3)}</p>
            </li>
            <li className='flex flex-row items-center mt-4'>
              <InstagramIcon />
              <p className='ml-5'>@parabrisaselsol</p>
            </li>
          </ul>
        </div>
        <div className=' md:place-self-start'>
          <h2 className='font-bold text-center'>Direcciones</h2>
          <ul className='text-xs md:text-sm mt-2 list-disc list-inside text-center'>
            <li className=''>Carrera 5 No. 29-33 B/ El Porvenir</li>
            <li className=''>Avenida 2E norte # 24-06</li>
          </ul>
        </div>
      </div>
      <p className='text-center mt-6'>Copyright © {new Date().getFullYear()} Parabrisas El Sol</p>
      <p className='text-center mt-6 text-xs'>
        Made by{' '}
        <a className='font-bold' href='https://github.com/AntonioEstela'>
          Antonio Estela.
        </a>
      </p>
    </footer>
  );
};

export default Footer;
