import React, { ReactNode, useState } from "react";
import { FaHome, FaNewspaper, FaFileAlt, FaImages, FaSitemap } from "react-icons/fa";

const Sidebar: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-100 h-screen shadow-md transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        {/* Header */}
        <div className="p-4 flex justify-between items-center">
          {isOpen && <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>}
          <button onClick={toggleSidebar} aria-label="Toggle Sidebar" className="text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 12L6 6" : "M6 6L18 12L6 18"}
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <ul className="mt-4 space-y-2">
          <li>
            <a
              href="/adminDashboard"
              className="flex items-center p-3 hover:bg-gray-200 text-gray-700"
            >
              <FaHome className="w-6 h-6 mr-3" />
              {isOpen && <span>Home</span>}
            </a>
          </li>
          <li>
            <a
              href="/beritaAdmin"
              className="flex items-center p-3 hover:bg-gray-200 text-gray-700"
            >
              <FaNewspaper className="w-6 h-6 mr-3" />
              {isOpen && <span>Berita</span>}
            </a>
          </li>
          <li>
            <a
              href="/artikelAdmin"
              className="flex items-center p-3 hover:bg-gray-200 text-gray-700"
            >
              <FaFileAlt className="w-6 h-6 mr-3" />
              {isOpen && <span>Artikel</span>}
            </a>
          </li>
          <li>
            <a
              href="/galeriAdmin"
              className="flex items-center p-3 hover:bg-gray-200 text-gray-700"
            >
              <FaImages className="w-6 h-6 mr-3" />
              {isOpen && <span>Galeri</span>}
            </a>
          </li>
          <li>
            <a
              href="/strukturAdmin"
              className="flex items-center p-3 hover:bg-gray-200 text-gray-700"
            >
              <FaSitemap className="w-6 h-6 mr-3" />
              {isOpen && <span>Struktur Organisasi</span>}
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
};

export default Sidebar;
