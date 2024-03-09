import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

function GoogleMapsWrapper() {
  const positionLasAmericas = { lat: 3.4644985, lng: -76.526611 };
  const positionPrincipal = { lat: 3.4578641, lng: -76.5194569 };
  const positionBetween = {
    lat: (positionLasAmericas.lat + positionPrincipal.lat) / 2,
    lng: (positionLasAmericas.lng + positionPrincipal.lng) / 2,
  };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <Map defaultCenter={positionBetween} defaultZoom={15} style={{ borderRadius: '0.7rem' }}>
        <Marker position={positionLasAmericas} />
        <Marker position={positionPrincipal} />
      </Map>
    </APIProvider>
  );
}

export default function Ubicaciones() {
  return (
    <section className='flex flex-col items-center mb-10'>
      <h2 className='my-10 text-3xl font-bold text-center md:my-10 text-own-yellow md:text-5xl' id='galeria'>
        Ubicaciones
      </h2>
      <div className='grid items-center w-2/3 grid-cols-1 md:grid-cols-2 md:w-4/5 justify-items-center'>
        <div className='p-2 md:p-4'>
          <p>
            Encuéntranos en Cali, Valle del Cauca, Colombia. Dos ubicaciones para tu conveniencia. Descubre calidad y
            servicio excepcionales.
          </p>
          <ul className='mt-5 ml-5 text-sm list-disc md:mt-10 md:ml-10 md:text-base'>
            <li>Carrera 5 No. 29-33 B/ El Porvenir</li>
            <li>Avenida 2E norte # 24-06</li>
          </ul>
        </div>
        <div className='w-64 h-64 max-w-full max-h-full md:w-width-32rem md:h-height-32rem'>
          <GoogleMapsWrapper />
        </div>
      </div>
    </section>
  );
}
