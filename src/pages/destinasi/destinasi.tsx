import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Foto from "../../assets/images/anime.png"; // Ganti dengan gambar destinasi yang sesuai

function Destinasi() {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <div className="p-[3rem]"></div>
      <div className="bg-cover bg-center h-[500px]" style={{ backgroundImage: `url(${Foto})` }}>
        <div className="h-full flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold text-white">Destinasi Wisata Kelurahan</h1>
        </div>
      </div>
      
      {/* Destinasi Section */}
      <div className="container mx-auto py-12">
        <h2 className="text-4xl font-semibold text-center mb-8">Tempat Menarik di Kelurahan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Destinasi 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={Foto} alt="Destinasi 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Destinasi 1</h3>
              <p className="text-gray-600">Deskripsi singkat tentang destinasi wisata ini dan apa yang membuatnya menarik.</p>
            </div>
          </div>

          {/* Destinasi 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={Foto} alt="Destinasi 2" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Destinasi 2</h3>
              <p className="text-gray-600">Deskripsi singkat tentang destinasi wisata ini dan apa yang membuatnya menarik.</p>
            </div>
          </div>

          {/* Destinasi 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={Foto} alt="Destinasi 3" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Destinasi 3</h3>
              <p className="text-gray-600">Deskripsi singkat tentang destinasi wisata ini dan apa yang membuatnya menarik.</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Destinasi;
