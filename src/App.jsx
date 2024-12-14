import React from "react";

import NavBar from "./components/NavBar";
import CoverPage from "./components/CoverPage";
import About from "./components/About";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <NavBar />
      <div>
        <CoverPage />
        <About />
        <Services />
      </div>
    </>
  );
};

export default App;
