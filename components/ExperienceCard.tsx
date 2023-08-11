import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  return (
    <article className="flex flex-col rounded-lg items-center flex-shrink-0 w-96 max-h-96 overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 snap-center bg-[#292929] p-10 mt-20 hover:scale-105 hover:bg-[#F7AB0A]/10 cursor-pointer transition duration-300 ease-in-out overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt={experience?.companyName}
      />

      <div className="px-0 md:px-10">
        <p className="font-light text-xl">{experience?.companyName}</p>
        <h4 className="text-2xl font-bold mt-3">{experience?.jobTitle}</h4>
        <div className="flex justify-center items-center flex-wrap gap-2 my-2">
          {experience.technologies?.map((technology) => (
            <img
              className="w-10 h-10 rounded-full object-cover object-center"
              key={technology._id}
              src={urlFor(technology.image).url()}
              alt={technology?.title}
              title={technology?.title}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-400 text-xs font-light">
          {new Date(experience?.startDate).toLocaleDateString()} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.endDate).toLocaleDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5">
          {experience?.points?.map((point, index) => (
            <li key={index} className="text-sm text-gray-300 font-medium">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
