import React, { useState } from "react";
import Footer from "../../components/footer";
import Foto from "../../assets/images/bg-1.jpg"

// Tipe untuk berita
type News = {
  id: number;
  title: string;
  summary: string;
  content: string;
  image: string;
};

const newsData: News[] = [
  {
    id: 1,
    title: "Berita 1",
    summary: "Ini adalah ringkasan dari berita pertama...",
    content:
      "Ini adalah isi lengkap berita pertama. Anda dapat membaca lebih lanjut tentang topik ini.",
    image: Foto,
  },
  {
    id: 2,
    title: "Berita 2",
    summary: "Ini adalah ringkasan dari berita kedua...",
    content:
      "Ini adalah isi lengkap berita kedua. Anda dapat membaca lebih lanjut tentang topik ini.",
    image: Foto,
  },
  {
    id: 3,
    title: "Berita 3",
    summary: "Ini adalah ringkasan dari berita ketiga...",
    content:
      "Ini adalah isi lengkap berita ketiga. Anda dapat membaca lebih lanjut tentang topik ini.",
    image: Foto ,
  },
];

const NewsGallery: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<News | null>(null);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="flex-1 py-10 px-5">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Galeri Berita
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transform transition hover:scale-105"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800">
                  {news.title}
                </h2>
                <p className="text-gray-600 mt-2">{news.summary}</p>
                <a
                  href="#_"
                  onClick={() => setSelectedNews(news)}
                  className="relative inline-flex items-center px-12 py-3 mt-4 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
                >
                  <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="relative">Read More</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {selectedNews && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-5 relative">
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              >
                ✖
              </button>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {selectedNews.title}
              </h2>
              <p className="text-gray-700">{selectedNews.content}</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default NewsGallery;
