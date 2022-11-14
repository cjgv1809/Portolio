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
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto"
    >
      <h3 className="absolute top-14 md:top-20 uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl">
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
          className="mt-20 md:mt-0 flex-shrink-0 w-32 h-32 sm:w-56 sm:h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 border-4 border-[#F7AB0A]"
        />

        <div className="space-y-10 px-0 md:px-10">
          <h4 className="hidden sm:flex  md:text-4xl font-semibold">
            Here is a little background
          </h4>
          <p className="text-lg text-gray-400">
            {pageInfo?.backgroundInformation}{" "}
            <a
              href="https://www.thesmartgroup.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-[#F7AB0A] hover:underline"
            >
              The Smart Group
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
