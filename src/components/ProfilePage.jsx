import React from 'react';
import ReactDom from "react-dom";

function ProfilePage() {
  return <div className="profile-page-div">
    <div className="profile-title"> <h1> About Me</h1> </div>
    <div className="profile-information"> <p> Information about me: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p> </div>
    <div>
      <div className="profile-demographic"> <h1> More Details </h1> <p> Age: 19 </p> </div>
      <div className="profile-pictures-section"> <img className="profile-picture" src="images/profilepic.jpg" /> </div>
    </div>
    </div>

}

export default ProfilePage;
