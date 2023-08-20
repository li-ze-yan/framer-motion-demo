import { motion } from "framer-motion";
import { useState } from "react";

const Motion = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [scale, setScale] = useState(1);
  return (
    <>
      <motion.div
        className="w-40 h-40 border-4 border-[#fe0222] border-dotted rounded-3xl "
        animate={{ x, y, rotate, scale }}
      />
      <div className="grid flex-col gap-4">
        <Input value={x} set={setX}>
          x
        </Input>
        <Input value={y} set={setY}>
          y
        </Input>
        <Input value={rotate} set={setRotate} min={-180} max={180}>
          rotate
        </Input>
        <Input value={scale} set={setScale} min={0} max={180}>
          scale
        </Input>
      </div>
    </>
  );
};

export { Motion };

interface InputProps {
  children: string;
  value: number;
  set: (newValue: number) => void;
  min?: number;
  max?: number;
}

export function Input({
  value,
  children,
  set,
  min = -200,
  max = 200,
}: InputProps) {
  return (
    <label>
      <code>{children}</code>
      <input
        value={value}
        type="range"
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value))}
      />
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value) || 0)}
      />
    </label>
  );
}
