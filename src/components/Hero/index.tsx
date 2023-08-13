import React from "react";
// import ImageOne from "../../assets/images/image1.jpg";
// import ImageTwo from "../../assets/images/image2.jpg";
// import ImageThree from "../../assets/images/image3.jpg";
import "./Hero.scss";

const Hero: React.FC = () => {
  return (
    <div className="hero-wrapper">
      <div className="mx">
        <div className="hero-content">
          <div className="image-content">
            <div className="box"></div>
            {/* <img src={ImageOne} alt="" /> */}
            <h5>ux designer @ company name</h5>
            <p>
              About 4 sentences or so describing things you worked on and what
              you were able to achieve in this role
            </p>
          </div>
          <div className="image-content">
            {/* <img src={ImageTwo} alt="" /> */}
            <div className="box"></div>

            <h5>ux designer @ company name</h5>
            <p>
              About 4 sentences or so describing things you worked on and what
              you were able to achieve in this role
            </p>
          </div>
          <div className="image-content">
            {/* <img src={ImageThree} alt="" /> */}
            <div className="box"></div>

            <h5>ux designer @ company name</h5>
            <p>
              About 4 sentences or so describing things you worked on and what
              you were able to achieve in this role
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
