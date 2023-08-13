import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

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
