import ServicioCard from './ServicioCard/ServicioCard';
import { servicios } from '@/app/constants';

export default function Servicios() {
  return (
    <section className='flex flex-col items-center'>
      <h2 className='my-10 text-3xl font-bold text-center md:my-16 text-own-yellow md:text-5xl' id='servicios'>
        Servicios
      </h2>
      <div className='grid grid-cols-1 gap-6 justify-items-center md:grid-cols-2 lg:grid-cols-3 md:gap-14'>
        {servicios.map(({ description, imageUrl, title }, index) => (
          <ServicioCard description={description} imageUrl={imageUrl} title={title} key={index} />
        ))}
      </div>
    </section>
  );
}
