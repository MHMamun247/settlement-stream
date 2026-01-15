import { motion } from "framer-motion";

export const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Primary blue blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full aurora-blob"
        style={{
          background: "radial-gradient(circle, hsl(217 91% 60% / 0.4) 0%, transparent 70%)",
          top: "-10%",
          right: "10%",
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.1, 0.95, 1],
          opacity: [0.5, 0.7, 0.5, 0.5],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Purple accent blob */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full aurora-blob"
        style={{
          background: "radial-gradient(circle, hsl(280 70% 50% / 0.3) 0%, transparent 70%)",
          top: "20%",
          left: "-5%",
        }}
        animate={{
          x: [0, -40, 60, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.9, 1.15, 1],
          opacity: [0.4, 0.6, 0.4, 0.4],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Teal accent blob */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full aurora-blob"
        style={{
          background: "radial-gradient(circle, hsl(170 80% 40% / 0.25) 0%, transparent 70%)",
          bottom: "10%",
          right: "20%",
        }}
        animate={{
          x: [0, 30, -50, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.2, 0.9, 1],
          opacity: [0.3, 0.5, 0.3, 0.3],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Subtle center glow */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(217 91% 60% / 0.15) 0%, transparent 60%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(100px)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
