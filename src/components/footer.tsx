import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Social Media Links */}
        <div className="flex space-x-4 justify-center sm:justify-start">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaFacebookF className="text-2xl" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
            <FaYoutube className="text-2xl" />
          </a>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-col justify-center items-center sm:items-start">
          <h3 className="text-xl font-semibold mb-2">Kontak Kami</h3>
          <p className="text-sm">Email: info@kelurahansukawening.com</p>
          <p className="text-sm">Phone: +62 123 456 7890</p>
        </div>

        {/* Visitor Info */}
        <div className="flex flex-col justify-center items-center sm:items-start">
          <h3 className="text-xl font-semibold mb-2">Informasi Pengunjung</h3>
          <p className="text-sm">Pengunjung Hari Ini: 150</p>
          <p className="text-sm">Total Pengunjung: 12,350</p>
        </div>

        {/* Kelurahan Sukawening Info */}
        <div className="flex flex-col justify-center items-center sm:items-start">
          <h3 className="text-xl font-semibold mb-2">Kelurahan Sukawening</h3>
          <p className="text-sm">Alamat: Jl. Sukawening No. 1, Bogor, Jawa Barat</p>
          <p className="text-sm">Tahun Pembentukan: 1975</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8">
        <p className="text-sm">&copy; 2024 Kelurahan Sukawening. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
