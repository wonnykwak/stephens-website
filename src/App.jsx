import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import React from 'react';
import ReactDom from "react-dom";
import FrontPage from "./components/FrontPage";
import ProfilePage from "./components/ProfilePage";
import Ethics from "./components/Ethics";
import NavBar from "./components/Sidebar.jsx";
import Extra from "./components/extra";


function App() {
  return (
    <Router>
      <NavBar />
      <HashLink to="#ProfilePage">
        ProfilePage
      </HashLink>

      // <Routes>
      //   <Route path="/extra" element={<ProfilePage />} />
      // </Routes>
    </Router>



)


}

export default App;
