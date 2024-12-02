import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Struktur from "./pages/struktur/struktur";
import Perangkatdesa from "./pages/perangakatdesa/perangkat";
import LoginForm from "./components/login";
import SignUpForm from "./components/signup";
import AdminDashboard from "./pages/dashboardAdmin/adminDashboard";
import UserLayout from "./layout/userLayout";
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
        <UserLayout>
        <AdminDashboard />
        </UserLayout>
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
