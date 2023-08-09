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
        viewport={{ once: true }}
        src={urlFor(skill?.image).url()}
        className="rounded-full w-16 h-16 object-contain border border-gray-500 p-2 bg-white group-hover:shadow-md group-hover:shadow-white transition duration-200 ease-in-out"
      />
      <div className="">
        <p className="text-base font-bold opacity-100 text-white group-hover:scale-110 transition duration-200 ease-in-out">
          {skill?.title}
        </p>
      </div>
    </div>
  );
}

export default Skill;
