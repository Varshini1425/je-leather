import sectionImages from "../assets/sectionImages";

const About = () => {
  const sections = [
    {
      title: "Mission",
      content: "To deliver high-quality spares and reliable services that ensure precision and efficiency in the leather industry.",
      image: sectionImages.aboutMission,
    },
    {
      title: "Vision",
      content: "To be the global leader in innovative solutions for leather machinery, trusted by industries worldwide.",
      image: sectionImages.aboutVision,
    },
    {
      title: "Core Values",
      content: (
        <ul className="list-disc pl-6">
          <li>Quality</li>
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Customer Satisfaction</li>
        </ul>
      ),
      image: sectionImages.aboutCoreValues,
    },
    {
      title: "Why Choose Us",
      content: (
        <ul className="list-disc pl-6">
          <li>Expertise in leather machinery</li>
          <li>Precision and durability</li>
          <li>Reliable customer support</li>
          <li>Customized solutions</li>
        </ul>
      ),
      image: sectionImages.aboutWhyChooseUs,
    },
  ];

  return (
    <section
      id="about-us"
      className="py-16 px-6 sm:px-12 mb-80 bg-gradient-to-b from-charcoal-dark via-charcoal-light via-darkGreen via-metallicGold via-charcoal-light to-charcoal-dark"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold text-slate-100">
          About Us
        </h2>
        <p className="mt-6 text-base sm:text-2xl text-slate-300">
          At{" "}
          <span className="font-bold">Jothi Enterprise</span>, we specialize in
          providing precision-engineered leather machine spares and services.
          With a commitment to quality and customer satisfaction, we empower
          the leather industry with innovative, durable, and reliable solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {sections.map((section, index) => (
          <div
            key={section.title}
            className=" bg-me shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row items-stretch transform hover:scale-105"
          >
            {/* Content */}
            <div className="lg:w-1/2 p-8 flex flex-col justify-center ">
              <h3 className="text-[25px] font-semibold text-white md:text-start text-center ">
                {section.title}
              </h3>
              <div  className="mt-4  text-[20px] md:text-[18px] text-white md:text-start text-center">
                {typeof section.content === "string" ? (
                  <span>{section.content}</span>
                ) : (
                  section.content
                )}
              </div>
            </div>

            {/* Image */}
            <div className="lg:w-1/2 relative">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-80 sm:h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
