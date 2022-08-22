import React from 'react';
import ReactDom from "react-dom";

function EducationPage() {
  return <div className="education-page-section">
    <h1 className="education-title"> Education </h1>

    <div className="education-pomona">
        <div style={{float: "right", width: "40%"}}>
          <img className="pomona-logo" src= "images/pomonacollegelogo.jpg"/>
        </div>
        <div className="pomona-heading" style={{float: "left", width: "60%"}}>
          <h2> Pomona College </h2>
          <p> August 2021 - Current </p>
        </div>
        <div className="pomona-info">
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

    </div>
    <div className="education-bellarmine">
      <div style={{float: "right", width: "30%"}}>
        <img className="bellarmine-logo" src= "images/BCP-Crest.png"/>
      </div>
      <div className="bellarmine-heading">
        <h2> Bellarmine College Preparatory </h2>
        <p> August 2017 - May 2021 </p>
      </div>

      <div className="bellarmine-info">
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

    </div>



  </div>
}

export default EducationPage;
