import React from 'react';
import ReactDom from "react-dom";
import App from "../App";

function FrontPage() {

  return <div>

  <div style={{position:"fixed", display: "flex", zIndex:"999"}}>
    <App />
  </div>

    <div className="front-page">
    <div> <h3 className="front-title-first"> Hi, I'm  </h3> <br />
    <h1 style={{lineHeight: "1"}} className="front-title"> Stephen Kwak</h1> </div>


  </div>
  </div>


}

export default FrontPage;
