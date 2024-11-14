import React from 'react';

const CoverPage = () => {
  return (
    <section id="home" className="h-screen bg-cover-image bg-no-repeat bg-cover flex flex-col justify-center items-center text-center pt-48 text-white p-6">
      {/* Title */}
      <h1 className=" md:text-8xl sm:text-6xl text-4xl font-bold bg-gradient-to-r from-slate-100 to-metallicGold  bg-clip-text text-transparent">
        JOTHI ENTERPRISES
      </h1>

      {/* Tagline */}
      <p className="text-lg md:text-2xl text-slate-300 font-medium mb-8">
        Precision in Every Part. Reliability in Every Service.
      </p>

      {/* Call-to-Action Button */}
      <a href="#services" className="bg-metallicGold text-charcoal-dark font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-darkGreen hover:text-slate-300 transition duration-300">
        Explore Our Services
      </a>
    </section>
  );
}

export default CoverPage;
