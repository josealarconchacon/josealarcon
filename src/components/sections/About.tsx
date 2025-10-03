import { EDUCATION, SUMMARY } from "@/data/about";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Education */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold">Education</h2>
            <div className="space-y-6">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-400">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold">Summary</h2>
            {SUMMARY.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
