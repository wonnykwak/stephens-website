import React , {useState} from 'react';
import ReactDom from "react-dom";
import Carousel from 'react-bootstrap/Carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';

function CarouselFadeExample() {
  return (
    <div className="project-slides">
    <div className="project-carousel">
    <Carousel fade>
      <Carousel.Item>
      <a href="https://google.com">
        <img className="carousel-pictures"
          src="images/hwarang1.jpeg"
          alt="First slide"
        />
        </a>
        <Carousel.Caption style={{color: "#1C3879", webkitTextStroke:"0.7px white"}}>
          <h3>Blankets for Needy Drive</h3>
          <p>Fundraised to donate blankets to CityTeam Homeless Shelter</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-pictures"
          src="images/hwarang4.jpeg"
          alt="Fourth slide"
        />

        <Carousel.Caption style={{color: "#1C3879", webkitTextStroke:"0.7px white"}}>
          <h3>CityTeam Volunteering</h3>
          <p>
            Volunteering at CityTeam distributing food.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-pictures"
          src="images/hwarang.png"
          alt="Second slide"
        />

        <Carousel.Caption style={{color: "#1C3879", webkitTextStroke:"0.7px white"}}>
          <h3>Give Sanitizer, Prevent Covid-19</h3>
          <p>Sanitizer/Toiletries drive to donate to CityTeam</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-pictures"
          src="images/hwarang3.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption style={{color: "#1C3879", webkitTextStroke:"0.7px white"}}>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <iframe width="100%" height="450" src="https://www.youtube.com/embed/cxpISkR84xc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <Carousel.Caption style={{color: "#1C3879", webkitTextStroke:"0.7px white"}}>
          <h3>Hwarang Introduction</h3>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  );
}

export default CarouselFadeExample;
