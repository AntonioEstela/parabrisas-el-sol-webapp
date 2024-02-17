import ServicioCard from './ServicioCard/ServicioCard';
import { ServicioCardProps } from '../../types';

const servicios: Array<ServicioCardProps> = [
  {
    description:
      'Reparamos fisuras (quebraduras) en parabrisas y vidrios laminados. Ahorra dinero y tiempo. Reparemos tu parabrisas dañado en lugar de reemplazarlo.',
    imageUrl: '/reparacion-de-fisura.jpg',
    title: 'Reparación de fisuras',
  },
  {
    description:
      'Eliminamos rayones y desperfectos de forma profesional, mejorando la visibilidad, seguridad y valor de tu propiedad.',
    imageUrl: '/reparacion-de-fisura.jpg',
    title: 'Reparación de rayones en vidrios',
  },
  {
    description:
      'Fabricación de vidrios para todo tipo de vehículos. Calidad profesional, óptimos materiales y atención personalizada. Instalaciones aptas para cualquier tipo de vehículo.',
    imageUrl: '/reparacion-de-fisura.jpg',
    title: 'Vidrios a la medida',
  },
  {
    description:
      '¡Experimenta la potencia del polarizado nanocerámico! Reduce el calor 5 veces más que los convencionales, filtra el 90% de los rayos UV, ¡sin cambiar la apariencia interior del vidrio! ¡Deslumbra con eficiencia!',
    imageUrl: '/reparacion-de-fisura.jpg',
    title: 'Polarizado Nanocerámico',
  },
  {
    description:
      'Transformamos tu vehículo con nuestro servicio de Detailing y embellecimiento. Devolvemos el brillo original, cuidamos cada detalle y dejamos tu auto impecable. Descubre el arte de la belleza automotriz con nosotros.',
    imageUrl: '/reparacion-de-fisura.jpg',
    title: 'Detailing',
  },
  {
    description:
      'Garantizamos la excelencia en el mantenimiento de vidrios y puertas para vehículos blindados. Confía en nosotros para mantener tu seguridad en óptimas condiciones.',
    imageUrl: '/reparacion-de-fisura.jpg',
    title: 'Blindados: Mantenimiento de Vidrios y Puertas',
  },
];

export default function Servicios() {
  return (
    <section className=''>
      <h2 className='mb-4 text-2xl font-bold text-center text-own-yellow md:text-4xl'>Servicios</h2>
      <div className='grid grid-cols-1 gap-6 justify-items-center md:grid-cols-2 md:gap-14'>
        {servicios.map(({ description, imageUrl, title }, index) => (
          <ServicioCard description={description} imageUrl={imageUrl} title={title} key={index} />
        ))}
      </div>
    </section>
  );
}
