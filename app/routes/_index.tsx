import type { V2_MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";
import { Motion } from "~/components/30_motion_demo";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Hello - Framer🤪Motion" },
    { name: "description", content: "Hello - Framer🤪Motion" },
  ];
};

export default function Index() {
  return (
    <div className="w-screen h-screen p-6 text-black flex flex-col">
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.5, translateY: -100 }}
        animate={{ opacity: 1, scale: 1, translateY: 0 }}
        transition={{ duration: 2 }}
        className="w-full flex-none text-7xl text-center font-caveat"
      >
        Hello - Framer🤪Motion
      </motion.div> */}
      <motion.div className="grow flex justify-center items-center gap-10">
        <Motion />
      </motion.div>
    </div>
  );
}
