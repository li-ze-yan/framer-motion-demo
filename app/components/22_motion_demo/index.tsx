import { useState } from "react";
import { AnimatePresence, motion, useDragControls } from "framer-motion";
import classNames from "classnames";

const Motion = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div className="grid flex-row items-center justify-center gap-3">
      <button className="btn" onClick={() => setVisible(!visible)}>
        切换
      </button>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            transition: {
              duration: 0.5,
              when: "afterChildren",
              staggerChildren: 0.5,
              delayChildren: 0.3,
            },
          },
          show: {
            opacity: 1,
            transition: {
              duration: 0.5,
              when: "beforeChildren",
              staggerChildren: 0.5,
              delayChildren: 0.3,
            },
          },
        }}
        initial="hidden"
        animate={visible ? "show" : "hidden"}
        className="w-64 h-64 bg-white shadow-2xl shadow-gray-600 cursor-pointer rounded-full flex justify-center items-center gap-4 text-4xl"
      >
        <motion.div
          className="bg-gray-600 rounded-full p-2"
          variants={{
            hidden: { opacity: 0, y: -100 },
            show: { opacity: 1, y: 0 },
          }}
        >
          🍅
        </motion.div>

        <motion.div
          className="bg-gray-600 rounded-full p-2"
          variants={{
            hidden: { opacity: 0, y: -30 },
            show: { opacity: 1, y: 0 },
          }}
        >
          🍅
        </motion.div>
        <motion.div
          className="bg-gray-600 rounded-full p-2"
          variants={{
            hidden: { opacity: 0, y: -100 },
            show: { opacity: 1, y: 0 },
          }}
        >
          🍅
        </motion.div>
      </motion.div>
    </div>
  );
};

export { Motion };
