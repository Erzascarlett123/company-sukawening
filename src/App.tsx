import React from "react";
import Home from "./components/home"; 
import Struktur from "./pages/struktur/struktur"
import Perangkatdesa from "./pages/perangakatdesa/perangkat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserLayout from "./layout/userLayout";
import Berita from "./pages/berita/berita"
import Pengumuman from "./pages/pengumuman/pengumuman";
import Agenda from "./pages/agendaKegiatan/agenda";
import Galeri from "./pages/galeri/galeri";
import Download from "./pages/download/download";
import APB from "./pages/APB-Desa/apb";
import LembagaDesa from "./pages/lembagadesa/lembagadesa";
import ProdukHukum from "./pages/produkHukum/produkHukum";
import Destinasi from "./pages/destinasi/destinasi";

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
          } />

<Route
          path="/APB"
          element={
            <UserLayout>
              <APB />
            </UserLayout>
          } />

<Route
          path="/galeri"
          element={
            <UserLayout>
              <Galeri />
            </UserLayout>
          } />

<Route
          path="/Download"
          element={
            <UserLayout>
              <Download />
            </UserLayout>
          } />

<Route
          path="/agenda"
          element={
            <UserLayout>
              <Agenda />
            </UserLayout>
          } />

<Route
          path="/pengumuman"
          element={
            <UserLayout>
              <Pengumuman />
            </UserLayout>
          } />

          <Route
          path="/berita"
          element={
            <UserLayout>
              <Berita />
            </UserLayout>
          } />

        <Route
          path="/perangkat-desa"
          element={
            <UserLayout>
              <Perangkatdesa />
            </UserLayout>
          } />

          <Route
          path="/lembagadesa"
          element={
            <UserLayout>
              <LembagaDesa />
            </UserLayout>
          } />

          <Route
          path="/Destinasi"
          element={
            <UserLayout>
              <Destinasi />
            </UserLayout>
          } />

          <Route
          path="/produkHukum"
          element={
            <UserLayout>
              <ProdukHukum />
            </UserLayout>
          } />

      </Routes>
    </Router>
  );
};

export default App;
