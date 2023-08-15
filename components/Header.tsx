import React from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between w-full z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center"
      >
        {/* Social Icons */}
        {socials?.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            aria-label={social.title}
            target="_blank"
            fgColor="gray"
            bgColor="transparent"
            style={{ height: 35, width: 35 }}
          />
        ))}
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex px-5 items-center text-gray-300 cursor-pointer"
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
      </Link>
    </header>
  );
}

export default Header;
