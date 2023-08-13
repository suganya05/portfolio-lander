import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="footer-wrapper">
      <div className="mx pad">
        <div className="footer-content">
          <p>[Your Name]</p>
          <div className="border-right"></div>
          <p>Product Design Portfoilo</p>
          <div className="border-right"></div>
          <p>[Month Year]</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
