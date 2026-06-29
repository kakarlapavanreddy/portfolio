import aboutData from "../../data/aboutData";
import AboutCard from "./AboutCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";

function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle title="About Me" subtitle="Get to know me better" />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Image */}

          <div>
            <img
              src={aboutData.image}
              alt="About"
              className="mx-auto h-[450px] w-[350px] rounded-2xl object-cover shadow-xl"
            />
          </div>

          {/* Right Content */}

          <div>
            <h2 className="text-4xl font-bold">{aboutData.title}</h2>

            <p className="mt-6 leading-8 text-gray-600">{aboutData.subtitle}</p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {aboutData.stats.map((item) => (
                <AboutCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>

            <div className="mt-10">
              <Button text="Download CV" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
