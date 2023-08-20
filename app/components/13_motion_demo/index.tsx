import { useEffect } from "react";
import {
  motion,
  useAnimate,
  useMotionValue,
  useTransform,
} from "framer-motion";

const Motion = () => {
  const [scope, animate] = useAnimate();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 10,
    });

    return () => {
      controls.stop();
    };
  }, []);

  return (
    <div className="grid flex-row items-center justify-center gap-3">
      <motion.div
        ref={scope}
        className="px-56 py-32 text-red-600 text-9xl font-bold"
      >
        {rounded}
      </motion.div>
    </div>
  );
};

export { Motion };
