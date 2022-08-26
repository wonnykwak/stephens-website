import React from 'react';
import ReactDom from "react-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ExperienceCards(props) {
  AOS.init();
  return (<div data-aos="fade-down">
    <table>
        <tr>
          <td style={{padding: "30px"}}>
            <div  className="experience-card-picture">
              <img className="experience-pictures" src={props.image} />
            </div>
          </td>
          <td>
            <div  className="experience-card-info">
              <h2 className="title-heading2"> {props.title} </h2>
              <p> <em> {props.date} </em>  <br /> <em> {props.location} </em> <br /> <em> {props.position} </em> </p>
              <br />
              <p> {props.description} </p>
            </div>
          </td>
      </tr>
    </table>

  </div>);

}

export default ExperienceCards;
