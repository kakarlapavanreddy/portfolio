import SkillBar from "./SkillBar";

function SkillCard({ title, skills }) {
  return (
    <div className="rounded-xl bg-white p-8 shadow-lg">
      <h3 className="mb-8 text-2xl font-bold">{title}</h3>

      {skills.map((skill) => (
        <SkillBar
          key={skill.id}
          name={skill.name}
          percentage={skill.percentage}
        />
      ))}
    </div>
  );
}

export default SkillCard;
