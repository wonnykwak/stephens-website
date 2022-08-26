import React from "react";
import ReactDom from "react-dom";
import BaseballCarousel from "./BaseballCarousel";

function BaseballPage() {
  return (
    <div>
    <br />
      <h1 className="baseball-heading title-heading"> Baseball </h1><hr className="title-hr"/>
      <br />
      <BaseballCarousel / >
    </div>
  )

}

export default BaseballPage;
