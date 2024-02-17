import Image from 'next/image';
import { ServicioCardProps } from '../../../types';

export default function ServicioCard({ description, imageUrl, title }: ServicioCardProps) {
  return (
    <div className='w-60'>
      <div className='relative h-60 w-60'>
        <Image src={imageUrl} alt={title} fill={true} objectFit='cover' style={{ borderRadius: '0.375rem' }} />
      </div>
      <h5 className='my-2 text-xl font-bold text-center text-own-yellow'>{title}</h5>
      <p className='text-sm text-center'>{description}</p>
    </div>
  );
}
