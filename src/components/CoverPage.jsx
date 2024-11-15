import React from 'react';

const CoverPage = () => {
  return (
    <section id="home" className="h-screen bg-cover-image bg-no-repeat bg-cover flex   flex-col justify-center items-center text-center pt-72 text-white p-6">
      
      <h1 className=" md:text-8xl sm:text-6xl text-4xl font-bold bg-gradient-to-r from-slate-100 to-metallicGold  bg-clip-text text-transparent">
        JOTHI ENTERPRISES
      </h1>

     
      <h2 className="text-xl md:text-4xl my-3 text-slate-200 font-bold mb-8">
      Precision in Every Part. Reliability in Every Service.
      </h2>
     <p className='mb-16  md:text-xl text-lg font-bold text-slate-300'>
     Delivering excellence in leather machine spares and reliable services that keep your operations running smoothly.
     </p>

     
      <a href="#services" className="bg-metallicGold text-charcoal-dark font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-darkGreen hover:text-slate-300 transition duration-300">
        Explore Our Services
      </a>
    </section>
  );
}

export default CoverPage;
