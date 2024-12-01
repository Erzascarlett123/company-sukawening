import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { FaDownload } from 'react-icons/fa'; // Menggunakan ikon download dari react-icons

function ProdukHukum() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-blue-600 h-[500px] flex items-center justify-center text-white">
        <h1 className="text-5xl font-bold">Produk Hukum Kelurahan</h1>
      </div>

      {/* Produk Hukum Section */}
      <div className="container mx-auto py-12">
        <h2 className="text-4xl font-semibold text-center mb-8">Peraturan dan Kebijakan</h2>

        {/* Daftar Produk Hukum */}
        <div className="space-y-8">
          {/* Produk Hukum 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Peraturan 1: Peraturan Desa Sukawening</h3>
              <p className="text-gray-700 mb-4">
                Peraturan ini mengatur tentang penggunaan lahan dan tata ruang di Desa Sukawening. Bertujuan untuk menciptakan lingkungan yang teratur dan aman bagi warga desa.
              </p>
              <div className="flex items-center space-x-4">
                <a href="/path-to-pdf/peraturan-1.pdf" download className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md flex items-center space-x-2">
                  <FaDownload className="text-xl" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>

          {/* Produk Hukum 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Peraturan 2: Kebijakan Pemberdayaan Masyarakat</h3>
              <p className="text-gray-700 mb-4">
                Kebijakan ini bertujuan untuk meningkatkan kualitas hidup masyarakat melalui program-program pemberdayaan ekonomi, sosial, dan pendidikan.
              </p>
              <div className="flex items-center space-x-4">
                <a href="/path-to-pdf/peraturan-2.pdf" download className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md flex items-center space-x-2">
                  <FaDownload className="text-xl" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>

          {/* Produk Hukum 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Peraturan 3: Pedoman Lingkungan Hidup Desa</h3>
              <p className="text-gray-700 mb-4">
                Pedoman ini mengatur tata cara pengelolaan lingkungan hidup di Desa Sukawening, untuk menjaga kelestarian alam dan keseimbangan ekosistem di wilayah desa.
              </p>
              <div className="flex items-center space-x-4">
                <a href="/path-to-pdf/peraturan-3.pdf" download className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md flex items-center space-x-2">
                  <FaDownload className="text-xl" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProdukHukum;
