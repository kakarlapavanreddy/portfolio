import SectionTitle from "../SectionTitle/SectionTitle";
import SkillCard from "./SkillCard";
import skillsData from "../../data/skillsData";

function Skills() {
  return (
    <section id="skills" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle title="My Skills" subtitle="Technologies I Work With" />

        <div className="grid gap-8 lg:grid-cols-2">
          <SkillCard title="Frontend" skills={skillsData.frontend} />

          <SkillCard title="Backend" skills={skillsData.backend} />
        </div>
      </div>
    </section>
  );
}

export default Skills;
