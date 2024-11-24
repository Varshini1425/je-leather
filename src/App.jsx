import React from "react";
import Scrollbar from "react-smooth-scrollbar";
import { motion } from "framer-motion";

import NavBar from "./components/NavBar";
import CoverPage from "./components/CoverPage";
import About from "./components/About";
import Services from "./components/Services";

const fadeInAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const App = () => {
  return (
    <>
      <NavBar />
      <Scrollbar
        damping={0.1}
        thumbMinSize={20}
        renderByPixels={true}
        alwaysShowTracks={false}
        continuousScrolling={true}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          variants={fadeInAnimation}
        >
          <CoverPage />
          <About />
          <Services />
        </motion.div>
      </Scrollbar>
    </>
  );
};

export default App;
