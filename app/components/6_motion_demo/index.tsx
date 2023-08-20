import { motion } from "framer-motion";

const Motion = () => {
  return (
    <div className="grid flex-row items-center justify-center gap-3">
      <motion.div
        className=" w-56 h-56 shadow-2xl bg-red-600 cursor-pointer"
        whileHover={{ scale: [null, 1.5, 1.4] }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export { Motion };
