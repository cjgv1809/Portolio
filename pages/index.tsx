import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  ChevronDoubleUpIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/solid";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import {
  Experience,
  PageInfo,
  Project,
  Resume,
  Skill,
  Social,
} from "../typings";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";
import { fetchResume } from "../utils/fetchResume";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  socials: Social[];
  resume: Resume;
};

const Home = ({
  pageInfo,
  experiences,
  projects,
  skills,
  socials,
  resume,
}: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory mx-auto 2xl:max-w-7xl overflow-y-auto overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 z-0">
      <Head>
        <title>Carlos&apos;s Portfolio</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      {/* Header */}
      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-end">
        <ContactMe pageInfo={pageInfo} />
      </section>

      {/* Footer */}
      <footer className="relative">
        {resume?.resumeFile?.asset?.url && (
          <div className="absolute bottom-0 sm:bottom-10 left-5 sm:left-10 cursor-pointer">
            <div className="bg-[#F7AB0A] p-2 rounded-full animate-pulse">
              <a
                href={resume?.resumeFile?.asset?.url}
                target="_blank"
                rel="noopener noreferrer"
                download={resume?.downloadFilename}
                className="flex items-center space-x-1 text-[rgb(36,36,36)]"
                title="Download CV"
              >
                <DocumentArrowDownIcon className="h-5 w-5 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" />
                <span className="hidden xl:flex text-sm font-semibold">
                  Download CV
                </span>
              </a>
            </div>
          </div>
        )}

        <div className="absolute bottom-0 sm:bottom-10 right-5 sm:right-10 cursor-pointer">
          <div className="flex justify-center items-center">
            <Link href="#hero">
              <div
                className="bg-[#F7AB0A] p-2 rounded-full animate-pulse"
                title="Back to top"
              >
                <ChevronDoubleUpIcon className="h-5 w-5 text-[rgb(36,36,36)] rounded-full filter grayscale hover:grayscale-0 cursor-pointer" />
              </div>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = (await fetchPageInfo()) as PageInfo;
  const experiences: Experience[] = (await fetchExperiences()) as Experience[];
  const projects: Project[] = (await fetchProjects()) as Project[];
  const skills: Skill[] = (await fetchSkills()) as Skill[];
  const socials: Social[] = (await fetchSocials()) as Social[];
  const resume: Resume = (await fetchResume()) as Resume;

  return {
    props: {
      pageInfo,
      experiences,
      projects,
      skills,
      socials,
      resume,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once 60 seconds
    revalidate: 10, // In seconds
  };
};
