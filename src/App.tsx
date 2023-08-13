import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Hero />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
