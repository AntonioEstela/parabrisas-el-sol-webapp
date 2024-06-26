'use client';
import './styles.css';
import GaleriaSection from './components/Galeria/Galeria';
import MainDescription from './components/MainDescription/MainDescription';
import Navbar from './components/Navbar/Navbar';
import Script from 'next/script';
import Servicios from './components/Servicios/Servicios';
import Ubicaciones from './components/Ubicaciones/Ubicaciones';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Script src='https://product-gallery.cloudinary.com/all.js' type='text/javascript' strategy='beforeInteractive' />
      <Navbar />
      <div className='w-full main-photo'></div>
      <MainDescription />
      <Servicios />
      <GaleriaSection />
      <Ubicaciones />
      <Contacto />
      <Footer />
    </main>
  );
}
