import React from "react";
import ReactDom from "react-dom";
import {FaAt, FaLinkedin, FaFileAlt, FaGithub } from "react-icons/fa";
import { Tooltip } from 'reactstrap';

function ContactPage() {
  return (
    <div id="ContactPage" className="contact-div">
      <h1 className="title-heading contact-heading">Contact Me!</h1>
      <hr className="title-hr"/>
      <div style={{ textAlign: "center", paddingTop: "2.5%" }}></div>
      <table className="contact-table">
        <tbody>
          <tr>
            <td>
              <a href="mailto:wonnykwak@gmail.com">
                <FaAt style={{ fontSize: "2rem", color: "black" }} id="EmailIcon"/>
                <Tooltip placement="top" isOpen={false} target="EmailIcon" toggle={() => {}}>
                  wonnykwak@gmail.com
                </Tooltip>
              </a>
            </td>
            <td>
              <a href="https://linkedin.com/in/stephen-kwak">
                <FaLinkedin style={{ fontSize: "2rem", color: "black" }} id="LinkedInIcon"/>
                <Tooltip placement="top" isOpen={false} target="LinkedInIcon" toggle={() => {}}>
                  linkedin.com/in/stephen-kwak
                </Tooltip>
              </a>
            </td>
            <td style={{ textAlign: "center" }}>
              <a href="https://github.com/wonnykwak">
                <FaGithub style={{ fontSize: "2rem", color: "black" }} id="ResumeIcon"/>
                <Tooltip placement="top" isOpen={false} target="ResumeIcon" toggle={() => {}}>
                  Link to resume
                </Tooltip>
              </a>
            </td>
         </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ContactPage;
