import { useState } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

const Motion = () => {
  const [checked, setChecked] = useState(false);
  const variants = {
    checked: {
      width: 700,
      height: 700,
      transition: {
        type: "spring",
        stiffness: 700,
        damping: 30,
      },
    },
    unchecked: {
      width: 300,
      height: 300,
      borderRadius: 300,
      transition: {
        type: "spring",
        stiffness: 700,
        damping: 30,
      },
    },
  };
  return (
    <div className="grid flex-row items-center justify-center gap-3">
      <motion.div
        className={classNames(
          "bg-white flex items-center justify-center cursor-pointer shadow-xl shadow-gray-500"
        )}
        layout
        initial={{ borderRadius: 50 }}
        animate={checked ? "checked" : "unchecked"}
        variants={variants}
        onClick={() => setChecked(!checked)}
      >
        <motion.div
          className="w-10 h-10 bg-red-700 rounded-full"
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export { Motion };
