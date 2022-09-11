import React from 'react';
import ReactDom from "react-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ExperienceCards(props) {
  AOS.init();

  return (
    <div>

      <table className="experience-table">
          <tr className="experience-tr">
            <td className="experience-td-picture">
                <img className="experience-pictures" src={props.image} />
            </td>
            <td className="experience-td-info">
              <div  className="experience-card-info">
                <h2 className="title-heading2"> {props.title} </h2>
                <p> <em> {props.date} </em>  <br /> <em> {props.location} </em> <br /> <em> {props.position} </em> </p>
                <br />
                <p> {props.description}</p>
              </div>
            </td>
          </tr>
      </table>

    </div>
);

}

export default ExperienceCards;
