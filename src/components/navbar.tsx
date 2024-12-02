import { useState, useEffect } from 'react';
import { Route, Link, Routes } from 'react-router-dom';
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
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

      {/* Content */}
        <Routes>
          <Route path="/" element={<div></div>} /> 
          <Route path="/struktur" element={<div>Struktur Organisasi</div>} />
          <Route path="/perangkat" element={<div>Perangkat Desa</div>} />
          <Route path="/lembaga" element={<div>Lembaga Desa</div>} />
          <Route path="/desa-digital" element={<div>Desa Digital</div>} />
          <Route path="/talas-bogor" element={<div>Talas Bogor</div>} />
          <Route path="/mobile-apps" element={<div>Mobile Apps SIDEDIGAYA</div>} />
          <Route path="/berita" element={<div>Berita</div>} />
          <Route path="/pengumuman" element={<div>Pengumuman</div>} />
        </Routes>
    </>
  );
}

// Komponen MenuItems
function MenuItems({ isMobile }: { isMobile?: boolean }) {
  return (
    <ul className={`flex ${isMobile ? 'flex-col space-y-4' : 'space-x-8 mr-[70px]'}`}>
      <MenuItem to="/" title="Beranda" />
      <DropdownMenu
        title="Pemerintahan"
        items={[
          { label: 'Struktur Organisasi', path: '/struktur' },
          { label: 'Perangkat Desa', path: '/perangkat-desa' },
          { label: 'Lembaga Desa', path: '/lembagadesa' },
        ]}
        isMobile={isMobile}
      />
      <DropdownMenu
        title="Layanan"
        items={[
          { label: 'Desa Digital', path: 'https://desadigital.bogorkab.go.id/' },
          { label: 'Talas Bogor', path: 'http://talas.bogorkab.go.id/' },
          { label: 'Mobile Apps SIDEDIGAYA', path: 'https://play.google.com/store/apps/details?id=com.sidedigaya.diskominfo.kabbogor' },
        ]}
        isMobile={isMobile}
      />
      <DropdownMenu
        title="Informasi"
        items={[
          { label: 'Berita', path: '/berita' },
          { label: 'Pengumuman', path: '/pengumuman' },
        ]}
        isMobile={isMobile}
      />
            <MenuItem to="/destinasi" title="Destinasi" />
            <MenuItem to="/produkHukum" title="Beranda" />
    </ul>
  );
}

function MenuItem({ to, title }: { to: string; title: string }) {
  return (
    <li className="relative font-semibold text-black group">
      <Link to={to} className="hover:text-green-600">
        {title}
      </Link>
      <span className="absolute bottom-0 left-0 block w-full h-0.5 bg-green-600 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
    </li>
  );
}

// Komponen DropdownMenu
function DropdownMenu({
  title,
  items,
  isMobile,
}: {
  title: string;
  items: { label: string; path: string }[];
  isMobile?: boolean;
}) {
  const dropdownClasses = isMobile
    ? 'block w-full px-4 py-2'
    : 'absolute left-0 hidden mt-0 bg-white text-black shadow-lg group-hover:block';

  return (
    <li className="relative group z-20 font-semibold text-black">
      <button className="hover:text-green-600">{title}</button>
      <ul className={dropdownClasses}>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={item.path} className="block px-4 py-2 hover:bg-gray-200">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <span className="absolute bottom-0 left-0 block w-full h-0.5 bg-green-600 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
    </li>
  );
}

export default App;
