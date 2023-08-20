import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Motion = () => {
  const [masters, setMasters] = useState([
    "哈基米1号",
    "哈基米2号",
    "哈基米3号",
  ]);
  const [isInitialed, setIsInitialed] = useState(false);

  useEffect(() => {
    setIsInitialed(true);
  }, []);

  return (
    <div className="grid flex-row gap-3">
      <button
        className="btn btn-primary"
        onClick={() => {
          setMasters([...masters, `哈基米${masters.length + 1}号`]);
        }}
      >
        添加一个哈基米
      </button>
      {masters.map((item, index) => (
        <motion.div
          key={index}
          initial={isInitialed} // 在初始加载时不应用动画
          animate={{ opacity: 1, x: 0 }} // 设置目标状态的动画效果
          style={{ opacity: 0, x: -100 }}
          className="w-[125px] h-[75px] rounded-2xl bg-white shadow-xl flex justify-center items-center"
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
};

export { Motion };
