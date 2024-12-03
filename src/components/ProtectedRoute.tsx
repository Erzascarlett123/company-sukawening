import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdminRole = async () => {
      // Menggunakan supabase.auth.getUser() untuk mendapatkan informasi user
      const { data: userData, error } = await supabase.auth.getUser();

      if (error || !userData?.user) {
        navigate("/login"); // Jika tidak ada user yang login, arahkan ke login
        setLoading(false);
        return;
      }

      const user = userData.user;

      // Cek role admin
      const { data, error: dbError } = await supabase
        .from("users")
        .select("role, is_verified") // Periksa apakah admin terkonfirmasi
        .eq("id", user.id)
        .single();

      if (dbError || data?.role !== "admin" || !data?.is_verified) {
        // Jika bukan admin atau belum dikonfirmasi, arahkan ke login
        navigate("/login");
      } else {
        setIsAdmin(true); // Admin yang terverifikasi bisa mengakses halaman ini
      }

      setLoading(false);
    };

    checkAdminRole();
  }, [navigate]);

  if (loading) return <div>Loading...</div>;

  return isAdmin ? <>{children}</> : null;
};

export default AdminRoute;
