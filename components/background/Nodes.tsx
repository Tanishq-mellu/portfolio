"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: "12%", y: "18%", size: 4 },
  { x: "28%", y: "34%", size: 3 },
  { x: "44%", y: "15%", size: 5 },
  { x: "63%", y: "48%", size: 4 },
  { x: "79%", y: "22%", size: 3 },
  { x: "86%", y: "66%", size: 4 },
  { x: "22%", y: "70%", size: 5 },
  { x: "55%", y: "78%", size: 3 },
];

export function Nodes() {
  return (
    <>
      {nodes.map((node, index) => (
        <motion.div
          key={index}
          className="
            absolute
            rounded-full
            bg-[#65FF9A]
            shadow-[0_0_12px_rgba(101,255,154,0.45)]
          "
          style={{
            left: node.x,
            top: node.y,
            width: node.size,
            height: node.size,
          }}
          animate={{
            opacity: [0.3, 0.9, 0.3],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}