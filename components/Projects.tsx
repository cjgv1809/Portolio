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
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row px-10 justify-evenly items-center mx-auto"
    >
      <h3 className="absolute top-14 md:top-16 uppercase tracking-[20px] text-center text-gray-500 text-lg md:text-2xl">
        Projects
      </h3>

      <div className="mt-24 relative w-full flex overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 snap-x snap-mandatory z-20">
        {/* Projects */}
        {projects?.map((project, index) => (
          <div
            key={project._id}
            className="w-screen flex flex-col max-w-sm  mx-auto snap-center space-y-6 items-center justify-center md:p-6 bg-[#242424]/80 border border-slate-200/20 rounded-lg"
          >
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="w-80 h-auto object-contain object-center"
              src={urlFor(project?.image).url()}
              alt={project?.title}
            />

            <div className="space-y-8 px-0 md:px-10 max-w-3xl mx-auto">
              <h4 className="text-3xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  {project?.title}
                </span>
              </h4>
              <div className="flex items-center space-x-4 justify-center">
                {project?.technologies?.map((technology) => (
                  <img
                    key={technology._id}
                    className="w-10 h-10 mb-5 sm:mb-0"
                    src={urlFor(technology?.image).url()}
                    alt={`${technology?.title} logo`}
                    title={technology?.title}
                  />
                ))}
              </div>
              {/* <p className="hidden sm:flex text-lg text-center md:text-left">
                {project?.summary}
              </p> */}
              <div className="flex items-center space-x-4">
                <a
                  href={project?.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="heroButton shadow-2xl shadow-[#F7AB0A]">
                    Github
                  </button>
                </a>
                <a
                  href={project?.deployedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="heroButton shadow-2xl shadow-[#F7AB0A]">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[35%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
