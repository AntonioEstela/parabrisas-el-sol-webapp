'use client';
import { useLayoutEffect, useState } from 'react';

declare global {
  interface Window {
    cloudinary: any;
  }
}

function GaleriaComponent() {
  const [cloudinaryLoaded, setCloudinaryLoaded] = useState(false);

  useLayoutEffect(() => {
    if (typeof window.cloudinary !== 'undefined') {
      setCloudinaryLoaded(true);
    }
  }, []);

  useLayoutEffect(() => {
    if (cloudinaryLoaded) {
      const myWidget = window.cloudinary.galleryWidget({
        container: '#gallery',
        cloudName: 'dcpyo74ez',
        mediaAssets: [
          {
            tag: 'gallery',
            mediaType: 'image',
          },
        ],
        transformation: {
          crop: 'fill',
          radius: 20,
          background: 'transparent',
        },
        bgColor: 'transparent',
        carouselStyle: 'indicators',
        carouselLocation: 'bottom',
        carouselOffset: 10,
        indicatorProps: {
          color: '#FFF9BB',
          selectedColor: '#FDC826',
        },
        navigationButtonProps: {
          shape: 'round',
          iconColor: '#000000',
          color: '#FDC826',
          size: 40,
        },
        navigationPosition: 'offset',
        navigationOffset: -50,
        loaderProps: {
          style: 'circle',
          color: '#000000',
        },
        secureDistribution: 'res-s.cloudinary.com',
        transition: 'fade',
      });

      myWidget.render();
    }
  }, [cloudinaryLoaded]);

  return <div id='gallery'></div>;
}

export default function GaleriaSection() {
  return (
    <section className='flex flex-col items-center'>
      <h2 className='my-10 text-3xl font-bold text-center md:my-10 text-own-yellow md:text-5xl' id='galeria'>
        Galería
      </h2>
      <p className='w-2/3 mb-5 text-center'>
        Imágenes impactantes de procesos, transformaciones asombrosas y más. Sumérgete en la excelencia visual que
        define nuestro trabajo y descubre el antes y después que marcan la diferencia en cada servicio que ofrecemos.
      </p>
      <div className='w-2/3 mb-5 md:w-1/3 md:h-1/3'>
        <GaleriaComponent />
      </div>
    </section>
  );
}
