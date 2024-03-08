"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anim";

const words = ["Be", "Greater", "Be", "Yourself"];

function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 800 : 500
    );
  }, [index]);

  // const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
  //   dimension.height
  // } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
  //   dimension.height
  // }  L0 0`;
  // const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
  //   dimension.height
  // } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  // const curve = {
  //   initial: {
  //     d: initialPath,
  //     transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  //   },
  //   exit: {
  //     d: targetPath,
  //     transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
  //   },
  // };

  return (
    <div>
      <motion.div
        variants={slideUp}
        initial="initial"
        exit="exit"
        className="h-screen w-screen flex items-center justify-center fixed z-50 bg-[#242424]"
      >
        {dimension.width > 0 && (
          <>
            <motion.p
              className="flex text-white text-5xl items-center absolute z-20"
              variants={opacity}
              initial="initial"
              animate="enter"
            >
              {words[index]}
            </motion.p>
            <motion.div
              style={{ slideUp }}
              className="overflow-x-clip overflow-y-visible -z-40"
            >
              <div className="h-[70%] md:h-[80%] w-[120%] -left-[10%] -mt-20 rounded-r-[60%] rounded-l-[60%] bg-[#242424] absolute"></div>
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
}

export default Preloader;
