import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#8C5FF5", "#A855F7", "#6366f1", "#8C5FF5"];

export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #FFFFFF 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid  place-content-center overflow-hidden bg-white px-4 py-24 text-gray-900"
    >
      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-4 inline-block rounded-full bg-purple-100 px-3 py-1.5 text-sm font-medium text-purple-700">
          ✨ Enterprise Intelligence Evolved
        </span>
        <h1 className="max-w-4xl bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-center text-4xl font-bold leading-tight text-transparent sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight">
          Your Enterprise <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C5FF5] to-indigo-600">
            Intelligence Co-pilot
          </span>
        </h1>
        <p className="my-6 max-w-2xl text-center text-base leading-relaxed text-gray-600 md:text-lg md:leading-relaxed">
          Break down data silos and accelerate decision-making with a unified
          intelligent workspace. Connect, Correlate, and Converse with your
          data.
        </p>
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-white px-6 py-3 text-gray-900 transition-colors hover:bg-gray-50 font-semibold"
        >
          See QubeAI in Action
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
      </div>
    </motion.section>
  );
};
