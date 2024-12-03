import React from "react";
import AdminRoute from "../../../components/ProtectedRoute"; // Pastikan sudah mengimpor AdminRoute

const StrukturOrganisasi: React.FC = () => {
  return (
    <AdminRoute>
    <div>
      <h1 className="text-2xl font-bold">Halaman Struktur Organisasi</h1>
      <p>Lihat struktur organisasi kami di sini.</p>
    </div>
        </AdminRoute>
  );
};

export default StrukturOrganisasi;
