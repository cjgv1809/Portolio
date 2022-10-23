import React from "react";
// import Link from "next/link";
import { Link } from "react-scroll";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
    words: [
      "Hi, my name is Carlos Gomes",
      "UX/UI developer",
      "Frontend developer",
    ],
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src="/images/dogPhoto.jpg"
        alt="profile picture"
        className="relative rounded-full h-32 w-32 object-cover mx-auto border-4 border-[#F7AB0A] z-10"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-300 px-10">
          {text}
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          {/* <Link href="#about">
            <button className="heroButton">About</button>
          </Link> */}
          <Link to="about" spy={true} smooth={true}>
            <button className="heroButton">About</button>
          </Link>
          {/* <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
