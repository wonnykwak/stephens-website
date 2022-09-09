import React from 'react';
import ReactDom from "react-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


function EducationPage() {
  AOS.init();
  return <div id="EducationPage" className="education-page-section">

    <h1 className="education-title title-heading"> Education </h1><hr className="title-hr"/>

    <div data-aos="fade-down-right"  className="education-pomona">
        <div className="education-heading">
          <div className="pom-icon">
            <img className="pomona-logo" src= "images/pomonacollegelogo.jpg"/>
          </div>
          <div className="pomona-heading">
            <h2 className="title-heading2"> Pomona College </h2>
            <p> August 2021 - Current </p>

          </div>
          <div>
            <p> Relevant Courses: <em> Data Structures & Adv. Programming, Discrete Math & Func. Programming, Intro to Languages & Theory, Usable Security & Privacy</em></p>
          </div>

        </div>
        <hr className="title-hr"/>
        <div className="pomona-info">
          <p> My experience so far at Pomona College has been outstanding. As it was my first time being away from home, my time at Pomona truly helped me gain a sense of independence and the motivation to pursue my interests. From my time studying for finals to playing in the Regional Finals for the Pomona-Pitzer baseball team, my college experience allowed me to grow as a person. I learned that the most important thing in life is to prioritize mental health--something I strive for everyday.
          </p>
        </div>
    </div>
    <div data-aos="fade-down-left" className="education-bellarmine">
      <div className="education-heading">
        <div className="bell-icon">
          <img className="bellarmine-logo" src= "images/BCP-Crest.png"/>
        </div>
        <div className="bellarmine-heading">
          <h2 className="title-heading2"> Bellarmine College Prep </h2>
          <p> August 2017 - May 2021 </p>
        </div>
        <div>
          <p> Relevant Courses: <em> AP CS A, AP Biology, AP English Literature, AP US Government </em> </p>
        </div>
      </div>
      <hr className="title-hr"/>
        <div className="bellarmine-info">
          <p> Although cut short due to the Covid-19 pandemic, my time at Bellarmine College Preparatory was nothing short of amazing. As an All-Boys Jesuit High School, Bellarmine's education curriculum heavily focused on recognizing one's faith as well as providing high-level academics. During my time there I learned key values of leadership, brotherhood, and team-work through the school's prestigious academic curriculum and the Varsity baseball team. </p>
        </div>
    </div>


  </div>
}

export default EducationPage;
