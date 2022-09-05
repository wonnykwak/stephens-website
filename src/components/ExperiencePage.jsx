import React from 'react';
import ReactDom from "react-dom";
import ExperienceCards from "./ExperienceCards";
import experiences from "./experiences";

function ExperiencePage() {

  return <div id="ExperiencePage" className="experience-page-section">
      <h1 className="experience-title title-heading"> My Experiences </h1>
        <hr className="title-hr"/>
        <div className="experience-cards">
          {experiences.map((cards) => {
            return (<ExperienceCards key={cards.key} title={cards.title} date={cards.date} location={cards.location} position={cards.position} image={cards.image} description={cards.description} link = {cards.link}/> );
          })}

        </div>
    </div>

}


export default ExperiencePage;
