import React, { useState } from "react";

import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Projectcard from "./Component/Projectcard/Projectcard";
import Trending from "./Component/Trending/Trending";
import Footer from "./Component/Footer/Footer";
import Scrolldown from "./Component/Scrolldown/Scrolldown";
import AboutMe from "./Component/Aboutme/Aboutme";
import Skill from "./Component/Skill/Skill";
import Contact from "./Component/Contact/Contact";
import Project from "./Component/Project/Project";


function App() {
  // Track current page: home, about, skill, contact, project
  const [page, setPage] = useState("home");

  // Navigate to a page
  const navigate = (pageName) => setPage(pageName);

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar navigate={navigate} currentPage={page} />

      {/* Page content */}
      {page === "home" && (
        <>
          <Hero />
          <Projectcard />
          <Trending />
          <Scrolldown />
           {/* make sure Landing.jsx is inside Component/Landing/ */}
        </>
      )}

      {page === "about" && <AboutMe />}
      {page === "skill" && <Skill />}
      {page === "contact" && <Contact />}
      {page === "project" && <Project />} {/* Projects page */}

      {/* Footer */}
      <Footer navigate={navigate} currentPage={page} />
    </div>
  );
}

export default App;
