import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] px-5 xl:px-10  justify-center xl:space-y-7 mx-auto items-center"
    >
      <h3 className="absolute top-14 md:top-16 uppercase tracking-[20px] text-center text-gray-500 text-lg md:text-2xl">
        About
      </h3>

      <div className="flex flex-col items-center md:flex md:flex-row md:items-center">
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          src={urlFor(pageInfo?.profilePicture).url()}
          alt={`${pageInfo?.name} photo`}
          className="mt-20 md:mt-0 flex-shrink-0 w-28 h-28 sm:w-56 sm:h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 border-4 border-[#F7AB0A]"
          loading="lazy"
        />

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-2 sm:space-y-10 px-0 md:px-10 max-w-xl md:max-w-2xl"
        >
          <h4 className="hidden sm:flex  md:text-4xl font-semibold">
            Here is a little background
          </h4>
          <p className="text-lg text-gray-400 font-medium">
            {pageInfo?.backgroundInformation}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
