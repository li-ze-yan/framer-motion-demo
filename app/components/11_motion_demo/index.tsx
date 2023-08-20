import { useEffect } from "react";
import { useAnimate } from "framer-motion";

const Motion = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animation = async () => {
      await animate(scope.current, { x: "100%" });
      animate("li", { opacity: 1 });
    };

    animation();
  }, []);
  return (
    <div className="grid flex-row items-center justify-center gap-3">
      <ul ref={scope} className="grid flex-col gap-3">
        <li className="w-[125px] h-[75px] rounded-2xl bg-white shadow-xl flex justify-center items-center">
          哈基米
        </li>
        <li className="w-[125px] h-[75px] rounded-2xl bg-white shadow-xl flex justify-center items-center">
          哈基米
        </li>
        <li className="w-[125px] h-[75px] rounded-2xl bg-white shadow-xl flex justify-center items-center">
          哈基米
        </li>
      </ul>
    </div>
  );
};

export { Motion };
