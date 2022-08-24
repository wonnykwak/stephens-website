//jshint esversion:6
import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import FrontPage from "./components/FrontPage";
import ProfilePage from "./components/ProfilePage";
import EducationPage from "./components/EducationPage";
import ExperiencePage from "./components/ExperiencePage";
import ProjectPage from "./components/ProjectPage";


ReactDom.render(<FrontPage />, document.getElementById("Front-Page"));

ReactDom.render(<ProfilePage />, document.getElementById("Profile-Page"));

ReactDom.render(<EducationPage />, document.getElementById("Education-Page"));

ReactDom.render(<ExperiencePage />, document.getElementById("Experience-Page"));

ReactDom.render(<ProjectPage />, document.getElementById("Project-Page"));
