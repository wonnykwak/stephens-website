import React from "react";
import ReactDom from "react-dom";
import Carousel from 'react-bootstrap/Carousel';

function BaseballCarousel() {
return (
  <div className="baseball-slides">
  <div className="baseball-carousel">
  <Carousel fade>
    <Carousel.Item>
      <img className="baseball-pictures"
        src="images/C27A1298.JPG"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img className="baseball-pictures"
        src="images/C27A1319.JPG"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img className="baseball-pictures"
        src="images/C27A1320.JPG"
        alt="First slide"
      />
    </Carousel.Item>
    
  </Carousel>
  </div>
  </div>
);
}

export default BaseballCarousel;
