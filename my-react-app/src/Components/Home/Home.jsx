import React from 'react';
import HomeCarousel from './HomeCarousel';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
             <HomeCarousel></HomeCarousel>
      
      <div className="content-wrapper">
        <div className="content-box">
          <h2 className="fs-1 mb-5 text-uppercase fw-bold">About us</h2>
          <p>Welcome to BadBoyZ Paradise, where luxury meets unparalleled hospitality.
              Nestled in the heart of the city, our establishment is more than just a destination—it's an experience.
              From the moment you step through our doors, you'll be enveloped in an atmosphere of sophistication and style.
              Whether you're here to indulge in our gourmet cuisine, unwind with our signature cocktails, or simply enjoy the vibrant ambiance, we promise a stay that will leave you wanting more.
          </p>
          <p className="mb-5">At BadBoyZ Paradise, we believe in the finer things in life.
              Our team is dedicated to providing top-notch service, ensuring that every moment you spend with us is memorable.
              With a blend of modern elegance and timeless comfort, we offer an escape from the ordinary, inviting you to relax, rejuvenate, and revel in the luxury you deserve.
          </p>
          <Link to="/about">
            <button type="button" className="btn btn-outline-success btn-lg">More About Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
