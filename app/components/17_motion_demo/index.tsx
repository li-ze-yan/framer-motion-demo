import { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";

const Motion = () => {
  return (
    <div className="grid flex-row items-center justify-center gap-3">
      <div className="flex gap-3">
        <LayoutGroup>
          <Accordion />
          <Accordion />
        </LayoutGroup>
      </div>
    </div>
  );
};

export { Motion };

const Accordion = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <motion.div
      layout
      style={{ height: isOpen ? "100px" : "300px" }}
      className="w-[300px] shadow-2xl bg-white rounded-full shadow-gray-600"
      onClick={() => setOpen(!isOpen)}
    />
  );
};
