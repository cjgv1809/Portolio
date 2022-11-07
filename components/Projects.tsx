import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="mt-40 max-h-96 relative w-full flex overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 snap-x snap-mandatory z-20">
        {/* Projects */}
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-12">
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="w-80 h-auto object-cover object-center"
            src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
            alt=""
          />

          <div className="space-y-8 px-0 md:px-10 max-w-6xl">
            <h4 className="text-3xl font-semibold text-center">
              <span className="underline decoration-[#F7AB0A]/50">
                Case Study 1 of 3:
              </span>{" "}
              UPS Clone
            </h4>
            <p className="text-lg text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates neque, ut maxime quia distinctio repudiandae nisi
              tenetur cupiditate vero minima laudantium esse sint aperiam
              aliquid eveniet dolore necessitatibus ea veniam.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full absolute top-[35%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
