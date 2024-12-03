import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Struktur from "./pages/struktur/struktur";
import Perangkatdesa from "./pages/perangakatdesa/perangkat";
import LoginForm from "./components/login";
import SignUpForm from "./components/signup";
import AdminDashboard from "./pages/dashboardAdmin/adminDashboard";
import Berita from "./pages/berita/berita"
import Pengumuman from "./pages/pengumuman/pengumuman"
import Protect from "./components/ProtectedRoute"
import Notification from "./pages/dashboardAdmin/notification/notifAdmin"
import BeritaAdmin from "./pages/dashboardAdmin/beritaAdmin/beritaAdmin"
import ArtikelAdmin from "./pages/dashboardAdmin/artikelAdmin/artikelAdmin"
import GaleriAdmin from "./pages/dashboardAdmin/galeriAdmin/galeriAdmin"
import StrukturAdmin from "./pages/dashboardAdmin/strukturAdmin/strukturAdmin"
import UserLayout from "./layout/userLayout";
import AdminLayout from "./layout/sideAdmin"
import Galeri from "./pages/galeri/galeri";
import Download from "./pages/download/download";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <UserLayout>
              <Home />
            </UserLayout>
          }
        />
        <Route
          path="/struktur"
          element={
            <UserLayout>
              <Struktur />
            </UserLayout>
          }
        />

<Route
          path="/berita"
          element={
            <UserLayout>
              <Berita />
            </UserLayout>
          }
        />

<Route
          path="/pengumuman"
          element={
            <UserLayout>
              <Pengumuman />
            </UserLayout>
          }
        />

        <Route
          path="/perangkat-desa"
          element={
            <UserLayout>
              <Perangkatdesa />
            </UserLayout>
          }
        />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/adminDashboard" element={
          <Protect>
        <AdminLayout>
        <AdminDashboard />
        </AdminLayout>
        </Protect>
      } />

<Route path="/beritaAdmin" element={
        <AdminLayout>
        <BeritaAdmin />
        </AdminLayout>
      } />

<Route path="/artikelAdmin" element={
        <AdminLayout>
        <ArtikelAdmin />
        </AdminLayout>
      } />

<Route path="/notification" element={
        <AdminLayout>
        <Notification />
        </AdminLayout>
      } />

<Route path="/GaleriAdmin" element={
        <AdminLayout>
        <GaleriAdmin />
        </AdminLayout>
      } />

<Route path="/strukturAdmin" element={
        <AdminLayout>
        <StrukturAdmin />
        </AdminLayout>
      } />

        <Route
          path="/galeri"
          element={
            <UserLayout>
              <Galeri />
            </UserLayout>
          }
        />
        <Route
          path="/download"
          element={
            <UserLayout>
              <Download />
            </UserLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
