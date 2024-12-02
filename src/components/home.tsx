import { useState, useEffect } from 'react';
import "../App.css";
import background from "../assets/images/depan.jpeg";
import Navbar from "../components/navbar";
import { FaSchool, FaUserTie, FaBullseye } from 'react-icons/fa';
import Footer from "../components/footer";  
import Scroll from "../assets/images/scroll.png"
import Person1 from "../assets/images/p1.jpg"
import Person2 from "../assets/images/p2.jpg"
import Person3 from "../assets/images/p3.jpg"
import Person4 from "../assets/images/p4.jpg"
import Person5 from "../assets/images/p5.jpg"
import Person6 from "../assets/images/p6.jpg"
import Person7 from "../assets/images/p7.jpg"
import Person8 from "../assets/images/p8.jpg"
import B1 from "../assets/images/b1.jpg"
import B2 from "../assets/images/b2.jpg"
import g1 from "../assets/images/depan3.jpeg"
import g2 from "../assets/images/depan4.jpeg"
import g3 from "../assets/images/depan5.jpeg"


function StrukturOrganisasi() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { name: "Jarkasih", role: "KEPALA DESA", image: Person1 },
    { name: "SABILUDIN, S.PD.I", role: "SEKRETARIS DESA", image: Person2 },
    { name: "RINA ADRIYANTI", role: "KAUR KEUANGAN", image: Person3 },
    { name: "ULFA AULINA", role: "KASI KESEJAHTERAAN RAKYAT", image: Person4 },
    { name: "UJANG SUHANDI", role: "KAUR PERENCANAAN", image: Person5 },
    { name: "DESKA ISKANDAR", role: "KAUR UMUM", image: Person6 },
    { name: "ACIP SUHENDAR", role: "KASI PEMERINTAHAN", image: Person7 },
    { name: "OMAH SRIHAYATINAH", role: "KASI PELAYANAN", image: Person8 },
  ];

  // Automatic slider change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
  <div className="text-md font-semibold mb-4 text-blue-600">Struktur Organisasi:</div>

  <div className="flex overflow-x-auto space-x-6">
    {/* Display current item based on currentIndex */}
    <div className="w-64 h-72 bg-blue-100 justify-center rounded-lg shadow-lg transform hover:scale-105 transition-transform ml-[15rem]">
      <div className="p-4">
        <img
          src={items[currentIndex].image}
          alt={items[currentIndex].name}
          className="w-32 h-32 rounded-full object-cover mb-4 mx-auto"
        />
        <h3 className="text-xl font-semibold text-center">{items[currentIndex].name}</h3>
        <p className="text-gray-600 text-center">{items[currentIndex].role}</p>
      </div>
    </div>
  </div>
</div>

  );
}

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
        <div className="relative z-10 container mx-auto mt-[12rem]">
          <h2 className="text-5xl font-extrabold leading-tight">
            Selamat Datang di Sukawening Kabupaten BOGOR
          </h2>
        </div>
      </section>

      {/* Container for Grid */}
      <div className="p-[5rem] bg-gray-300">
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

      {/* Grid Container Baru */}
      <div className="p-8 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Kolom Kiri (Sticky Sidebar) */}
          <div className="lg:col-span-4">
            <div className="sticky top-20 space-y-6 bg-white p-6 rounded-lg shadow-md">
              <ul className="space-y-4">
                <li className="text-gray-700 hover:text-blue-600">
                  <a href="#berita">Berita</a>
                </li>
                <li className="text-gray-700 hover:text-blue-600">
                  <a href="#pengumuman">Pengumuman</a>
                </li>
                <li className="text-gray-700 hover:text-blue-600">
                  <a href="#agenda">Agenda Kegiatan</a>
                </li>
                <li className="text-gray-700 hover:text-blue-600">
                  <a href="#struktur">Struktur Organisasi</a>
                </li>
              </ul>
              <img
                src={Scroll}
                alt="Gambar Desa"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Kolom Kanan (Berita Terbaru) */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-semibold mb-6">Berita Terbaru</h2>
            <div className="space-y-6">
              {/* Artikel 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                <img
                  src={B1}
                  alt="Thumbnail"
                  className="w-24 h-24 rounded-md object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">Tim PPK Ormawa BEM FEMA Ajak Anak-Anak di Desa Sukawening Berkreasi Membuat Ecoprint</h3>
                  <p className="text-gray-600">Tim PPK Ormawa BEM FEMA menggelar praktik ecoprint bersama anak-anak Madrasah Ar Ridwan RT 01
                   RW 05 Desa
                   Sukawening pada tanggal 28 Juli 2024. Praktik ecoprint ini berlangsung di pojok literasi interaksi seni dan lingkungan
                    yang merupakan salah satu …</p>
                  <a
                    href="#"
                    className="text-blue-500 hover:underline text-sm mt-2 inline-block"
                  >
                    Baca Selengkapnya
                  </a>
                </div>
              </div>

              {/* Artikel 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                <img
                  src={B2}
                  alt="Thumbnail"
                  className="w-24 h-24 rounded-md object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">Membangun Kepercayaan Diri Siswa Madrasah Al-Fitri dalam Berbahasa Inggris 
                  melalui English Day Bersama TIM PPK Ormawa BEM FEMA IPB</h3>
                  <p className="text-gray-600">Pada Minggu, 4 Agustus 2024, tim PPK Ormawa BEM FEMA IPB mengadakan kegiatan English Day di 
                  Madrasah Al-Fitri, Desa Sukawening,
                   Kabupaten Bogor. Kegiatan ini, yang merupakan salah satu sub tema belajar Pojok Minat Bakat, bagian dari pojok literasi da…</p>
                  <a
                    href="#"
                    className="text-blue-500 hover:underline text-sm mt-2 inline-block"
                  >
                    Baca Selengkapnya
                  </a>
                </div>
              </div>

                {/*berita terbaru end*/}

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col space-y-4">
        <div className="text-md font-semibold">
          Agenda:
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <div className="text-gray-400 text-2xl">
            {/* You can replace this with an icon like a warning or info symbol */}
            <span role="img" aria-label="no-agenda">❌</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Untuk Saat Ini Tidak Ada Agenda</h3>
            <p className="text-gray-600">Tidak ada agenda yang dijadwalkan pada waktu ini.</p>
          </div>
        </div>
      </div>

              <StrukturOrganisasi />
              </div>
          </div>
        </div>
      </div>

      <div className="p-8 bg-gray-100">
  <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
    {/* Kolom Kiri (YouTube Video) */}
    <div className="lg:col-span-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Video Desa Kelurahan</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-[20.5rem] rounded-lg"
            src="https://www.youtube.com/embed/6T69O2o0ZyE"
            title="Desa Kelurahan Video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          
          <div className='p-8'>
          <button className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 group">
            <span>Read More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 w-5 h-5 transform group-hover:translate-x-2 transition-all duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </button>
          </div>
        </div>
      </div>
    </div>

    {/* Kolom Kanan (Gallery Images) */}
    <div className="lg:col-span-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Galeri Desa Kelurahan</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {/* Example of gallery images */}
          <div>
            <img
              src={g1}
              alt="Gallery 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src={g2}
              alt="Gallery 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src={g3}
              alt="Gallery 3"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/200"
              alt="Gallery 4"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/200"
              alt="Gallery 5"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/200"
              alt="Gallery 6"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="p-8 bg-gray-100">
  <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
    {/* Left Grid - Google Maps Location */}
    <div className="lg:col-span-1">
      <div className="h-72 bg-gray-300 rounded-lg shadow-md overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.39928000894!2d106.73539857499355!3d-6.597198093396604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c510a7d291a3%3A0xd3825cebae8dfcb!2sSukawening!5e0!3m2!1sid!2sid!4v1733018296388!5m2!1sid!2sid"
          className="w-full h-full"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>

    {/* Right Grid - Information */}
    <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Informasi Wilayah</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="font-semibold">Tahun Pembentukan:</span>
          <span>1975</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Dasar Hukum:</span>
          <span>SK Gubernur Kepala Daerah Tingkat I Jawa Barat 1983</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Luas Wilayah:</span>
          <span>179.940 Ha</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Batas Sebelah Utara:</span>
          <span>Desa Ciherang</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Batas Sebelah Selatan:</span>
          <span>Sukadamai</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Batas Sebelah Timur:</span>
          <span>Desa Ciapus</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Batas Sebelah Barat:</span>
          <span>Petir</span>
        </div>
      </div>
    </div>
  </div>
</div>

<Footer />

    </>
  );
}

export default App;
