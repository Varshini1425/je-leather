import React from "react";
import jeLogo from "../assets/logo-circle.png";

const servicesData = [
  {
    id: 1,
    title: "Spares Manufacturing and Supply",
    description:
      "Precision-engineered spares that ensure durability and optimal performance.",
    details: "Custom solutions tailored to your machinery needs.",
  },
  {
    id: 2,
    title: "Machinery Maintenance and Repair Services",
    description:
      "End-to-end maintenance solutions to enhance machine longevity.",
    details: "On-site services and preventative maintenance.",
  },
  {
    id: 3,
    title: "Consultation and Custom Solutions",
    description: "Expert advice and tailor-made solutions to meet your needs.",
    details: "Consult with specialists to optimize your operations.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 px-6 min-h-screen bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="col-span-12 md:col-span-4 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-11 text-gray-800 mb">Our Services</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our services ensure the seamless operation and enhanced performance
            of leather machinery. Explore our tailored offerings designed for
            precision and reliability.
          </p>
        </div>

        {/* Right Column */}
        <div className="col-span-12 lg:col-span-8   relative flex justify-center items-center">
          {/* Center Logo */}
          <div className="relative z-10">
            <img
              src={jeLogo}
              className="rounded-full h-[200px] w-[200px] shadow-lg"
              alt="Jothi Enterprise Logo"
            />
          </div>

          {/* Surrounding Services */}
          <div className="absolute w-full h-full flex items-center justify-center">
            {servicesData.map((service, index) => {
              // Calculate positions for left, right, and bottom
              const position = [
                { x: -200, y: 0 }, // Left
                { x: 200, y: 0 }, // Right
                { x: 0, y: 200 }, // Bottom
              ][index]; // Assign specific positions to services based on index

              return (
                <div
                  key={service.id}
                  className={`absolute text-center w-48 md:mb-0 ${
                    index === 0 ? "lg:translate-x-[-200px]" : " translate-y-[230px]"
                  } ${
                    index === 1 ? "lg:translate-x-[200px] " : "translate-y-[230px]"
                  } ${
                    index === 2 ? "lg:translate-y-[200px] translate-y-[230px] " : "translate-y-[230px]"
                  }`}
                  style={
                    window.innerWidth >= 1024
                      ? { transform: `translate(${position.x}px, ${position.y}px)` }
                      : undefined
                  }
                >
                  <h3 className="text-md font-semibold text-gray-800 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                  <p className="text-xs text-gray-500">{service.details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
