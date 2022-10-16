import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/carlosgomesvallejo/"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url="https://www.github.com/cjgv1809/"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          style={{ height: 35, width: 35 }}
        />
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          style={{ height: 35, width: 35 }}
        />
        <p className="uppercase hidden md:inline-flex text-gray-400 text-sm">
          Get in Touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
