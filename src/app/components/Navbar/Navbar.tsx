'use client';
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './styles.css';
import Image from 'next/image';

export default function Navbar() {
  const showSettings = (e: any) => {
    e.preventDefault();
  };

  const hamburguerSVG = (
    <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
      <g id='SVGRepo_iconCarrier'>
        {' '}
        <path d='M4 18L20 18' stroke='white' strokeWidth='2' strokeLinecap='round'></path>{' '}
        <path d='M4 12L20 12' stroke='white' strokeWidth='2' strokeLinecap='round'></path>{' '}
        <path d='M4 6L20 6' stroke='white' strokeWidth='2' strokeLinecap='round'></path>{' '}
      </g>
    </svg>
  );

  return (
    <nav className={`flex justify-between p-4`}>
      <Image src='/logo-without-bg.png' alt='Parabrisas el sol logo' width={250} height={0} />
      <div className='absolute top-0 right-0 md:hidden'>
        <Menu right customBurgerIcon={hamburguerSVG} width={250} itemListElement='div'>
          <a id='home' className='menu-item' href='#servicios'>
            Servicios
          </a>
          <a id='about' className='menu-item' href='#galeria'>
            Galería
          </a>
          <a id='contact' className='menu-item' href='#ubicaciones'>
            Ubicaciones
          </a>
          <a onClick={showSettings} className='menu-item--small' href='#contacto'>
            Contacto
          </a>
        </Menu>
      </div>

      <div className='items-center justify-around hidden md:flex w-96'>
        <a href='#servicios' className='nav-item'>
          Servicios
        </a>
        <a href='#galeria' className='nav-item'>
          Galería
        </a>
        <a href='#ubicaciones' className='nav-item'>
          Ubicaciones
        </a>
        <a href='#contacto' className='nav-item'>
          Contacto
        </a>
      </div>
    </nav>
  );
}
