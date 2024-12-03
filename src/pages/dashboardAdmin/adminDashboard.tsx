import React from "react";
import AdminRoute from "../../components/ProtectedRoute"; // Pastikan sudah mengimpor AdminRoute

const AdminDashboard: React.FC = () => {
  return (
    <AdminRoute>
      <div>
        <h1>Admin Dashboard</h1>
        <p>Konten halaman Admin yang hanya bisa diakses oleh admin.</p>
      </div>
    </AdminRoute>
  );
};

export default AdminDashboard;
