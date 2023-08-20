import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";

const Motion = () => {
  const [selectedTab, setSelectedTab] = useState<any>({
    icon: "🍅",
    label: "Tomato",
  });
  const tabs = [
    { icon: "🍅", label: "Tomato" },
    { icon: "🥬", label: "Lettuce" },
    { icon: "🧀", label: "Cheese" },
    { icon: "🥕", label: "Carrot" },
    { icon: "🍌", label: "Banana" },
    { icon: "🫐", label: "Blueberries" },
    { icon: "🥂", label: "Champers" },
  ];
  return (
    <div className="grid flex-row items-center justify-center gap-3">
      <div className="w-[850px] pt-[10px] px-[10px] bg-white rounded-2xl shadow-2xl shadow-gray-600 overflow-hidden">
        <nav className="w-full">
          <ul className="w-full flex">
            {tabs.map((tab, index) => (
              <li
                key={`tab_${tab.label}_${index}`}
                className={classNames(
                  "text-gray-600 flex-1 text-center font-bold py-3 rounded-t-lg cursor-pointer list-none relative",
                  selectedTab?.label === tab.label ? "bg-[#eee]" : ""
                )}
                onClick={() => setSelectedTab(tab)}
              >
                {`${tab.icon} ${tab.label}`}
                {tab.label === selectedTab?.label ? (
                  <motion.div
                    className="absolute -bottom-px left-0 right-0 h-[2px] bg-[#8855ff]"
                    layoutId="underline"
                  />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <div className="w-full border-t border-[#eee] border-solid h-56 bg-white flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={selectedTab ? selectedTab?.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 700,
                damping: 30,
              }}
              className="text-6xl"
            >
              {selectedTab ? selectedTab?.icon : "😋"}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export { Motion };
