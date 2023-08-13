import React from "react";
import "./Header.scss";
import Image1 from "../../assets/images/image1.jpg";
import Image2 from "../../assets/images/image2.jpg";
import Image3 from "../../assets/images/image3.jpg";

const Header: React.FC = () => {
  return (
    <div className="header-wrapper">
      <div className="mx">
        <div className="header-content">
          <div className="title">
            <h1>PORTFOLIO</h1>
          </div>
          <div className="content">
            <div className="image-container">
               <img src={Image1} alt="" />
               <img src={Image2} alt="" />
               <img src={Image3} alt="" />
            </div>
             <div className="content-container">
                 <div className="text">
                  <h5>NAME</h5>
                  <p>About 4 sentences or so describing things you worked on 
                    and what you were able to achieve in this role.</p>
                 </div>
                 <div className="text">
                  <h5>NAME</h5>
                  <p>About 4 sentences or so describing things you worked on 
                    and what you were able to achieve in this role.</p>
                 </div>
                 <div className="text">
                  <h5>NAME</h5>
                  <p>About 4 sentences or so describing things you worked on 
                    and what you were able to achieve in this role.</p>
                 </div>
             </div>
          </div>
          <div className="footer">
             <p>Text 1</p>
             <p>Text 2</p>
             <p>Text 3</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
