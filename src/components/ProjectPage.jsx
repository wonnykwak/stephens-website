import React from 'react';
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";




function ProjectPage() {

  return (
    <div>
    <h2> My Project</h2>
    <a href="ethicsresearch.html"><img className="project-pictures" src="images/cuboulderimg.jpg"/></a>


    <img className="project-pictures" src="images/airesearchpaper.png"/>
    <img className="project-pictures" src="images/stanfordneurodiversity.jpeg"/>
</div>
)
}

export default ProjectPage;
