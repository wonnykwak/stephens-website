import React from 'react';
import ReactDom from "react-dom";

function ExperienceCards(props) {
  return (<div>
    <table cellspacing="20px">
        <tr>
          <td style={{padding: "30px"}}>
            <div className="experience-card-picture">
              <img className="experience-pictures" src={props.image} />
            </div>
          </td>
          <td>
            <div className="experience-card-info">
              <h2> {props.title} </h2>
              <p> {props.date} </p>
              <p> {props.location} </p>
              <p> {props.position} </p>
              <br />
              <p> {props.description} </p>
            </div>
          </td>
      </tr>
    </table>





  </div>);

}

export default ExperienceCards;
