function SkillBar({ name, percentage }) {
  return (
    <div className="mb-6">
      <div className="mb-2 flex justify-between">
        <span className="font-medium">{name}</span>
        <span>{percentage}%</span>
      </div>

      <div className="h-3 w-full rounded-full bg-gray-200">
        <div
          className="h-3 rounded-full bg-blue-600"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillBar;
