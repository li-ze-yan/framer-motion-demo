import { useState } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

const Motion = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="grid flex-row items-center justify-center gap-3">
      <motion.div
        className={classNames(
          "w-96 h-52 rounded-full bg-red-700 px-10 opacity-60 flex items-center cursor-pointer",
          checked ? "justify-end" : "justify-start"
        )}
        onClick={() => setChecked(!checked)}
      >
        <motion.div
          className="w-40 h-40 bg-white rounded-full"
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export { Motion };
