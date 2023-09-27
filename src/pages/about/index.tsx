import AppLayout from "@/components/layouts/AppLayout";
import React from "react";
import { ArrowDownToLine } from "lucide-react";
import SkillProgressBar from "@/components/SkillProgressBar";
const skills = [
  { skill: "HTML", percentage: 90 },
  { skill: "CSS", percentage: 75 },
  { skill: "JavaScript", percentage: 70 },
  { skill: "React", percentage: 85 },
  { skill: "Git", percentage: 90 },
  { skill: "Tailwind", percentage: 60 },
  // Add more skills as needed
];

function index() {
  return (
    <AppLayout>
      <div className="h-full px-10 py-10  md:px-20">
        <h1 className="text-5xl font-semibold text-orange-600">About me</h1>
        <p className="  mt-6 text-lg">
          As a skilled front-end engineer with a software engineering
          background, I bring a unique combination of creativity, technical
          expertise, and strategic thinking to every project. My strengths lie
          in my ability to seamlessly integrate front-end design with back-end
          functionality, creating intuitive and high-performing user
          experiences. <span className="block py-4" />I am dedicated to
          delivering innovative solutions that meet and exceed expectations.
        </p>

        <div className="my-4">
          <a
            target="_blank"
            href="https://docs.google.com/document/d/1HXD8bDyqTNBQLnzdeXIPjpCS4SxGeVqJ/edit?usp=sharing&ouid=105316960158672687233&rtpof=true&sd=true"
            className="rounded-full bg-orange-500 px-5 py-3.5 font-bold text-white hover:bg-orange-600"
          >
            view Résumé{" "}
            <ArrowDownToLine className="ml-6 inline-block h-6 w-6 rounded-full bg-orange-600 p-2 text-white shadow-md md:h-10 md:w-10" />
          </a>
        </div>

        {/* skills */}

        <div className="container mx-auto mb-6 py-8">
          <h1 className="mb-4 text-center text-5xl font-semibold text-orange-700">
            Skills
          </h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
            {skills.map((s, index) => (
              <SkillProgressBar
                key={index}
                skill={s.skill}
                percentage={s.percentage}
              />
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default index;
