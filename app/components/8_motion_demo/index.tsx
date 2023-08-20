import { useState } from "react";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";

const Motion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };
  return (
    <div className="grid flex-row items-center justify-center gap-3">
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className=" drop-shadow-xl shadow-[#4700b3] w-[300px]"
      >
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#fafafa] text-[#6600ff] border-none rounded-xl px-[20px] py-[10px] text-[18px] cursor-pointer font-bold w-full text-left mb-[10px] flex justify-between items-center"
        >
          打开哈基米
          <motion.div
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <svg width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" className="fill-[#6600ff]" />
            </svg>
          </motion.div>
        </motion.button>
        <motion.ul
          className="list-none m-0 p-[10px] shadow-xl bg-[#fafafa]"
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <motion.li className="list-none m-0 p-[10px]" variants={itemVariants}>
            哈基米1号{" "}
          </motion.li>
          <motion.li className="list-none m-0 p-[10px]" variants={itemVariants}>
            哈基米2号
          </motion.li>
          <motion.li className="list-none m-0 p-[10px]" variants={itemVariants}>
            哈基米3号
          </motion.li>
          <motion.li className="list-none m-0 p-[10px]" variants={itemVariants}>
            哈基米4号
          </motion.li>
          <motion.li className="list-none m-0 p-[10px]" variants={itemVariants}>
            哈基米5号
          </motion.li>
        </motion.ul>
      </motion.nav>
    </div>
  );
};

export { Motion };
