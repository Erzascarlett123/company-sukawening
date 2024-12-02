import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Upper Section */}
      <div className="container mx-auto py-10 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Social Media Links */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-xl font-semibold mb-4">Ikuti Kami</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition duration-300"
            >
              <FaFacebookF className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition duration-300"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition duration-300"
            >
              <FaYoutube className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-xl font-semibold mb-4">Hubungi Kami</h3>
          <p className="flex items-center space-x-2 text-gray-300 hover:text-gray-100 transition duration-300">
            <FaEnvelope className="text-lg" />
            <span>info@kelurahansukawening.com</span>
          </p>
          <p className="flex items-center space-x-2 text-gray-300 hover:text-gray-100 transition duration-300 mt-2">
            <FaPhoneAlt className="text-lg" />
            <span>+62 123 456 7890</span>
          </p>
        </div>

        {/* Visitor Info */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-xl font-semibold mb-4">Pengunjung</h3>
          <p className="text-gray-300">
            <span className="font-bold text-white">Hari Ini:</span> 150
          </p>
          <p className="text-gray-300 mt-2">
            <span className="font-bold text-white">Total:</span> 12,350
          </p>
        </div>

        {/* Kelurahan Info */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-xl font-semibold mb-4">Kelurahan Sukawening</h3>
          <p className="text-gray-300">
            <span className="font-bold text-white">Alamat:</span> Jl. Sukawening No. 1, Bogor, Jawa Barat
          </p>
          <p className="text-gray-300 mt-2">
            <span className="font-bold text-white">Tahun Pembentukan:</span> 1975
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700"></div>

      {/* Lower Section */}
      <div className="text-center py-6">
        <p className="text-sm text-gray-400 hover:text-gray-200 transition duration-300">
          &copy; 2024 Kelurahan Sukawening. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
