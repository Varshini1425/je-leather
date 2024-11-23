import React from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import sectionImages from "../assets/sectionImages"; // Replace with your actual image imports

const sections = [
  {
    title: "Mission",
    content: `Our mission is to empower the leather industry with precision-engineered spares and reliable services. 
    We are committed to enhancing operational efficiency, fostering innovation, and ensuring that every product we deliver meets the highest standards of quality.`,
    image: sectionImages.aboutMission,
  },
  {
    title: "Vision",
    content: `Our vision is to become the global leader in leather machinery solutions. We strive to set the industry standard for trust, innovation, and excellence, 
    building strong partnerships and enabling businesses worldwide to achieve their goals with confidence.`,
    image: sectionImages.aboutVision,
  },
  {
    title: "Core Values",
    content: `Our values define who we are and guide us in everything we do. They
          are the foundation of our commitment to delivering excellence and
          driving innovation.`,
    image: sectionImages.aboutCoreValues,
  },
  {
    title: "Why Choose Us",
    content: `We stand out for our unmatched expertise in leather machinery. Our precision-engineered products, personalized solutions, 
    and exceptional customer support ensure that you can rely on us as your trusted partner for all your needs.`,
    image: sectionImages.aboutWhyChooseUs,
  },
];

const fadeInAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-charcoal-dark to-charcoal-light"
    >
      <motion.div
        className="max-w-7xl mx-auto text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInAnimation}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-6xl md:text-7xl font-bold text-metallicGold mb-6 tracking-wider leading-tight">
          About Us
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-300 leading-relaxed">
          Delivering excellence in leather machinery with innovative and
          reliable solutions tailored to your business needs.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center mb-12 gap-8`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInAnimation}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Image Container */}
            <motion.div
              className="w-full sm:w-3/4 lg:w-1/2 aspect-[4/3] max-w-full lg:max-w-[400px] px-8 relative overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <LazyLoadImage
                src={section.image}
                alt={section.title}
                effect="blur"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content */}
            <div className="lg:w-1/2 max-w-[500px] mx-auto text-center lg:text-left">
              <motion.div>
                <h3 className="text-4xl sm:text-5xl font-semibold text-metallicGold mb-4">
                  {section.title}
                </h3>
                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
