import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Motion = () => {
  const [masters, setMasters] = useState([
    {
      name: "哈基米1号",
      isVisiable: true,
    },
    {
      name: "哈基米2号",
      isVisiable: true,
    },
    {
      name: "哈基米3号",
      isVisiable: true,
    },
  ]);
  const [isInitialed, setIsInitialed] = useState(false);

  useEffect(() => {
    setIsInitialed(true);
  }, []);

  return (
    <div className="grid flex-row items-center justify-center gap-3">
      <div className="flex gap-3">
        <button
          className="btn btn-primary"
          onClick={() => {
            const index = masters?.find((_) => !_.isVisiable);
            if (index) {
              index.isVisiable = true;
              setMasters([...masters]);
              return;
            }
            setMasters([
              ...masters,
              {
                name: `哈基米${masters.length + 1}号`,
                isVisiable: true,
              },
            ]);
          }}
        >
          添加一个哈基米
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            // 随机删掉一个哈基米
            if (masters?.filter((_) => _?.isVisiable)?.length === 0) return;
            const randomIndex = Math.floor(
              Math.random() * masters?.filter((_) => _?.isVisiable)?.length
            );
            masters.splice(randomIndex, 1, {
              ...masters[randomIndex],
              isVisiable: false,
            });
            setMasters([...masters]);
          }}
        >
          隐藏一个哈基米
        </button>
        {!masters?.find((_) => _.isVisiable) && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={!isInitialed ? false : { opacity: 0 }}
            className="toast toast-center toast-top  shadow-xl"
          >
            <div className="alert alert-info bg-white">
              <span>没有哈基米了，加一个</span>
            </div>
          </motion.div>
        )}
      </div>
      <motion.div
        animate={{
          height: masters?.filter((_) => _?.isVisiable)?.length * 75,
        }}
        id="container"
        className="w-full grid flex-col justify-center gap-3"
      >
        {masters.map((item, index) => (
          <AnimatePresence key={index}>
            {item.isVisiable && (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }} // 修改 exit 动画
                style={{ opacity: 1, x: 0 }}
                className="w-[125px] h-[75px] rounded-2xl bg-white shadow-xl flex justify-center items-center"
              >
                {item.name}
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </motion.div>
    </div>
  );
};

export { Motion };
