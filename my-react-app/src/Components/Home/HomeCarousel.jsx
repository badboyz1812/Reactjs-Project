
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import './HomeCarousel.css'
import { MenuBtn } from "../Button/MenuBtn";


function HomeCarousel() {
  return (
    
    <Carousel fade className="fullscreen-carousel">
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src={img1} alt="First slide" />
        <Carousel.Caption className="carousel-caption-centered">
          <div className='header-content text-light-shadow'>
            <h2 className="mb-0 text-white fw-bold">Say Hello to luxury at</h2>
            <h1 className="mb-6 text-white fw-bold">BadBoyZ Paradise</h1>
            <MenuBtn />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src={img2} alt="Second slide" />
        <Carousel.Caption className="carousel-caption-centered">
          <div className='header-content text-light-shadow'>
            <h2 className="mb-0 text-white fw-bold">Say Hello to luxury at</h2>
            <h1 className="mb-6 text-white fw-bold">BadBoyZ Paradise</h1>
            <MenuBtn />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src={img3} alt="Third slide" />
        <Carousel.Caption className="carousel-caption-centered">
          <div className='header-content text-light-shadow'>
            <h2 className="mb-0 text-white fw-bold">Say Hello to luxury at</h2>
            <h1 className="mb-6 text-white fw-bold">BadBoyZ Paradise</h1>
            <MenuBtn />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
