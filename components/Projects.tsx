import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] px-5 xl:px-10  justify-center xl:space-y-7 mx-auto items-center"
    >
      <h3 className="absolute top-14 md:top-16 uppercase tracking-[20px] text-center text-gray-500 text-lg md:text-2xl">
        Projects
      </h3>

      <div className="mt-24 pb-5 mx-auto relative w-full flex items-start gap-10 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 snap-x snap-mandatory z-20">
        {/* Projects */}
        {projects?.map((project) => (
          <div
            key={project._id}
            className="w-screen h-full flex flex-col space-y-6 snap-center items-center justify-between md:p-6 user-select-none"
          >
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="w-80 aspect-video object-cover object-center rounded-xl shadow-lg pointer-events-none"
              src={urlFor(project?.image).url()}
              alt={project?.title}
              loading="lazy"
            />

            <div className="space-y-6 flex flex-col items-center">
              <h4 className="text-xl lg:text-2xl flex flex-wrap font-semibold text-center">
                <span className="text-center transition duration-300 ease-in-out hover:text-[#F7AB0A]/50">
                  {project?.title}
                </span>
              </h4>
              <div className="flex flex-wrap items-center space-x-4 justify-center">
                {project?.technologies?.map((technology) => (
                  <img
                    key={technology._id}
                    className="w-10 h-10"
                    src={urlFor(technology?.image).url()}
                    alt={`${technology?.title} logo`}
                    title={technology?.title}
                    loading="lazy"
                  />
                ))}
              </div>
              {/* <p className="hidden sm:flex text-lg text-center md:text-left">
                {project?.summary}
              </p> */}
              <div className="flex items-center space-x-8">
                <a
                  href={project?.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="projectLinks">View Github</button>
                </a>
                <a
                  href={project?.deployedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="projectLinks">View Demo</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[35%] bg-[#F7AB0A]/10 left-0 h-[380px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
