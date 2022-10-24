import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group cursor-pointer flex flex-col justify-center items-center">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
        className="rounded-full w-14 h-14 object-cover border border-gray-500 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="">
        <p className="text-base font-bold opacity-100 text-white">JavaScript</p>
      </div>
    </div>
  );
}

export default Skill;
