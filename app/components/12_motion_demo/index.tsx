import { useEffect } from "react";
import { motion, useAnimate, useMotionValue } from "framer-motion";

const Motion = () => {
  const [scope, animate] = useAnimate();
  const x = useMotionValue(0);

  useEffect(() => {
    const controls = animate(x, 100, {
      type: "spring",
      stiffness: 2000,
      onComplete: () => {},
    });

    return () => {
      controls.stop();
    };
  }, []);
  return (
    <div className="grid flex-row items-center justify-center gap-3">
      <motion.ul ref={scope} style={{ x }} className="grid flex-col gap-3">
        <li className="w-[125px] h-[75px] rounded-2xl bg-white shadow-xl flex justify-center items-center">
          哈基米
        </li>
        <li className="w-[125px] h-[75px] rounded-2xl bg-white shadow-xl flex justify-center items-center">
          哈基米
        </li>
        <li className="w-[125px] h-[75px] rounded-2xl bg-white shadow-xl flex justify-center items-center">
          哈基米
        </li>
      </motion.ul>
    </div>
  );
};

export { Motion };
