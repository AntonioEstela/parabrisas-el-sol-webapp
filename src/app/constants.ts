import { ServicioCardProps } from './types';

export const imageCdnEndpoint: String =
  'https://res.cloudinary.com/dcpyo74ez/image/upload/f_auto,q_auto/v1/parabrisas-el-sol';

export const servicios: Array<ServicioCardProps> = [
  {
    description:
      'Reparamos fisuras (quebraduras) en parabrisas y vidrios laminados. Ahorra dinero y tiempo. Reparemos tu parabrisas dañado en lugar de reemplazarlo.',
    imageUrl: `${imageCdnEndpoint}/reparacion-fisura`,
    title: 'Reparación de fisuras',
  },
  {
    description:
      'Eliminamos rayones y desperfectos de forma profesional, mejorando la visibilidad, seguridad y valor de tu propiedad.',
    imageUrl: `${imageCdnEndpoint}/reparacion-de-rayon`,
    title: 'Reparación de rayones en vidrios',
  },
  {
    description:
      'Fabricación de vidrios para todo tipo de vehículos. Calidad profesional, óptimos materiales y atención personalizada. Instalaciones aptas para cualquier tipo de vehículo.',
    imageUrl: `${imageCdnEndpoint}/fabricacion-vidrios`,
    title: 'Vidrios a la medida',
  },
  {
    description:
      '¡Experimenta la potencia del polarizado nanocerámico! Reduce el calor 5 veces más que los convencionales, filtra el 90% de los rayos UV, ¡sin cambiar la apariencia interior del vidrio! ¡Deslumbra con eficiencia!',
    imageUrl: `${imageCdnEndpoint}/resultado-polarizado`,
    title: 'Polarizado Nanocerámico',
  },
  {
    description:
      'Transformamos tu vehículo con nuestro servicio de Detailing y embellecimiento. Devolvemos el brillo original, cuidamos cada detalle y dejamos tu auto impecable. Descubre el arte de la belleza automotriz con nosotros.',
    imageUrl: `${imageCdnEndpoint}/proceso-detailing`,
    title: 'Detailing',
  },
  {
    description:
      'Garantizamos la excelencia en el mantenimiento de vidrios y puertas para vehículos blindados. Confía en nosotros para mantener tu seguridad en óptimas condiciones.',
    imageUrl: `${imageCdnEndpoint}/trabajo-parabrisas-blindado`,
    title: 'Blindados: Mantenimiento de Vidrios y Puertas',
  },
];
