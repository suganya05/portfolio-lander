import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App: React.FC = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
