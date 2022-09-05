import React from "react";

import ProfilePage from "./ProfilePage";
import EducationPage from "./EducationPage";
import ExperiencePage from "./ExperiencePage";
import ProjectPage from "./ProjectPage";
import BaseballPage from "./BaseballPage";
import ContactPage from "./ContactPage";

const SidebarItems = [
  {
    title: 'Profile',
    path: '#ProfilePage',
    cName: 'nav-text'
  },
  {
    title: 'Education',
    path: '#EducationPage',
    cName: 'nav-text'
  },
  {
    title: 'Experiences',
    path: '#ExperiencePage',

    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: '#ProjectPage',

    cName: 'nav-text'
  },
  {
    title: 'Baseball',
    path: '#BaseballPage',

    cName: 'nav-text'
  },
  {
    title: 'Contact Me',
    path: '#ContactPage',

    cName: 'nav-text'
  }
];

export default SidebarItems;
