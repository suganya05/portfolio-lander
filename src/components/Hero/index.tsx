import React from "react";
import Slider from "react-slick";
import "./Hero.scss";

const Hero: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="hero-wrapper">
      <div className="mx pad">
        <div className="hero-content">
          <div className="image-content">
            <img
              src="https://bestorganicfood.sg/cdn/shop/products/greenapples01.png?v=1622785017"
              alt=""
            />
            <h5>ux designer @ company name</h5>
            <Slider {...settings}>
              <div>
                <p>
                  About 4 sentences or so describing things you worked on and
                  what you were able to achieve in this role
                </p>
              </div>
              <div>
                <p>
                  About 4 sentences or so describing things you worked on and
                  what you were able to achieve in this role
                </p>
              </div>
              <div>
                <p>
                  About 4 sentences or so describing things you worked on and
                  what you were able to achieve in this role
                </p>
              </div>
              <div>
                <p>
                  About 4 sentences or so describing things you worked on and
                  what you were able to achieve in this role
                </p>
              </div>
              <div>
                <p>
                  About 4 sentences or so describing things you worked on and
                  what you were able to achieve in this role
                </p>
              </div>
            </Slider>
          </div>
          <div className="image-content">
            <img
              src="https://bestorganicfood.sg/cdn/shop/products/greenapples01.png?v=1622785017"
              alt=""
            />

            <h5>ux designer @ company name</h5>
            <p>
              About 4 sentences or so describing things you worked on and what
              you were able to achieve in this role
            </p>
          </div>
          <div className="image-content">
            <img
              src="https://bestorganicfood.sg/cdn/shop/products/greenapples01.png?v=1622785017"
              alt=""
            />

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
