import React from "react";
import Footer from "../../components/footer";
import Foto from "../../assets/images/depan.jpeg"
import Foto1 from "../../assets/images/depan1.jpeg"
import Foto2 from "../../assets/images/bg-1.jpg"
import Foto3 from "../../assets/images/depan3.jpeg"
import Foto4 from "../../assets/images/depan4.jpeg"
import Foto5 from "../../assets/images/depan5.jpeg"
import UserProtect from "../../components/userProtect";


const galleryImages = [
  Foto,
  Foto1,
  Foto2,
  Foto3,
  Foto4,
  Foto5,
];

const Gallery: React.FC = () => {
  return (
    <UserProtect>
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="flex-1 py-10 px-5">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Galeri Desa
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg transform transition-all hover:scale-105"
            >
              <img
                src={image}
                alt={`Galeri ${index}`}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-center justify-center text-white text-xl">
                Lihat Foto
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
    </UserProtect>
  );
};

export default Gallery;
