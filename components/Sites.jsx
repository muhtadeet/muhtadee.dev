"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Port from "../public/port.png";
// import Ecom from "../public/e-com.png";
import Kami from "../public/kami.png";
import Comrade from "../public/comrade.png";
import Ibadah from "../public/Ibadah.png";
// import FramerMgBtn from "../components/FramerMgBtn";
import Image from "next/image";

const anim = {
  initial: { width: 0 },
  open: {
    width: "auto",
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
  closed: { width: 0 },
};

function Sites() {
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);

  return (
    <>
      <a href="https://muhtadee.pages.dev/">
        <div
          onMouseEnter={() => {
            setIsActive(true);
          }}
          onMouseLeave={() => {
            setIsActive(false);
          }}
          className="border-t-2 last-of-type:border-b-2 z-[99999] pt-[0.8vw] pb-[0.8vw] cursor-pointer w-[100%] flex justify-center items-center"
        >
          <p className="text-white font-lato text-[5vw] m-0">
            Photography&nbsp;
          </p>
          <motion.div
            variants={anim}
            animate={isActive ? "open" : "closed"}
            className="overflow-hidden flex justify-center w-0"
          >
            {/* <FramerMgBtn> */}

            <Image alt="Project Image" className="w-[10vw] m-3" src={Port} />

            {/* </FramerMgBtn> */}
          </motion.div>
          <p className="text-white font-lato text-[5vw] m-0">
            &nbsp;Portfolio 📸
          </p>
        </div>
      </a>
      {/* <div
        onMouseEnter={() => {
          setIsActive2(true);
        }}
        onMouseLeave={() => {
          setIsActive2(false);
        }}
        className="border-t-2 last-of-type:border-b-2 z-[99999] pt-[0.8vw] pb-[0.8vw] cursor-pointer w-[100%] flex justify-center items-center"
      >
        <p className="text-white font-lato text-[5vw] m-0">Breeze&nbsp;</p>
        <motion.div
          variants={anim}
          animate={isActive2 ? "open" : "closed"}
          className="overflow-hidden flex justify-center w-0"
        >
          <FramerMgBtn>
            <a href="https://e-commerce-app-d0j.pages.dev/">
              <Image alt="Project Image" className="w-[10vw] m-3" src={Ecom} />
            </a>
          </FramerMgBtn>
        </motion.div>
        <p className="text-white font-lato text-[5vw] m-0">
          &nbsp;E-commerce 🛒
        </p>
      </div> */}
      <a href="https://kami-kappa.vercel.app">
        <div
          onMouseEnter={() => {
            setIsActive3(true);
          }}
          onMouseLeave={() => {
            setIsActive3(false);
          }}
          className="border-t-2 last-of-type:border-b-2 z-[99999] pt-[0.8vw] pb-[0.8vw] cursor-pointer w-[100%] flex justify-center items-center"
        >
          <p className="text-white font-lato text-[5vw] m-0">Kami&nbsp;</p>
          <motion.div
            variants={anim}
            animate={isActive3 ? "open" : "closed"}
            className="overflow-hidden flex justify-center w-0"
          >
            {/* <FramerMgBtn> */}

            <Image alt="Project Image" className="w-[10vw] m-3" src={Kami} />

            {/* </FramerMgBtn> */}
          </motion.div>
          <p className="text-white font-lato text-[5vw] m-0">
            &nbsp;Note app 🗒️
          </p>
        </div>
      </a>
      <a href="https://comrade-flame.vercel.app">
        <div
          onMouseEnter={() => {
            setIsActive4(true);
          }}
          onMouseLeave={() => {
            setIsActive4(false);
          }}
          className="border-t-2 last-of-type:border-b-2 z-[99999] pt-[0.8vw] pb-[0.8vw] cursor-pointer w-[100%] flex justify-center items-center"
        >
          <p className="text-white font-lato text-[5vw] m-0">Comrade&nbsp;</p>
          <motion.div
            variants={anim}
            animate={isActive4 ? "open" : "closed"}
            className="overflow-hidden flex justify-center w-0"
          >
            {/* <FramerMgBtn> */}

            <Image alt="Project Image" className="w-[10vw] m-3" src={Comrade} />

            {/* </FramerMgBtn> */}
          </motion.div>
          <p className="text-white font-lato text-[5vw] m-0">
            &nbsp;Gemini AI 🤖
          </p>
        </div>
      </a>
      <a href="https://comrade-flame.vercel.app">
        <div
          onMouseEnter={() => {
            setIsActive5(true);
          }}
          onMouseLeave={() => {
            setIsActive5(false);
          }}
          className="border-t-2 last-of-type:border-b-2 z-[99999] pt-[0.8vw] pb-[0.8vw] cursor-pointer w-[100%] flex justify-center items-center"
        >
          <p className="text-white font-lato text-[5vw] m-0">Ibadah&nbsp;</p>
          <motion.div
            variants={anim}
            animate={isActive5 ? "open" : "closed"}
            className="overflow-hidden flex justify-center w-0"
          >
            {/* <FramerMgBtn> */}

            <Image alt="Project Image" className="w-[10vw] m-3" src={Ibadah} />

            {/* </FramerMgBtn> */}
          </motion.div>
          <p className="text-white font-lato text-[5vw] m-0">
            &nbsp;Prayer Times 🕌
          </p>
        </div>
      </a>
    </>
  );
}

export default Sites;
