import React from "react";
import LandingPage from "./Pages/LandingPage";
import AllProjects from "./Pages/AllProjects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import ProjectPage from "./Pages/ProjectPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/allprojects" element={<AllProjects />}></Route>
          <Route path="/project" element={<ProjectPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
