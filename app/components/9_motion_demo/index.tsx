import { useState } from "react";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";

const Motion = () => {
  const [open, setOpen] = useState(false);
  const variants: Variants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };
  const variantsChild: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
      },
    },
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        type: "spring",
      },
    },
  };
  return (
    <div className="grid flex-row items-center justify-center gap-3">
      <button
        className="btn btn-primary"
        onClick={() => {
          setOpen(!open);
        }}
      >
        切换哈基米
      </button>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={open ? "hidden" : "visible"}
        className="h-[75px] rounded-2xl bg-white shadow-xl flex justify-center items-center"
      >
        <motion.div
          variants={variantsChild}
          className="w-[60px] h-60px] p-1 text-xs rounded-2xl bg-red-600 mx-5 text-white shadow-xl flex justify-center items-center"
        >
          哈基米
        </motion.div>
        <motion.div
          variants={variantsChild}
          className="w-[60px] h-60px] p-1 text-xs rounded-2xl bg-red-600 mx-5 text-white shadow-xl flex justify-center items-center"
        >
          哈基米
        </motion.div>
        <motion.div
          variants={variantsChild}
          className="w-[60px] h-60px] p-1 text-xs rounded-2xl bg-red-600 mx-5 text-white shadow-xl flex justify-center items-center"
        >
          哈基米
        </motion.div>
      </motion.div>
    </div>
  );
};

export { Motion };
