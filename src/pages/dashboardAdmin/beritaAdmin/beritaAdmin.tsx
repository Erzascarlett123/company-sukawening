import React from "react";
import AdminRoute from "../../../components/ProtectedRoute"; // Pastikan sudah mengimpor AdminRoute


const Berita: React.FC = () => {
  return (
    <AdminRoute>
    <div>
      <h1 className="text-2xl font-bold">Halaman Berita</h1>
      <p>Di sini Anda dapat membaca berita terbaru.</p>
    </div>
    </AdminRoute>
  );
};

export default Berita;
