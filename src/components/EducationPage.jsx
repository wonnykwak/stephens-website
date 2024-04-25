import React from 'react';
import ReactDom from "react-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


function EducationPage() {
  AOS.init();
  return <div id="EducationPage" className="education-page-section">

    <h1 className="education-title title-heading"> Education </h1><hr className="title-hr"/>
    <div className="education-pomona">
        <div className="education-heading">
          <div className="pom-icon">
            <img className="pomona-logo" src= "images/pomonacollegelogo.jpg"/>
          </div>
          <div className="pomona-heading">
            <h2 className="title-heading2"> Pomona College </h2>
            <p> August 2021 - Current </p>

          </div>
          <div className="education-classes">
            <p> Relevant Courses: <em> Probability, Algorithms, Computer Systems, Calc III, Intro to Languages and Theory, Usable Security and Privacy, Data Structures & Adv. Programming, Discrete Math & Func. Programming, Intro to Languages & Theory, Usable Security & Privacy</em></p>
          </div>

        </div>
        {/* <hr className="title-hr"/>
        <div className="pomona-info">
          <p> My experience so far at Pomona College has been outstanding. As it was my first time being away from home, my time at Pomona truly helped me gain a sense of independence and the motivation to pursue my interests. From my time studying for finals to playing in the Regional Finals for the Pomona-Pitzer baseball team, my college experience allowed me to grow as a person. I learned that the most important thing in life is to prioritize mental health--something I strive for everyday.
          </p>
        </div> */}
    </div>
    <div className="education-bellarmine">
      <div className="education-heading">
        <div className="bell-icon">
          <img className="bellarmine-logo" src= "images/edi.jpeg"/>
        </div>
        <div className="bellarmine-heading">
          <h2 className="title-heading2"> University of Edinburgh </h2>
          <p> August 2023 - December 2024 </p>
        </div>
        <div className="education-classes">
          <p> Relevant Courses: <em> Introduction to Databases </em> </p>
        </div>
      </div>
      {/* <hr className="title-hr"/>
        <div className="bellarmine-info">
          <p> I was able to study abroad at the University of Edinburgh during my Fall 2023 semester.  </p>
        </div> */}
    </div>


  </div>
}

export default EducationPage;
