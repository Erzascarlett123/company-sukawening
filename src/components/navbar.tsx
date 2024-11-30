import { useState, useEffect } from 'react';
import '../App.css';
import Logo from '../assets/images/blog.png';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isSidebarOpen]);

  // Menangani perubahan scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menangani klik di luar sidebar untuk menutupnya
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const sidebar = document.getElementById('sidebar');
      if (sidebar && !sidebar.contains(e.target as Node)) {
        setIsSidebarOpen(false);
      }
    };
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen]);

  return (
    <>
      {/* Header Placeholder */}
      <div className="p-[60px] bg-white shadow-lg"></div>

      {/* Header */}
      <header
        className={`fixed top-0 w-full z-20 transition-all duration-300 ease-in-out ${
          isScrolled ? 'bg-white shadow-lg py-3 shadow-xl' : 'bg-white py-6'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="SMAN 9 Logo" className="h-[70px] w-[60px]" />
            <div className="flex flex-col text-left text-black">
              <div className="font-bold text-lg">Sukawening</div>
              <div className="font-semibold text-sm">Kabupaten BOGOR</div>
            </div>
          </div>

          {/* Navigation untuk layar besar */}
          <nav className="hidden lg:flex space-x-6 items-center">
            <MenuItems />
          </nav>

          {/* Tombol Hamburger untuk layar kecil */}
          <button
            className="lg:hidden text-black focus:outline-none"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Sidebar untuk layar kecil */}
      <aside
        id="sidebar"
        className={`fixed top-0 right-0 w-64 h-full bg-blue-700 z-30 transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out overflow-y-auto`}
      >
        <div className="flex flex-col h-full p-6">
          <button className="self-end text-black mb-4" onClick={() => setIsSidebarOpen(false)}>
            ✕
          </button>
          <MenuItems isMobile />
        </div>
      </aside>
    </>
  );
}

// Komponen MenuItems untuk memisahkan logika dropdown
function MenuItems({ isMobile }: { isMobile?: boolean }) {
  return (
    <ul className={`flex ${isMobile ? 'flex-col space-y-4' : 'space-x-8 mr-[70px]'}`}>
      {/* Beranda Dropdown */}
      <DropdownMenu title="Beranda" isMobile={isMobile} items={['Berita', 'Galeri', 'Video']} />

      {/* Profil Dropdown */}
      <DropdownMenu
        title="Profil"
        isMobile={isMobile}
        items={['Tentang Sekolah', 'Visi dan Misi', 'Kepala Sekolah', 'Prestasi Sekolah', 'Peminatan']}
      />

      {/* Data Dropdown */}
      <DropdownMenu title="Data" isMobile={isMobile} items={['Sarpas', 'Guru', 'Murid', 'Lainnya']} />

      {/* Informasi Dropdown */}
      <DropdownMenu
        title="Informasi"
        isMobile={isMobile}
        items={['Pengumuman', 'Agenda Kegiatan', 'Jadwal Pelajaran', 'Jadwal Ujian', 'Ekstrakurikuler', 'Unduhan']}
      />

      {/* Osis Dropdown */}
      <DropdownMenu title="Osis" isMobile={isMobile} items={['Tentang Osis', 'Program Kerja', 'Kegiatan']} />
    </ul>
  );
}

// Komponen DropdownMenu untuk memudahkan pembuatan dropdown
function DropdownMenu({ title, items, isMobile }: { title: string; items: string[]; isMobile?: boolean }) {
  const dropdownClasses = isMobile
    ? 'block w-full px-4 py-2'
    : 'absolute left-0 hidden mt-2 bg-white text-black shadow-lg group-hover:block';

  return (
    <li className="relative group z-20 font-semibold text-black">
      <button className="hover:text-green-300">{title}</button>
      <ul className={dropdownClasses}>
        {items.map((item, index) => (
          <li key={index}>
            <a href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="block px-4 py-2 hover:bg-gray-200">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <span className="absolute bottom-0 left-0 block w-full h-0.5 bg-green-600 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
    </li>
  );
}

export default App;
