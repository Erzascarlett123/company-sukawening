import React from "react";
import Footer from "../../components/footer";

type APB = {
  id: number;
  title: string;
  amount: string;
  description: string;
};

const apbData: APB[] = [
  {
    id: 1,
    title: "Bantuan Sosial",
    amount: "Rp 500.000.000",
    description: "Dana untuk bantuan sosial kepada warga miskin.",
  },
  {
    id: 2,
    title: "Infrastruktur Desa",
    amount: "Rp 200.000.000",
    description: "Pembangunan jalan dan fasilitas umum.",
  },
  {
    id: 3,
    title: "Pelatihan Kewirausahaan",
    amount: "Rp 100.000.000",
    description: "Dana untuk pelatihan kewirausahaan bagi pemuda desa.",
  },
];

const APBDesa: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="flex-1 py-10 px-5">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          APB Desa 2024
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr>
                <th className="py-3 px-5 text-left text-gray-800">Judul</th>
                <th className="py-3 px-5 text-left text-gray-800">Jumlah Dana</th>
                <th className="py-3 px-5 text-left text-gray-800">Deskripsi</th>
              </tr>
            </thead>
            <tbody>
              {apbData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100">
                  <td className="py-3 px-5">{item.title}</td>
                  <td className="py-3 px-5">{item.amount}</td>
                  <td className="py-3 px-5">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default APBDesa;
