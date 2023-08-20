import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";

const Motion = () => {
  return (
    <div className="grid flex-row items-center justify-center gap-3">
      <motion.button
        whileHover={{
          scale: 1.2,
          transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 3000,
            damping: 30,
          },
        }}
        whileTap={{
          scale: 0.9,
          transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 700,
            damping: 30,
          },
        }}
        className="btn btn-active"
      >
        哈基米
      </motion.button>
      <motion.input
        whileFocus={{
          scale: 2,
          transition: {
            duration: 1,
            type: "spring",
            stiffness: 700,
            damping: 30,
          },
        }}
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
      <motion.div
        drag
        className="flex justify-center items-center w-64 h-64 bg-red-700 opacity-90 shadow-inner rounded-full"
      >
        <motion.div
          className="w-32 h-32 rounded-full bg-white shadow-2xl flex justify-center items-center text-3xl cursor-pointer"
          drag
          onDragEnd={() => {
            debugger;
          }}
          // dragSnapToOrigin
          dragConstraints={{ left: 0, right: 300 }}
          // dragElastic={1}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          dragPropagation={false}
          dragMomentum={true}
          whileDrag={{
            scale: 1.2,
          }}
        >
          <div className="w-16 h-16 rounded-full bg-gray-700 opacity-90 flex justify-center items-center">
            🍅
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export { Motion };
