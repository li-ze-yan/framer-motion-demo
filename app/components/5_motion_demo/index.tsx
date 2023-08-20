import type { Transition } from "framer-motion";
import { motion } from "framer-motion";

const Motion = () => {
  const transition = {
    duration: 2,
    ease: "easeInOut",
    times: [0, 0.2, 0.5, 0.8, 1],
    repeat: Infinity,
    repeatDelay: 0,
    repeatType: "reverse",
  } as Transition;

  return (
    <div className="grid flex-row items-center justify-center gap-3">
      <motion.div
        className=" w-56 h-56 shadow-2xl bg-sky-600"
        // 也可使用假值对当前帧进行忽略
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={transition}
      />
    </div>
  );
};

export { Motion };
