import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/navbar";

// Pages
import Home from "./pages/home";
import About from "./pages/about";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/project-10" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
