import React, { useEffect, useState } from "react";
import { supabase } from "../../../supabaseClient";

// Mendefinisikan tipe untuk user
interface User {
  id: string;
  email: string;
  is_verified: boolean;
}

const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]); // Tipe eksplisit untuk users
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);

      // Query untuk mendapatkan pengguna yang belum diverifikasi
      const { data, error } = await supabase
        .from("profiles") // Pastikan nama tabel adalah "profiles"
        .select("id, email, is_verified") // Kolom yang ingin diambil
        .eq("is_verified", false); // Hanya pengguna yang belum diverifikasi

      if (error) {
        console.error("Error fetching users:", error);
      } else {
        setUsers(data || []); // Set data ke state
      }

      setLoading(false);
    };

    fetchUsers();
  }, []);

  const handleVerify = async (userId: string) => {
    const { error } = await supabase
      .from("profiles")
      .update({ is_verified: true }) // Update kolom is_verified ke true
      .eq("id", userId);

    if (error) {
      console.error("Error verifying user:", error);
    } else {
      // Perbarui daftar pengguna setelah verifikasi
      setUsers(users.map(user => (user.id === userId ? { ...user, is_verified: true } : user)));
    }
  };

  const handleReject = async (userId: string) => {
    const { error } = await supabase
      .from("profiles")
      .delete() // Menghapus pengguna dari tabel
      .eq("id", userId);

    if (error) {
      console.error("Error rejecting user:", error);
    } else {
      // Perbarui daftar pengguna setelah penghapusan
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Manage Users</h2>
      {users.length === 0 ? (
        <p>No users requesting access.</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.email} - {user.is_verified ? "Verified" : "Not Verified"}
              {!user.is_verified && (
                <>
                  <button onClick={() => handleVerify(user.id)}>Verify</button>
                  <button onClick={() => handleReject(user.id)}>Reject</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminDashboard;
 