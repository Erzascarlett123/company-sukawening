import React, { useState } from "react";
import Footer from "../../components/footer";
import Foto from "../../assets/images/bg-1.jpg";
import UserProtect from "../../components/userProtect";


// Tipe untuk pengumuman
type Announcement = {
  id: number;
  title: string;
  summary: string;
  content: string;
  image: string;
};

const announcementsData: Announcement[] = [
  {
    id: 1,
    title: "Pengumuman 1",
    summary: "Ini adalah ringkasan dari pengumuman pertama...",
    content:
      "Ini adalah isi lengkap pengumuman pertama. Harap diperhatikan oleh seluruh warga.",
    image: Foto,
  },
  {
    id: 2,
    title: "Pengumuman 2",
    summary: "Ini adalah ringkasan dari pengumuman kedua...",
    content:
      "Ini adalah isi lengkap pengumuman kedua. Silakan baca dengan seksama.",
    image: Foto,
  },
  {
    id: 3,
    title: "Pengumuman 3",
    summary: "Ini adalah ringkasan dari pengumuman ketiga...",
    content:
      "Ini adalah isi lengkap pengumuman ketiga. Semua warga diminta untuk hadir.",
    image: Foto,
  },
];

const Announcements: React.FC = () => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);

  return (
    <UserProtect>
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="flex-1 py-10 px-5">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Pengumuman Kelurahan
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {announcementsData.map((announcement) => (
            <div
              key={announcement.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transform transition hover:scale-105"
            >
              <img
                src={announcement.image}
                alt={announcement.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800">
                  {announcement.title}
                </h2>
                <p className="text-gray-600 mt-2">{announcement.summary}</p>
                <a
                  href="#_"
                  onClick={() => setSelectedAnnouncement(announcement)}
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
                  <span className="relative">Lihat Selengkapnya</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {selectedAnnouncement && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-5 relative">
              <button
                onClick={() => setSelectedAnnouncement(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              >
                ✖
              </button>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {selectedAnnouncement.title}
              </h2>
              <p className="text-gray-700">{selectedAnnouncement.content}</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
    </UserProtect>
  );
};

export default Announcements;
