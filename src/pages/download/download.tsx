import React from "react";
import Footer from "../../components/footer";
import UserProtect from "../../components/userProtect";


type DownloadFile = {
  
  id: number;
  name: string;
  fileUrl: string;
};

const downloadData: DownloadFile[] = [
  {
    id: 1,
    name: "Dokumen APB Desa 2024",
    fileUrl: "/files/APB_Desa_2024.pdf",
  },
  {
    id: 2,
    name: "Laporan Kegiatan 2024",
    fileUrl: "/files/Laporan_Kegiatan_2024.pdf",
  },
  {
    id: 3,
    name: "Surat Keputusan Kepala Desa",
    fileUrl: "/files/Surat_Keputusan_2024.pdf",
  },
];


const Download: React.FC = () => {
  return (
    <UserProtect>

    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="flex-1 py-10 px-5">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Download Dokumen
        </h1>
        <div className="space-y-6">
          {downloadData.map((file) => (
            <div
              key={file.id}
              className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between hover:shadow-xl"
            >
              <h2 className="text-xl font-semibold text-gray-800">{file.name}</h2>
              <a
                href={file.fileUrl}
                download
                className="text-indigo-600 hover:text-indigo-800"
              >
                Unduh
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
    </UserProtect>
  );
};

export default Download;
