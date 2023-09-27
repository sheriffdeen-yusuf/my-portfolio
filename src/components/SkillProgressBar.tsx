import React from "react";

const SkillProgressBar = ({ skill, percentage }: any) => {
  return (
    <div className="mb-4">
      <div className="mb-1 flex items-center justify-between">
        <span className="font-semibold">{skill}</span>
        <span className="text-orange-500">{percentage}%</span>
      </div>
      <div className="relative h-4 rounded-full bg-orange-200">
        <div
          className="absolute h-full rounded-full bg-orange-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillProgressBar;
