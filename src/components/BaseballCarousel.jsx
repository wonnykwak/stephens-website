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
        src="images/baseball1.jpeg"
        alt="First slide"
      />
    </Carousel.Item>

    <Carousel.Item>
      <img className="baseball-pictures"
        src="images/baseball2.jpeg"
        alt="First slide"
      />
    </Carousel.Item>

    <Carousel.Item>
      <img className="baseball-pictures"
        src="images/bellbaseball.png"
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
  </div>
  </div>
);
}

export default BaseballCarousel;
