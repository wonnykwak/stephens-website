import React from "react";
import ReactDom from "react-dom";
import BaseballCarousel from "./BaseballCarousel";

function BaseballPage() {
  return (
    <div id="BaseballPage" className="baseball-div">
    <br />
      <h1 className="baseball-heading title-heading"> Baseball </h1><hr className="title-hr"/>
      <br />
      <p> After moving to the United States as an immigrant from South Korea, baseball was how I found my place in my community. From little league to now collegiate baseball, I made friends that will last a lifetime... When first starting baseball I realized I had a talent for pitching, and come to high school I decided to fully commit to that position. Initially, I played as a hobby and exercise, but in high school, I decided that I wanted to continue playing baseball in college. This only made me love the game even more. I love team comradery when we play for a common goal, and I also love competitiveness when we push each other to reach our fullest potential. </p>
      <p> I now play for the Pomona-Pitzer Sagehens Varsity baseball team as a pitcher. I recently came back from playing summer collegiate baseball for the Syracuse Spartans in Syracuse, New York. I plan on continuing baseball as long as I can and hope to translate my experiences on the field into the workforce in the future. </p>
      <BaseballCarousel / >
    </div>
  )

}

export default BaseballPage;
