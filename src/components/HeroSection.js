import React from "react";
import mainimage from "../assets/image/122723 janvier 2024 0062.jpg";
import "../assets/css/HeroSection.css";
function HeroSection() {
  return (
    <>
      <section className="herosection">
        <div className="container_herosection">
          <img className="image_herosection" src={mainimage} />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
