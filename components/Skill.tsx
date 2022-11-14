import React from "react";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  directionLeft?: boolean;
  skill: SkillType;
};

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group cursor-pointer flex flex-col justify-center items-center">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className="rounded-full w-14 h-14 object-cover border border-gray-500 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="">
        <p className="text-base font-bold opacity-100 text-white">
          {skill?.title}
        </p>
      </div>
    </div>
  );
}

export default Skill;
