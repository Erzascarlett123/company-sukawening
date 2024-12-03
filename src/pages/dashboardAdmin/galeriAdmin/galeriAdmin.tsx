import React from "react";
import AdminRoute from "../../../components/ProtectedRoute"; // Pastikan sudah mengimpor AdminRoute


const Galeri: React.FC = () => {
  return (
    <AdminRoute>
    <div>
      <h1 className="text-2xl font-bold">Halaman Galeri</h1>
      <p>Jelajahi galeri kami untuk melihat koleksi gambar.</p>
    </div>
    </AdminRoute>
  );
};

export default Galeri;
