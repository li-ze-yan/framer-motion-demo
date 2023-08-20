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
      <div className="grid grid-cols-1 gap-20">
        <button
          className="btn cursor-pointer"
          onPointerDown={startDrag}
        ></button>
        <motion.div
          className="w-16 h-16 rounded-full shadow-2xl shadow-gray-600"
          drag
          dragControls={dragControls}
        />
      </div>
    </div>
  );
};

export { Motion };
