import React from 'react';
import ReactDom from "react-dom";
import App from "../App";
import $ from "jquery";
import AOS from 'aos';
import 'aos/dist/aos.css';


function ProfilePage() {
  $(function() {
            AOS.init();
       });
  return <div id="ProfilePage" className="profile-page-div">

    <div className="profile-title-div"> <h1 className="profile-title title-heading"> About Me</h1>  <hr className="title-hr"/></div>
    <div className="profile-intro"> <p > Hey! My name is Stephen Kwak. I'm a 19-year-old student at Pomona College currently majoring in Computer Science. Originally from Seoul, South Korea, I am now located in San Jose, California.  At school, I play for the Pomona-Pitzer Varsity Baseball team as a pitcher. I'm interested in pursuing my passion for Software Development and Artificial Intelligence in the future. I believe in working as a team, hard work, and trying new things... So please reach out!</p> </div>
    <div className="prof-info">
      <div className="profile-demographic" >
        <h2 className="title-heading2"> More Details </h2>
        <table className="profile-table" style={{textAlign: "left"}}>
          <tr>
            <td>
              <p> Age:  </p>
            </td>
            <td style={{paddingLeft: "10px"}}>
              <p> 19 </p>
            </td>
          </tr>
          <tr>
            <td>
              <p> Name:   </p>
            </td>
            <td style={{paddingLeft: "10px"}}>
              <p> Stephen Yong Won Kwak </p>
            </td>
          </tr>
          <tr>
            <td>
              <p> Location:  </p>
            </td>
            <td style={{paddingLeft: "10px"}}>
              <p> San Jose, CA </p>
            </td>
          </tr>
          <tr>
            <td>
              <p> Hobbies:  </p>
            </td>
            <td style={{paddingLeft: "10px"}}>
              <p> Golfing, Lifting, Baseball </p>
            </td>
          </tr>
          <tr>
            <td>
              <p> Favorite Food:  </p>
            </td>
            <td style={{paddingLeft: "10px"}}>
              <p> Maeun Galbi JJim (매운갈비찜) </p>
            </td>
          </tr>
          <tr>
            <td>
              <p> Current Show:  </p>
            </td>
            <td style={{paddingLeft: "10px"}}>
              <p> One Piece </p>
            </td>
          </tr>
        </table>
      </div>
      <div className="profile-pictures-section"> <img className="profile-picture" src="images/profilepic-modified.png" /> </div>

    </div>
    </div>

}

export default ProfilePage;
