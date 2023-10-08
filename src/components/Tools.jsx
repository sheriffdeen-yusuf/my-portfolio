import Image from "next/image";
import React from "react";

const ToolImages = [
  {
    name: "mui5",
    type: "svg",
  },
  //   {
  //     name: "next",
  //     type: "svg",
  //   },
  {
    name: "radix",
    type: "svg",
  },
  {
    name: "react-query",
    type: "svg",
  },
  {
    name: "reactHookForm",
    type: "svg",
  },
  {
    name: "styledComponent",
    type: "svg",
  },
  {
    name: "supabase",
    type: "svg",
  },
];
function Tools() {
  return (
    <div className="mb-8 flex items-end justify-center gap-2">
      {ToolImages.map((logo, idx) => (
        <Image
          key={idx}
          src={`/${logo.name}.${logo.type}`}
          alt="logo"
          width={30}
          height={40}
          className=" max-h-[3rem]  min-h-[3rem] w-[3rem] rounded-md  object-cover md:max-h-[5rem] md:min-h-[5rem] md:w-[6rem]"
        />
      ))}
    </div>
  );
}

export default Tools;
