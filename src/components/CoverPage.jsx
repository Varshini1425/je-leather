import React from "react";
import { motion } from "framer-motion";

const CoverPage = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-cover-image bg-no-repeat bg-cover flex flex-col justify-center items-center text-center pt-72 text-white p-6"
    >
      {/* Main Heading */}
      <motion.h1
        className="md:text-8xl sm:text-6xl text-4xl font-bold bg-gradient-to-r from-slate-100 to-metallicGold bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        JOTHI ENTERPRISES
      </motion.h1>

      {/* Subheading */}
      <motion.h2
        className="text-xl md:text-4xl my-3 text-slate-200 font-bold mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Precision in Every Part. Reliability in Every Service.
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="mb-16 md:text-xl text-lg font-bold text-slate-300"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Delivering excellence in leather machine spares and reliable services
        that keep your operations running smoothly.
      </motion.p>

      {/* Call-to-Action Button */}
      <motion.a
        href="#services"
        className="bg-metallicGold text-charcoal-dark font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-darkGreen hover:text-slate-300 transition duration-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
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
