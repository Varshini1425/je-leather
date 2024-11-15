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
        <ul className="list-disc list-inside">
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
        <ul className="list-disc list-inside">
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
    <section id="about-us" className="bg-gray-100 py-12 px-6 sm:px-12 mb-80">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
          About Us
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-600">
          At{" "}
          <span className="text-green-600 font-semibold">Jothi Enterprise</span>
          , we specialize in providing precision-engineered leather machine
          spares and services. With a commitment to quality and customer
          satisfaction, we empower the leather industry with innovative,
          durable, and reliable solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 max-w-7xl mx-auto">
        {sections.map((section, index) => (
          <div
            key={section.title}
            className={`flex flex-col lg:flex-row items-center lg:space-x-6 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            <div className="lg:w-1/2 p-6 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">{section.title}</h3>
              <p className="mt-2 text-gray-600">{section.content}</p>
            </div>
            <div className="lg:w-1/2 mt-6 lg:mt-0">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
