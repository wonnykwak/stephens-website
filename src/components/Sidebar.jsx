import React , {useState} from "react";
import ReactDom from "react-dom";
import { Link , Router} from 'react-router-dom';
import ProfilePage from "./ProfilePage";
import EducationPage from "./EducationPage";
import ExperiencePage from "./ExperiencePage";
import ProjectPage from "./ProjectPage";
import BaseballPage from "./BaseballPage";
import ContactPage from "./ContactPage";
import { HashLink } from "react-router-hash-link";
import {FaRegular, FaBars, FaAngleLeft} from "react-icons/fa";

import SidebarItems from "./SidebarItems";


function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="Nav">
    <>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <FaAngleLeft />
              </Link>
            </li>
            {SidebarItems.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <HashLink to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </HashLink>
                </li>
              );
            })}
          </ul>
        </nav>

    </>
    </div>
  );
}

export default Sidebar;
