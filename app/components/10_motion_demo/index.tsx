import { useState } from "react";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";

const Motion = () => {
  const [open, setOpen] = useState(false);
  const [list] = useState([
    { id: 1, name: "哈基米" },
    { id: 2, name: "哈基米" },
    { id: 3, name: "哈基米" },
  ]);
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
    visible: (i) => ({
      y: 0,
      scale: [null, 1.5 * i, 1],
      transition: {
        type: "spring",
        duration: 0.5,
      },
    }),
    hidden: {
      y: -20,
      scale: [null, 0.5, 0],
      transition: {
        type: "spring",
        duration: 0.5,
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
        {list?.map((_, index) => (
          <motion.div
            custom={index}
            key={`hajimi_${index}`}
            variants={variantsChild}
            className="w-[60px] h-60px] p-1 text-xs rounded-2xl bg-red-600 mx-5 text-white shadow-xl flex justify-center items-center"
          >
            哈基米
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export { Motion };
