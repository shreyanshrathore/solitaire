import React from "react";
import LandingPage from "./Pages/LandingPage";
import AllProjects from "./Pages/AllProjects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import ProjectPage from "./Pages/ProjectPage";
import ContactPage from "./Pages/ContactPage";
import Footer from "./components/1]firstPage/Footer";
import Careers from "./Pages/CareersPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/allprojects" element={<AllProjects />}></Route>
          <Route path="/project" element={<ProjectPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/careers" element={<Careers />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
