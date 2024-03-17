import React from 'react';
import CarDesing from '../../../../public/car-design.svg';

const ContactForm: React.FC = () => {
  const [nombre, setNombre] = React.useState('');
  const [mensaje, setMensaje] = React.useState('');

  const handleNombreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(event.target.value);
  };

  const handleMensajeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMensaje(event.target.value);
  };
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const textContent = `Hola, mi nombre es ${nombre}. ${mensaje}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
    }&text=${encodeURIComponent(textContent)}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <div className='grid items-center grid-cols-1 justify-items-center md:grid-cols-2'>
      <form className='flex flex-col items-center w-2/3 mt-10' onSubmit={handleOnSubmit}>
        <label className='w-full text-sm md:text-base' htmlFor='nombre'>
          Ingresa tu nombre
          <input
            className='w-full p-2 mt-2 border-2 rounded-md bg-gray-secondary focus:outline-none focus:border-own-yellow'
            type='text'
            name='nombre'
            id='nombre'
            required
            onChange={handleNombreChange}
          />
        </label>
        <label className='w-full mt-2 text-sm md:text-base' htmlFor='mensaje'>
          Escribe tu consulta o detalles para la cotización aquí
          <textarea
            className='w-full p-2 h-52 mt-2 border-2 rounded-md bg-gray-secondary focus:outline-none focus:border-own-yellow'
            name='mensaje'
            id='mensaje'
            required
            onChange={handleMensajeChange}
          />
        </label>
        <button className='w-3/4 p-2 mt-5 text-white rounded-md bg-green-primary focus:outline-none' type='submit'>
          Envía tu mensaje
        </button>
      </form>
      <div className='w-full'>
        <CarDesing />
      </div>
    </div>
  );
};

const Contacto: React.FC = () => {
  return (
    <section className='flex flex-col items-center'>
      <h2 className='my-10 text-3xl font-bold text-center md:my-10 text-own-yellow md:text-5xl' id='contacto'>
        Contacto
      </h2>
      <p className='w-10/12 text-center'>
        ¡Contáctanos por WhatsApp para cotizar fácil y rápidamente! Estamos aquí para atender tus consultas y brindarte
        la mejor experiencia. Cotiza con nosotros y descubre soluciones personalizadas para tus necesidades
        automotrices.
      </p>
      <ContactForm />
    </section>
  );
};

export default Contacto;
