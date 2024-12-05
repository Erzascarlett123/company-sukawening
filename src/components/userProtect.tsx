import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient"; // Pastikan Anda sudah menginisialisasi Supabase

const UserRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isUser, setIsUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserRole = async () => {
      const { data: { user }, error } = await supabase.auth.getUser(); // Menggunakan getUser() di Supabase v2
      if (error || !user) {
        navigate("/"); // Jika tidak login, arahkan ke login
        return;
      }

      // Ambil role pengguna dari tabel 'users'
      const { data, error: roleError } = await supabase
        .from("users")
        .select("role")
        .eq("id", user.id)
        .single();

      if (roleError || data?.role !== "user") {
        // Jika bukan user, redirect ke halaman lain (misalnya halaman admin)
        navigate("/adminDashboard"); 
      } else {
        setIsUser(true); // Jika user, tampilkan konten halaman
      }

      setLoading(false);
    };

    checkUserRole();
  }, [navigate]);

  if (loading) return <div>Loading...</div>;

  return isUser ? <>{children}</> : null;
};

export default UserRoute;
