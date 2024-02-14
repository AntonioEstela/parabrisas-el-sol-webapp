import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'] });

export default function MainDescription() {
  return (
    <section className={`${dmSans.className} flex flex-col items-center pt-60 md:pt-80`}>
      <h1 className='w-10/12 text-2xl text-center md:w-8/12 text-own-yellow md:text-5xl'>
        EXCELENCIA EN REPARACIÓN DE <b>PARABRISAS</b>
      </h1>
      <p className='w-10/12 mt-4 text-sm text-center md:mt-20 md:w-8/12 md:text-base'>
        Descubre el líder en soluciones para vidrios y parabrisas en Cali: Parabrisas el Sol. Nos destacamos por la
        excelencia en la comercialización, reparación, pulido y restauración de vidrios para una amplia variedad de
        vehículos. Con cobertura en todo el Valle del Cauca y envíos a nivel nacional, aseguramos la disponibilidad de
        nuestros productos en cada rincón del país. Confía en la calidad que nos distingue y encuentra la solución
        perfecta para tus necesidades automotrices con nosotros.
      </p>
    </section>
  );
}
