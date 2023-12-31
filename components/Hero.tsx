import React, { useMemo } from "react";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const words = useMemo(
    () => [
      `Hi, my name is ${pageInfo?.name}.`,
      "UX/UI developer",
      "Frontend developer",
      "React Native developer",
    ],
    [pageInfo?.name]
  );

  const [text, count] = useTypewriter({
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
    words: words,
  });

  const heroImageUrl = useMemo(
    () => urlFor(pageInfo?.heroImage).url(),
    [pageInfo?.heroImage]
  );

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src={heroImageUrl}
        alt={`${pageInfo?.name}'s profile picture`}
        className="relative object-cover object-center rounded-full h-32 w-32 md:h-56 md:w-56 xl:h-72 xl:w-72 mx-auto border-4 border-[#F7AB0A] z-10"
        loading="lazy"
      />
      <div className="z-20">
        <h2
          className="text-sm font-thin uppercase text-gray-500 pb-2 tracking-[15px]"
          role="heading"
          aria-level={2}
          aria-label={pageInfo?.role}
        >
          {pageInfo?.role}
        </h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-300 px-10">
          {text}
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <nav className="pt-5">
          <ul className="flex justify-center items-center flex-wrap cursor-pointer">
            <Link href="#about">
              <li className="heroLink">About</li>
            </Link>
            <Link href="#experience">
              <li className="heroLink">Experience</li>
            </Link>
            <Link href="#skills">
              <li className="heroLink">Skills</li>
            </Link>
            <Link href="#projects">
              <li className="heroLink">Projects</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Hero;
