import React from "react";
import Home from "./components/home"; 
import Struktur from "./pages/struktur/struktur"
import Perangkatdesa from "./pages/perangakatdesa/perangkat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserLayout from "./layout/userLayout";

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
          path="/perangkat-desa"
          element={
            <UserLayout>
              <Perangkatdesa />
            </UserLayout>
          } />

      </Routes>
    </Router>
  );
};

export default App;
