import type { Transition } from "framer-motion";
import { motion } from "framer-motion";

const Motion = () => {
  return (
    <motion.div
      className="w-64 h-64 bg-white shadow-2xl shadow-gray-600 cursor-pointer rounded-full flex justify-center items-center gap-4 text-4xl"
      drag
      dragTransition={{
        power: 12,
      }}
    />
  );
};

export { Motion };
