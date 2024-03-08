import { Tooltip } from "@nextui-org/react";
import Taron from "../public/taron.png";
import { motion, useScroll, useTransform } from "framer-motion";
import FramerMgBtn from "./FramerMgBtn";
import { useRef } from "react";
import Image from "next/image";

const variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2.8,
      staggerChildren: 0.7,
    },
  },
};

const items = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const items2 = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const smx = useTransform(scrollYProgress, [0, 1], [0, -200]);
  return (
    <>
      <div className="flex flex-col xl:mt-14 sm:mt-24 md:mt-12 md:mx-5 md:h-screen md:-mb-80 xl:h-full justify-center xl:mx-5 xl:-mb-64">
        <motion.div
          ref={container}
          className="absolute flex items-end translate-x-[60vw] md:translate-x-[75vw] md:m-5 xl:translate-x-[80vw] mt-[850px] sm:mt-0 xl:m-4 rotate-90"
        >
          <motion.p
            style={{ x: smx }}
            variants={items2}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" text-[#242424] mr-10 text-sm md:text-lg md:m-5 xl:text-2xl xl:m-10 font-ubuntu  font-black"
          >
            Front-End Developer
          </motion.p>
          <motion.p
            style={{ x: smx }}
            variants={items2}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" text-[#242424]  text-sm md:text-lg md:m-5 xl:text-2xl xl:m-10 font-ubuntu  font-black"
          >
            Bangladesh📍
          </motion.p>
        </motion.div>
        <motion.div
          ref={container}
          style={{ y: sm }}
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="flex flex-col gap-5 mt-[500px] ml-7 sm:mt-0 sm:ml-0 md:justify-center md:m-1 xl:m-5 z-20 sm:z-0 xl:justify-center absolute"
        >
          <FramerMgBtn>
            <Tooltip showArrow={true} placement="right" content="LinkedIn">
              <motion.a
                variants={items}
                viewport={{
                  once: true,
                }}
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/muhtadee-taron-b4253628b/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-brand-linkedin transition ease-in-out hover:stroke-light-blue-600 stroke-blue-gray-800"
                >
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M8 11l0 5"></path>
                  <path d="M8 8l0 .01"></path>
                  <path d="M12 16l0 -5"></path>
                  <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
              </motion.a>
            </Tooltip>
          </FramerMgBtn>
          <FramerMgBtn>
            <Tooltip showArrow={true} placement="right" content="GitHub">
              <motion.a
                variants={items}
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/muhtadeet"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition ease-in-out hover:stroke-light-blue-600 stroke-blue-gray-800 tabler-icon tabler-icon-brand-github"
                >
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
              </motion.a>
            </Tooltip>
          </FramerMgBtn>
          <FramerMgBtn>
            <Tooltip showArrow={true} placement="right" content="CV">
              <motion.a
                variants={items}
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                href="./Muhtadee Taron.pdf"
                download
              >
                <svg
                  height="48"
                  width="48"
                  version="1.1"
                  id="Layer_1"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  transform="matrix(-1, 0, 0, 1, 0, 0)"
                  className="transition ease-in-out hover:stroke-light-blue-600 -ml-2 stroke-blue-gray-800"
                >
                  <path d="M373.576,92.448c5.828-6.13,9.424-14.401,9.424-23.475c0-18.773-15.36-34.133-34.133-34.133 c-18.773,0-34.133,15.36-34.133,34.133c0,9.075,3.596,17.345,9.424,23.475c-15.76,8.754-26.491,25.578-26.491,44.792v40.96 c0,5.12,3.413,8.533,8.533,8.533s8.533-3.413,8.533-8.533v-40.96c0-18.773,15.36-34.133,34.133-34.133 c18.773,0,34.133,15.36,34.133,34.133v40.96c0,5.12,3.413,8.533,8.533,8.533s8.533-3.413,8.533-8.533v-40.96 C400.067,118.026,389.336,101.203,373.576,92.448z M331.8,68.973c0-9.387,7.68-17.067,17.067-17.067 c9.387,0,17.067,7.68,17.067,17.067s-7.68,17.067-17.067,17.067C339.48,86.04,331.8,78.36,331.8,68.973z"></path>
                  <path d="M425.667-1H84.333c-14.507,0-25.6,11.093-25.6,25.6v460.8c0,14.507,11.093,25.6,25.6,25.6h341.333 c14.507,0,25.6-11.093,25.6-25.6V24.6C451.267,10.093,440.173-1,425.667-1z M434.2,485.4c0,5.12-3.413,8.533-8.533,8.533H84.333 c-5.12,0-8.533-3.413-8.533-8.533V24.6c0-5.12,3.413-8.533,8.533-8.533h341.333c5.12,0,8.533,3.413,8.533,8.533V485.4z"></path>
                  <path d="M391.533,220.867H118.467c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533h273.067 c5.12,0,8.533-3.413,8.533-8.533S396.653,220.867,391.533,220.867z"></path>
                  <path d="M391.533,340.333H118.467c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533h273.067 c5.12,0,8.533-3.413,8.533-8.533S396.653,340.333,391.533,340.333z"></path>
                  <path d="M306.2,263.533h-42.667c-5.12,0-8.533,3.413-8.533,8.533c0,5.12,3.413,8.533,8.533,8.533H306.2 c5.12,0,8.533-3.413,8.533-8.533C314.733,266.947,311.32,263.533,306.2,263.533z"></path>
                  <path d="M348.867,280.6c5.12,0,8.533-3.413,8.533-8.533c0-5.12-3.413-8.533-8.533-8.533h-8.533c-5.12,0-8.533,3.413-8.533,8.533 c0,5.12,3.413,8.533,8.533,8.533H348.867z"></path>
                  <path d="M263.533,314.733h25.6c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533h-25.6c-5.12,0-8.533,3.413-8.533,8.533 S258.413,314.733,263.533,314.733z"></path>
                  <path d="M314.733,306.2c0,5.12,3.413,8.533,8.533,8.533H383c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533h-59.733 C318.147,297.667,314.733,301.08,314.733,306.2z"></path>
                  <path d="M118.467,280.6h42.667c5.12,0,8.533-3.413,8.533-8.533c0-5.12-3.413-8.533-8.533-8.533h-42.667 c-5.12,0-8.533,3.413-8.533,8.533C109.933,277.187,113.347,280.6,118.467,280.6z"></path>
                  <path d="M203.8,280.6c5.12,0,8.533-3.413,8.533-8.533c0-5.12-3.413-8.533-8.533-8.533h-8.533c-5.12,0-8.533,3.413-8.533,8.533 c0,5.12,3.413,8.533,8.533,8.533H203.8z"></path>
                  <path d="M297.667,391.533c0-5.12-3.413-8.533-8.533-8.533h-25.6c-5.12,0-8.533,3.413-8.533,8.533c0,5.12,3.413,8.533,8.533,8.533 h25.6C294.253,400.067,297.667,396.653,297.667,391.533z"></path>
                  <path d="M383,383h-59.733c-5.12,0-8.533,3.413-8.533,8.533c0,5.12,3.413,8.533,8.533,8.533H383c5.12,0,8.533-3.413,8.533-8.533 C391.533,386.413,388.12,383,383,383z"></path>
                  <path d="M323.267,417.133h-25.6c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533h25.6c5.12,0,8.533-3.413,8.533-8.533 S328.387,417.133,323.267,417.133z"></path>
                  <path d="M383,417.133h-25.6c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533H383c5.12,0,8.533-3.413,8.533-8.533 S388.12,417.133,383,417.133z"></path>
                  <path d="M161.133,383h-42.667c-5.12,0-8.533,3.413-8.533,8.533c0,5.12,3.413,8.533,8.533,8.533h42.667 c5.12,0,8.533-3.413,8.533-8.533C169.667,386.413,166.253,383,161.133,383z"></path>
                  <path d="M203.8,383h-8.533c-5.12,0-8.533,3.413-8.533,8.533c0,5.12,3.413,8.533,8.533,8.533h8.533 c5.12,0,8.533-3.413,8.533-8.533C212.333,386.413,208.92,383,203.8,383z"></path>
                  <path d="M118.467,84.333H178.2c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533h-59.733 c-5.12,0-8.533,3.413-8.533,8.533S113.347,84.333,118.467,84.333z"></path>
                  <path d="M118.467,152.6H178.2c5.12,0,8.533-3.413,8.533-8.533c0-5.12-3.413-8.533-8.533-8.533h-59.733 c-5.12,0-8.533,3.413-8.533,8.533C109.933,149.187,113.347,152.6,118.467,152.6z"></path>
                  <path d="M212.333,84.333h8.533c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533h-8.533c-5.12,0-8.533,3.413-8.533,8.533 S207.213,84.333,212.333,84.333z"></path>
                  <path d="M212.333,118.467H255c5.12,0,8.533-3.413,8.533-8.533S260.12,101.4,255,101.4h-42.667c-5.12,0-8.533,3.413-8.533,8.533 S207.213,118.467,212.333,118.467z"></path>
                  <path d="M212.333,152.6h8.533c5.12,0,8.533-3.413,8.533-8.533c0-5.12-3.413-8.533-8.533-8.533h-8.533 c-5.12,0-8.533,3.413-8.533,8.533C203.8,149.187,207.213,152.6,212.333,152.6z"></path>
                  <path d="M212.333,186.733H255c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533h-42.667c-5.12,0-8.533,3.413-8.533,8.533 S207.213,186.733,212.333,186.733z"></path>
                </svg>
              </motion.a>
            </Tooltip>
          </FramerMgBtn>
        </motion.div>
        <div className="flex justify-center -mt-10">
          <Image
            className="absolute w-[92%] -mt-5 md:-mt-40 md:w-[40%] xl:-mt-32 xl:w-[35%] 2xl:w-[40%] z-10 drop-shadow-[0_0_7px_rgba(0,0,0,0.55)]"
            src={Taron}
            alt="photo"
          />
          <motion.div
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="hidden sm:flex flex-col justify-around items-center md:-mt-20 md:h-[90vh] xl:-mt-7 xl:w-[100vw] xl:h-[100vh]"
          >
            <motion.p
              variants={items}
              viewport={{
                once: true,
              }}
              className=" text-[#242424] md:text-7xl md:-my-10 xl:text-9xl uppercase font-generalSans xl:-my-10 font-black"
            >
              Muhtadee Taron
            </motion.p>
            <motion.p
              variants={items}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="hehe text-white md:text-7xl md:-my-10 xl:text-9xl uppercase font-generalSans xl:-my-10 font-black"
            >
              Muhtadee Taron
            </motion.p>
            <motion.p
              variants={items}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="hehe text-white md:text-7xl md:-my-10 xl:text-9xl uppercase font-generalSans xl:-my-10 font-black"
            >
              Muhtadee Taron
            </motion.p>
            <motion.p
              variants={items}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className=" text-[#242424] md:text-7xl md:mb-5 md:-my-10 xl:text-9xl uppercase font-generalSans xl:-my-10 font-black"
            >
              Muhtadee Taron
            </motion.p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
