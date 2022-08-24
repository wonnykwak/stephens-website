import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React from 'react';
import ReactDom from "react-dom";
import FrontPage from "./FrontPage";
import ProfilePage from "./ProfilePage";
import Ethics from "./Ethics";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Ethics" element={<Ethics />} />
      </Routes>
    </Router>



)


}

export default App;
