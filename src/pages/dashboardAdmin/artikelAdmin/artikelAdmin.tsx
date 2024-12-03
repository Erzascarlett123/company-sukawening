import React from "react";
import AdminRoute from "../../../components/ProtectedRoute"; // Pastikan sudah mengimpor AdminRoute


const Artikel: React.FC = () => {
  return (
    <AdminRoute>
    <div>
      <h1 className="text-2xl font-bold">Halaman Artikel</h1>
      <p>Berikut adalah artikel pilihan kami.</p>
    </div>
    </AdminRoute>
  );
};

export default Artikel;
