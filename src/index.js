import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import FrontPage from "./components/FrontPage";
import ProfilePage from "./components/ProfilePage";


ReactDom.render(<FrontPage />, document.getElementById("Front-Page"));

ReactDom.render(<ProfilePage />, document.getElementById("Profile-Page"));


// ReactDom.render(<div>
//   <img style={{width: "100%", margin: "0, 0, 0, 0"}}src="images/frontpage.jpg" alt="Front page"/></div>, document.getElementById("Front-Page"));

//ReactDom.render(<frontPage />,
    //document.getElementById("Front-Page"));
