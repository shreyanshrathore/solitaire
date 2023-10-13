import React, { useState } from "react";
import LandingPage from "./Pages/LandingPage";
import AllProjects from "./Pages/AllProjects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import ProjectPage from "./Pages/ProjectPage";
import ContactPage from "./Pages/ContactPage";
import Footer from "./components/1]firstPage/Footer";
import Careers from "./Pages/CareersPage";
import Aboutus from "./Pages/Aboutus";

const App = () => {
  const [info, setInfo] = useState(null)
  return (
    <div className="bg-white">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<LandingPage setInfo = {setInfo}/>}></Route>
          <Route path="/allprojects" element={<AllProjects setInfo = {setInfo}/>}></Route>
          <Route path="/project" element={<ProjectPage info = {info}/>}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/careers" element={<Careers />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;