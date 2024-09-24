import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import HomePage from "./pages/HomePage/HomePage";
import StockManagement from "./pages/StockManagement/StockManagement";
import PresentoirManagement from "./pages/PresentoirManagement/PresentoirManagement";
import CommandesManagement from "./pages/CommandesManagement/CommandesManagement";

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
          <Route path="/stock-management" element={<StockManagement />} />
          <Route
            path="/presentoir-management"
            element={<PresentoirManagement />}
          />
          <Route
            path="/commandes-management"
            element={<CommandesManagement />}
          />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
