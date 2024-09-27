import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import HomePage from "./pages/HomePage/HomePage";
import StockManagement from "./pages/StockManagement/StockManagement";
import PresentoirManagement from "./pages/PresentoirManagement/PresentoirManagement";

import ReaderCommandeManagement from "./pages/ReaderCommandeManagement/ReaderCommandeManagement";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import "./App.scss";

function App() {
  return (
    <HashRouter>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/readers-commandes"
            element={<ReaderCommandeManagement />}
          />
          <Route path="/stock-management" element={<StockManagement />} />
          <Route
            path="/presentoir-management"
            element={<PresentoirManagement />}
          />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
