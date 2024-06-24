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
    imageUrl: `${imageCdnEndpoint}/proceso-detailing`,
    title: 'Vidrios a la medida',
  },
  {
    description:
      '¡Experimenta la potencia del polarizado nanocerámico! Reduce el calor 5 veces más que los convencionales, filtra el 90% de los rayos UV, ¡sin cambiar la apariencia interior del vidrio! ¡Deslumbra con eficiencia!',
    imageUrl: `${imageCdnEndpoint}/sotzozsbeq62bkfeou3n`,
    title: 'Polarizado Nanocerámico',
  },
  {
    description:
      'Transformamos tu vehículo con nuestro servicio de Detailing y embellecimiento. Devolvemos el brillo original, cuidamos cada detalle y dejamos tu auto impecable. Descubre el arte de la belleza automotriz con nosotros.',
    imageUrl: `${imageCdnEndpoint}/fota85mnoenztqywwyq5`,
    title: 'Detailing',
  },
  {
    description:
      'Garantizamos la excelencia en el mantenimiento de vidrios y puertas para vehículos blindados. Confía en nosotros para mantener tu seguridad en óptimas condiciones.',
    imageUrl: `${imageCdnEndpoint}/kkkblfomphfev2uoml4n`,
    title: 'Blindados: Mantenimiento de Vidrios y Puertas',
  },
  {
    description:
      'Ofrecemos servicios de pintura general y express para todo tipo de vehículos. Utilizamos materiales de alta calidad y técnicas avanzadas para garantizar un acabado impecable y duradero. Ya sea que necesites una renovación completa o una reparación rápida, nuestro equipo está listo para transformar tu vehículo.',
    imageUrl: `${imageCdnEndpoint}/cjco8wt80kkfmzu9gpz7`,
    title: 'Pintura General y Express',
  },
  {
    description:
      'Proveemos e instalamos parabrisas de alta calidad para todos los modelos de vehículos. Nuestro servicio profesional asegura un ajuste perfecto y una instalación segura, aumentando la durabilidad y la seguridad de tu vehículo. Confía en nosotros para mantener tu vista despejada y tu viaje seguro.',
    imageUrl: `${imageCdnEndpoint}/krocpdhzwuocawb2kjrv`,
    title: 'Venta e Instalación de Parabrisas',
  },
];
