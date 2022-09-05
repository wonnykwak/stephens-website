import React from "react";
import ReactDom from "react-dom";
import {FaBrands, FaLinkedin, FaSolid, FaAt} from "react-icons/fa";

function ContactPage() {
  return (<div id="ContactPage" className="contact-div">
      <h1 className="title-heading contact-heading"> Contact Me! </h1>
      <hr className="title-hr"/>
      <div style={{textAlign: "center", paddingTop:"2.5%" }}>
        <h2 className="title-heading2"> I'm just a kid from Daejun, South Korea studying in Pomona, CA </h2>
        <br />
        <h2 className="title-heading2" style={{color: "white", paddingBottom: "2%"}}> Let's connect! </h2>
      </div>
      <div>
        <table className="contact-table" >
          <tr>
            <td >
              <FaAt style={{fontSize: "1.7rem"}}/>
            </td>

            <td>
              <a href= "mailto:wonnykwak@gmail.com" style={{color: "black", fontSize: "1rem"}}> wonnykwak@gmail.com </a>
            </td>
          </tr>
          <tr>
            <td>
              <FaLinkedin style={{fontSize: "1.7rem"}}/>
            </td>
            <td>
              <a href= "https://linkedin.com/in/stephen-kwak" style={{color: "black", fontSize: "1rem"}}> linkedin.com/in/stephen-kwak </a>
            </td>
          </tr>

        </table>



      </div>





  </div> )

}

export default ContactPage;
