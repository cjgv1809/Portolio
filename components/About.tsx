import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="/images/dogPhoto.jpg"
        alt="profile picture"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 border-4 border-[#F7AB0A]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Here is a little background</h4>
        <p className="text-lg text-gray-400">
          I am a software engineer with a passion for creating beautiful and
          functional user interfaces. I have a background in UX/UI design and
          frontend development. I am currently working as a frontend developer
          at a startup called{" "}
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
    </motion.div>
  );
}

export default About;
