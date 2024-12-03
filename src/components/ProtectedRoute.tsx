import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserRole = async () => {
      try {
        // Mendapatkan informasi user yang sedang login
        const { data: userData, error: userError } = await supabase.auth.getUser();

        if (userError || !userData?.user) {
          // Jika tidak ada user yang login, arahkan ke halaman login
          navigate("/login");
          return;
        }

        const user = userData.user;

        // Memeriksa role di tabel "profiles"
        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("role") // Kolom role
          .eq("user_id", user.id) // Menggunakan user_id yang dihubungkan dengan Auth
          .single();

        if (profileError || !profileData) {
          // Jika pengguna tidak ditemukan di tabel "profiles", arahkan ke halaman signup
          setErrorMessage("Akun Anda tidak memiliki role yang valid. Silakan mendaftar.");
          navigate("/signup");
          return;
        }

        if (profileData.role === "admin") {
          // Jika role adalah "admin", beri akses
          setIsAuthorized(true);
        } else {
          // Jika role adalah user atau lainnya, beri notifikasi dan arahkan ke halaman request-access
          setErrorMessage("Anda bukan admin. Silakan ajukan izin ke admin.");
          navigate("/request-access");
        }
      } catch (error) {
        console.error("Error saat memeriksa role:", error);
      } finally {
        setLoading(false);
      }
    };

    checkUserRole();
  }, [navigate]);

  if (loading) return <div>Loading...</div>;

  if (errorMessage) {
    return <div className="text-red-500 text-center">{errorMessage}</div>;
  }

  return isAuthorized ? <>{children}</> : null;
};

export default AdminRoute;
