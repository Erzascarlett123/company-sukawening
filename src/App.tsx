import { useEffect } from 'react';
import './App.css';
import background from '../src/assets/images/depan.jpeg';
import Navbar from '../src/components/navbar';
import { FaSchool, FaUserTie, FaBullseye } from 'react-icons/fa';
import uhuy from './assets/images/bg.jpeg';

function App() {

  // Menangani perubahan scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        console.log("Scrolled down");
      } else {
        console.log("Scrolled up");
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative text-center text-white py-32 min-h-screen overflow-hidden">
        <img 
          src={background} 
          alt="bg-1" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-60 transition duration-300 ease-in-out"></div>
        <div className="relative z-10 container mx-auto mt-[10rem]">
          <h2 className="text-5xl font-extrabold leading-tight">
            Selamat Datang di Sukawening Kabupaten BOGOR
          </h2>
        </div>
      </section>

      {/* Container untuk Grid */}
      <div className="p-[5rem] bg-green-300" style={{ backgroundImage: `url(${uhuy})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
            <FaBullseye className="text-5xl text-blue-700 mb-4" />
            <h2 className="text-xl font-bold mb-2">Visi dan Misi</h2>
            <p className='text-gray-700'>
              Visi Misi kami 
            </p>
            <button className="bg-cyan-400 text-white px-6 py-2 mt-4 mr-4 rounded-2xl font-semibold hover:scale-105 transition-transform duration-300 transition-all duration-300">
              Selengkapnya
            </button>
          </div>

          {/* Grid 2 - Kepala Sekolah */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
            <FaUserTie className="text-5xl text-green-700 mb-4" />
            <h2 className="text-xl font-bold mb-2">Tentang Kami</h2>
            <p className="text-gray-700">
              Informasi tentang kelurahan kami.
            </p>
            <button className="bg-green-400 text-white px-6 py-2 mt-4 mr-4 rounded-2xl font-semibold hover:scale-105 transition-transform duration-300 transition-all duration-300">
              Selengkapnya
            </button>
          </div>

          {/* Grid 3 - Tentang Sekolah */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
            <FaSchool className="text-5xl text-red-700 mb-4" />
            <h2 className="text-xl font-bold mb-2">Sejarah Desa</h2>
            <p className="text-gray-700">
              Informasi tentang sejarah, fasilitas, dan keunggulan dari SMAN 9 Bogor.
            </p>
            <button className="bg-red-500 text-white px-6 py-2 mt-4 mr-4 rounded-2xl font-semibold hover:scale-105 transition-transform duration-300 transition-all duration-300">
              Selengkapnya
            </button>
          </div>
        </div>
      </div>

      <section className="bg-blue-50 py-20">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-semibold text-blue-800">Layanan Kami</h3>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-blue-800">Pendidikan Berkualitas</h4>
              <p className="mt-2 text-gray-600">Kami menyediakan kurikulum yang dirancang untuk mencetak generasi yang siap bersaing.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-blue-800">Fasilitas Lengkap</h4>
              <p className="mt-2 text-gray-600">Sekolah kami dilengkapi dengan fasilitas modern untuk menunjang proses belajar mengajar.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-blue-800">Kegiatan Ekstrakurikuler</h4>
              <p className="mt-2 text-gray-600">Beragam kegiatan ekstrakurikuler tersedia untuk mengembangkan minat dan bakat siswa.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
