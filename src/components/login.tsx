import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError("Login gagal, silakan coba lagi.");
        return;
      }

      const user = data?.user; // Akses user dari data

      if (user) {
        // Cek apakah user sudah dikonfirmasi admin
        const { data: userData, error: dbError } = await supabase
          .from("users")
          .select("is_verified")
          .eq("id", user.id)
          .single();

        if (dbError || !userData?.is_verified) {
          setError("Akun Anda belum dikonfirmasi oleh Admin.");
          supabase.auth.signOut(); // Logout jika belum dikonfirmasi
          return;
        }

        // Jika sudah dikonfirmasi, arahkan ke halaman home atau dashboard
        navigate("/dashboard");
      }
    } catch (err) {
      setError("Terjadi kesalahan, silakan coba lagi.");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;
