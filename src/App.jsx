import { HashRouter, Route, Routes, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import React from 'react';
import ReactDom from "react-dom";
import ProfilePage from "./components/ProfilePage";
import SideBar from "./components/Sidebar";
import FrontPage from "./components/FrontPage";
import EducationPage from "./components/EducationPage";
import ExperiencePage from "./components/ExperiencePage";
import ProjectPage from "./components/ProjectPage";
import BaseballPage from "./components/BaseballPage";
import ContactPage from "./components/ContactPage";


function App() {
  return (

    <HashRouter>
      <SideBar />
    </HashRouter>


)


}

export default App;
