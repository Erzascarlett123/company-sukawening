import React, { useEffect, useState } from "react";
import { supabase } from "../../../supabaseClient";
import ProtectionRoute from "../../../components/ProtectedRoute"

// Mendefinisikan tipe untuk user
interface User {
  id: string;
  email: string;
  is_verified: boolean;
}

const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);  // Tipe eksplisit untuk users
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from("users").select("*");

      if (error) {
        console.error("Error fetching users:", error);
        return;
      }

      setUsers(data);  // Menetapkan data ke state users
      setLoading(false);
    };

    fetchUsers();
  }, []);

  const handleVerify = async (userId: string) => {
    const { error } = await supabase
      .from("users")
      .update({ is_verified: true })
      .eq("id", userId);

    if (error) {
      console.error("Error verifying user:", error);
    } else {
      // Update the user list after verifying
      setUsers(users.map(user => (user.id === userId ? { ...user, is_verified: true } : user)));
    }
  };

  const handleReject = async (userId: string) => {
    const { error } = await supabase
      .from("users")
      .update({ is_verified: false })
      .eq("id", userId);

    if (error) {
      console.error("Error rejecting user:", error);
    } else {
      // Update the user list after rejecting
      setUsers(users.filter(user => user.id !== userId));  // Filter untuk menghapus user
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <ProtectionRoute>
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Manage Users</h2>
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
    </div>
    </ProtectionRoute>
  );
};

export default AdminDashboard;
