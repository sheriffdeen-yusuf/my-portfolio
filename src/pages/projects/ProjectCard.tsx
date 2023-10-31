import { ProjectCardProps } from "@/interface/app.interface";
import Image from "next/image";
import React from "react";

function ProjectCard({ title, desc, image, link }: ProjectCardProps) {
  return (
    <div className=" max-w-md  overflow-hidden rounded-xl bg-white shadow-lg dark:bg-stone-700">
      <Image
        className="h-48 w-full object-cover"
        src={image}
        alt="Work Image"
        width={300}
        height={400}
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className="text-base text-gray-700 dark:text-stone-300">{desc}</p>
      </div>
      <div className="px-6 py-4">
        <a
          href={link}
          className="rounded-full bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-600"
        >
          View Details
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
