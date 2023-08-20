import { motion } from "framer-motion";

const Motion = () => {
  return (
    <div className="grid flex-row items-center justify-center gap-3">
      <motion.button
        className="btn btn-primary"
        initial={{ opacity: 0.6 }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1, type: "spring" },
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}
      >
        哈基米
      </motion.button>
    </div>
  );
};

export { Motion };
