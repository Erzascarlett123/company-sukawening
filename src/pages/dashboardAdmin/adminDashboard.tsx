import React, { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import AdminRoute from "../../components/ProtectedRoute"; // Pastikan sudah mengimpor AdminRoute

interface Admin {
  id: string;
  email: string;
  role: string;
}

const AdminDashboard: React.FC = () => {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [newEmail, setNewEmail] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentAdminId, setCurrentAdminId] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>(""); // State untuk status pesan

  useEffect(() => {
    const fetchAdmins = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("profiles") // Pastikan nama tabel adalah "profiles"
        .select("id, email, role")
        .eq("role", "admin"); // Mengambil hanya pengguna dengan role admin

      if (error) {
        console.error("Error fetching admins:", error);
      } else {
        setAdmins(data || []); // Set admins data
      }

      setLoading(false);
    };

    fetchAdmins();
  }, []);

  const handleAddAdmin = async () => {
    if (!newEmail || !newPassword) return;
  
    // Sign up the user with email and password
    const { data, error: signUpError } = await supabase.auth.signUp({
      email: newEmail,
      password: newPassword,
    });
  
    if (signUpError) {
      console.error("Error signing up:", signUpError.message);
      setStatusMessage(`Error: ${signUpError.message}`); // Menampilkan pesan error
      return;
    }
  
    // Once user is signed up, add the role to the profiles table
    const user = data?.user;  // Access user from data field
  
    if (user) {
      const { error } = await supabase
        .from("profiles")
        .upsert({ id: user.id, email: newEmail, role: "admin" });
  
      if (error) {
        console.error("Error adding admin role:", error.message);
        setStatusMessage(`Error adding admin role: ${error.message}`); // Menampilkan pesan error
      } else {
        // Add the new admin to the list
        setAdmins([...admins, { id: user.id, email: newEmail, role: "admin" }]);
        setNewEmail("");
        setNewPassword("");
        setStatusMessage("Admin added successfully!"); // Menampilkan pesan sukses
      }
    }
  };

  const handleDeleteAdmin = async (adminId: string) => {
    const { error } = await supabase
      .from("profiles")
      .delete()
      .eq("id", adminId);

    if (error) {
      console.error("Error deleting admin:", error);
      setStatusMessage(`Error deleting admin: ${error.message}`); // Menampilkan pesan error
    } else {
      setAdmins(admins.filter(admin => admin.id !== adminId));
      setStatusMessage("Admin deleted successfully!"); // Menampilkan pesan sukses
    }
  };

  const handleEditAdmin = (adminId: string, adminEmail: string) => {
    setIsEditing(true);
    setCurrentAdminId(adminId);
    setNewEmail(adminEmail);
  };

  const handleUpdateAdmin = async () => {
    if (!newEmail || !currentAdminId) return;

    const { error } = await supabase
      .from("profiles")
      .update({ email: newEmail })
      .eq("id", currentAdminId);

    if (error) {
      console.error("Error updating admin:", error);
      setStatusMessage(`Error updating admin: ${error.message}`); // Menampilkan pesan error
    } else {
      setAdmins(admins.map(admin => (admin.id === currentAdminId ? { ...admin, email: newEmail } : admin)));
      setNewEmail("");
      setIsEditing(false);
      setCurrentAdminId(null);
      setStatusMessage("Admin updated successfully!"); // Menampilkan pesan sukses
    }
  };

  if (loading) return <div className="text-center text-gray-500">Loading...</div>;

  return (
    <AdminRoute>
      <div className="min-h-screen bg-gray-100 py-10 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Admin Dashboard</h1>
          <h2 className="text-xl font-semibold text-gray-600 text-center mb-4">Manage Admin Users</h2>

          {/* Form untuk menambah admin */}
          <div className="mb-6">
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className="border rounded-lg p-2 w-full mb-4"
              placeholder="Add new admin email"
            />
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="border rounded-lg p-2 w-full mb-4"
              placeholder="Add new admin password"
            />
            {!isEditing ? (
              <button
                onClick={handleAddAdmin}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Add Admin
              </button>
            ) : (
              <button
                onClick={handleUpdateAdmin}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
              >
                Update Admin
              </button>
            )}
          </div>

          {/* Menampilkan status message */}
          {statusMessage && (
            <div className="text-center mb-4">
              <p className={`text-lg font-semibold ${statusMessage.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
                {statusMessage}
              </p>
            </div>
          )}

          {/* Tabel Admin */}
          {admins.length === 0 ? (
            <p className="text-center text-gray-500">No admin users available.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead className="bg-gray-200 text-gray-600">
                  <tr>
                    <th className="py-3 px-6 text-left">Email</th>
                    <th className="py-3 px-6 text-left">Role</th>
                    <th className="py-3 px-6 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {admins.map(admin => (
                    <tr key={admin.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-6">{admin.email}</td>
                      <td className="py-3 px-6">{admin.role}</td>
                      <td className="py-3 px-6">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEditAdmin(admin.id, admin.email)}
                            className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteAdmin(admin.id)}
                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminRoute>
  );
};

export default AdminDashboard;
