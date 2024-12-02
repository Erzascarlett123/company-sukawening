import React, { useState } from "react";
import { supabase } from "../supabaseClient"; // Pastikan sudah mengatur client Supabase Anda
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Login menggunakan email dan password
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      const user = data?.user;
      if (user) {
        // Mengecek role pengguna dari tabel profiles
        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("role")
          .eq("user_id", user.id) // pastikan 'user_id' adalah kolom yang tepat di tabel 'profiles'
          .single();

        if (profileError) {
          throw profileError;
        }

        if (profileData?.role === "admin") {
          // Jika role admin, redirect ke admin dashboard
          navigate("/adminDashboard");
        } else {
          // Jika bukan admin, redirect ke halaman utama
          navigate("/");
        }
      } else {
        throw new Error("User not found");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="text-2xl font-semibold text-center font-serif text-gray-700 mb-6">Login</div>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <button onClick={() => navigate("/signup")} className="text-blue-600">Sign Up</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
