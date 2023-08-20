import { useState } from "react";
import { AnimatePresence, motion, useDragControls } from "framer-motion";
import classNames from "classnames";

const Motion = () => {
  const dragControls = useDragControls();

  function startDrag(event: any) {
    dragControls.start(event, { snapToCursor: true });
  }

  return (
    <div className="grid flex-row items-center justify-center gap-3">
      <motion.div
        variants={{
          activeHover: {
            scale: [null, 1.5, 1.2],
            rotate: [null, 180, 360],
            transition: {
              delay: 0.5,
            },
          },
          activeTap: {
            scale: [null, 1.2, 0.8],
            rotate: [null, 180, 360],
            transition: {
              delay: 0.5,
            },
          },
        }}
        whileHover="activeHover"
        whileTap="activeTap"
        className="w-32 h-32 bg-white shadow-2xl shadow-gray-600 cursor-pointer rounded-full flex justify-center items-center text-4xl"
      >
        🍅
      </motion.div>
    </div>
  );
};

export { Motion };
