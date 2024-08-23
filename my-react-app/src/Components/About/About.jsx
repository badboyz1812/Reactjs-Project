import React from "react";
import './About.css';
import aboutImage from '../img/img5.jpeg'; 

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="fs-1 mb-5 text-uppercase fw-bold">About us</h2>
        <p>
          Welcome to BadBoyZ Paradise, where luxury meets unparalleled hospitality.
          Nestled in the heart of the city, our establishment is more than just a destination—it's an experience.
          From the moment you step through our doors, you'll be enveloped in an atmosphere of sophistication and style.
          Whether you're here to indulge in our gourmet cuisine, unwind with our signature cocktails, or simply enjoy the vibrant ambiance, we promise a stay that will leave you wanting more.
        </p>
        <p className="mb-5">
          At BadBoyZ Paradise, we believe in the finer things in life.
          Our team is dedicated to providing top-notch service, ensuring that every moment you spend with us is memorable.
          With a blend of modern elegance and timeless comfort, we offer an escape from the ordinary, inviting you to relax, rejuvenate, and revel in the luxury you deserve.
          Come and discover the allure of BadBoyZ Paradise—where your satisfaction is our top priority, and every guest is treated like family.
        </p>
      </div>
      <div className="about-image-container">
        <img src={aboutImage} alt="About Us" className="about-image" />
      </div>
    </div>
  );
};

export default About;
