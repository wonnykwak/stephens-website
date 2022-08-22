import React from 'react';
import ReactDom from "react-dom";
import ExperienceCards from "./ExperienceCards";
import experiences from "./experiences";

function ExperiencePage() {

  return <div className="experience-page-section">
      <h1 className="experience-title"> My Experiences </h1>

      {experiences.map((cards) => {
        return (<ExperienceCards key={cards.key} title={cards.title} date={cards.date} location={cards.location} position={cards.position} image={cards.image} description={cards.description}/> );
      })}
      <ExperienceCards />
    </div>
    
}


export default ExperiencePage;
