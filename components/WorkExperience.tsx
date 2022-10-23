import React from "react";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <div className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly items-center mx-auto">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Work Experience
      </h3>
    </div>
  );
}

export default WorkExperience;
