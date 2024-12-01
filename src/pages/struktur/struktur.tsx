import Navbar from "../../components/navbar";
import Foto from "../../assets/images/ppk.jpg";
import Footer from "../../components/footer";

function Struktur() {
  return (
    <div>
      <Navbar />
      <div className="p-[1rem] bg-white"></div>
      <div className="p-[10rem] bg-gray-300">
        <div className="text-4xl font-semibold font-serif text-center">
          Struktur Organisasi
        </div>
      </div>

    {/* Grid Container Baru */}
<div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4">
  {/* Kolom Kiri (Sticky Sidebar) */}
  <div className="lg:col-span-4">
    <div className="sticky top-20 space-y-6 bg-white p-6">
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
        <li className="text-gray-700 hover:text-blue-600">
          <a href="#struktur">Struktur Organisasi</a>
        </li>
        <li className="text-gray-700 hover:text-blue-600">
          <a href="#struktur">Struktur Organisasi</a>
        </li>
        <li className="text-gray-700 hover:text-blue-600">
          <a href="#struktur">Struktur Organisasi</a>
        </li>
        <li className="text-gray-700 hover:text-blue-600">
          <a href="#struktur">Struktur Organisasi</a>
        </li>
        <li className="text-gray-700 hover:text-blue-600">
          <a href="#struktur">Struktur Organisasi</a>
        </li>
        <li className="text-gray-700 hover:text-blue-600">
          <a href="#struktur">Struktur Organisasi</a>
        </li>
        <li className="text-gray-700 hover:text-blue-600">
          <a href="#struktur">Struktur Organisasi</a>
        </li>
      </ul>
    </div>
  </div>

  {/* Kolom Kanan (Struktur Organisasi) */}
  <div className="lg:col-span-8 flex justify-center items-center">
    <div className="bg-white p-6">
      <img
        src={Foto}
        alt="Struktur Organisasi"
        className="w-full max-w-4xl rounded-md object-cover"
      />
    </div>
  </div>
</div>
        <Footer />
      </div>
  );
}

export default Struktur;
