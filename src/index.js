//jshint esversion:6
import React from "react";
import ReactDom from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from "./components/Sidebar";
import App from "./App";
import FrontPage from "./components/FrontPage";
import ProfilePage from "./components/ProfilePage";
import EducationPage from "./components/EducationPage";
import ExperiencePage from "./components/ExperiencePage";
import ProjectPage from "./components/ProjectPage";
import BaseballPage from "./components/BaseballPage";
import ContactPage from "./components/ContactPage";


ReactDom.render(<FrontPage /> , document.getElementById("Front-Page"));

ReactDom.render(<ProfilePage />, document.getElementById("Profile-Page"));

ReactDom.render(<EducationPage />, document.getElementById("Education-Page"));

ReactDom.render(<ExperiencePage />, document.getElementById("Experience-Page"));

ReactDom.render(<ProjectPage />, document.getElementById("Project-Page"));

ReactDom.render(<BaseballPage />, document.getElementById("Baseball-Page"));

ReactDom.render(<ContactPage />, document.getElementById("Contact-Page"));
