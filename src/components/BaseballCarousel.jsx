import React from "react";
import ReactDom from "react-dom";
import Carousel from 'react-bootstrap/Carousel';

function BaseballCarousel() {
return (
  <div className="baseball-slides">
  <div className="baseball-carousel">
  <Carousel fade>
    <Carousel.Item>
    <a href="https://google.com">
      <img className="baseball-pictures"
        src="images/bellbaseball.png"
        alt="First slide"
      />
      </a>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <video width="320" height="240" autoplay>
      <source src="video/90mph.mp4" type="video/mp4" /> 
      Your browser does not support the video tag.
    </video>


      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="baseball-pictures"
        src="images/BCP-Crest.png"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  </div>
);
}

export default BaseballCarousel;
