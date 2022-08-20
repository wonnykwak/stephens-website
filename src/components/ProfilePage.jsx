import React from 'react';
import ReactDom from "react-dom";

function ProfilePage() {
  return <div className="profile-page-div">
    <div className="profile-title"> <h1> About Me</h1> </div>
    <div className="profile-information"> <p> Information about me </p> </div>
    <div>
      <div style={{float: "left", width: "50%"}}> <p> democraphic </p></div>
      <div style={{float: "right", width: "50%"}}> <p> Images </p> </div>
    </div>
    </div>

}

export default ProfilePage;
