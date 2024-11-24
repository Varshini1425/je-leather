import React from "react";
import { motion } from "framer-motion";

const CoverPage = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover-image bg-no-repeat bg-cover flex flex-col justify-center items-center text-center pt-40 text-white p-6"
    >
      {/* Overlay for dimming the background */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      {/* Content */}
      <motion.h1
        className="md:text-8xl sm:text-6xl text-4xl font-bold bg-gradient-to-r from-slate-100 to-metallicGold bg-clip-text text-transparent z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        JOTHI ENTERPRISES
      </motion.h1>

      <motion.h2
        className="text-xl md:text-4xl my-3 text-slate-200 font-bold mb-8 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
      >
        Precision in Every Part. Reliability in Every Service.
      </motion.h2>

      <motion.p
        className="mb-16 md:text-xl text-lg font-bold text-slate-300 z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      >
        Delivering excellence in leather machine spares and reliable services
        that keep your operations running smoothly.
      </motion.p>

      <motion.a
        href="#services"
        className="bg-gradient-to-bl from-metallicGold to-slate-100 text-charcoal-dark font-semibold py-2 px-5 md:py-3 md:px-8 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-darkGreen hover:to-charcoal-light hover:text-slate-300 transition duration-300 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
        }}
      >
        Explore Our Services
      </motion.a>
    </section>
  );
};

export default CoverPage;
