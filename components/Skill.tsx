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
    <div className="group cursor-pointer flex flex-col justify-between items-center">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
        src={urlFor(skill?.image).url()}
        className="rounded-full w-16 h-16 object-contain border-4 border-gray-500 p-2 bg-white/20"
        alt={skill?.title}
        title={skill?.title}
      />
      <div className="">
        <motion.p className="text-base font-bold opacity-100 text-white">
          {skill?.title}
        </motion.p>
      </div>
    </div>
  );
}

export default Skill;
