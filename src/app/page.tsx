import Navbar from './components/Navbar/Navbar';
import MainDescription from './components/MainDescription/MainDescription';
import Servicios from './components/Servicios/Servicios';
import './styles.css';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className='w-full main-photo'></div>
      <MainDescription />
      <Servicios />
    </main>
  );
}
