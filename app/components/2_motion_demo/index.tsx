import { motion } from "framer-motion";
import type { Transition } from "framer-motion";

const Motion = () => {
  const transition = {
    ease: "linear",
    duration: 2,
    type: "spring",
    damping: 10,
    stiffness: 100,
    repeat: Infinity,
    repeatType: "loop",
  } as Transition;
  return (
    <motion.div
      className="w-40 h-40 border-4 border-[#fe0222] border-dotted rounded-3xl "
      animate={{ x: 400, rotate: 180 }}
      transition={transition}
    />
  );
};

export { Motion };
