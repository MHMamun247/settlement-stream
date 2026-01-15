import { motion } from "framer-motion";

const connectionPoints = [
  { x: 20, y: 35, label: "North America" },
  { x: 48, y: 30, label: "Europe" },
  { x: 75, y: 45, label: "Asia" },
  { x: 55, y: 60, label: "Africa" },
  { x: 85, y: 70, label: "Australia" },
  { x: 30, y: 65, label: "South America" },
];

export const GlobalMap = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Accept payments in{" "}
            <span className="text-gradient">100+ currencies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Global coverage with local payment methods. Reach customers everywhere.
          </p>
        </motion.div>

        {/* Map visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[2/1] glass-card p-8 overflow-hidden"
        >
          {/* Simplified world map outline */}
          <svg
            viewBox="0 0 100 50"
            className="w-full h-full opacity-20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.2"
          >
            {/* Simplified continent outlines */}
            <path
              d="M10,20 Q15,15 25,18 T35,20 L30,30 Q20,35 15,28 Z"
              className="text-primary"
              fill="hsl(var(--primary) / 0.1)"
            />
            <path
              d="M40,15 Q50,10 60,15 T70,20 L65,35 Q55,40 45,35 Z"
              className="text-primary"
              fill="hsl(var(--primary) / 0.1)"
            />
            <path
              d="M65,18 Q80,12 90,25 T85,40 L75,45 Q70,40 68,30 Z"
              className="text-primary"
              fill="hsl(var(--primary) / 0.1)"
            />
            <path
              d="M45,40 Q55,38 60,45 T55,55 L48,52 Q42,48 45,40 Z"
              className="text-primary"
              fill="hsl(var(--primary) / 0.1)"
            />
            <path
              d="M78,55 Q85,50 88,58 T82,65 L75,62 Q72,58 78,55 Z"
              className="text-primary"
              fill="hsl(var(--primary) / 0.1)"
            />
            <path
              d="M20,40 Q28,35 35,42 T30,55 L22,52 Q15,48 20,40 Z"
              className="text-primary"
              fill="hsl(var(--primary) / 0.1)"
            />
          </svg>

          {/* Connection points */}
          {connectionPoints.map((point, index) => (
            <motion.div
              key={point.label}
              className="absolute"
              style={{ left: `${point.x}%`, top: `${point.y}%` }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              {/* Pulse effect */}
              <motion.div
                className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              />
              {/* Point */}
              <div className="absolute w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-lg shadow-primary/50" />
            </motion.div>
          ))}

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {connectionPoints.slice(0, -1).map((point, index) => {
              const nextPoint = connectionPoints[index + 1];
              return (
                <motion.line
                  key={index}
                  x1={`${point.x}%`}
                  y1={`${point.y}%`}
                  x2={`${nextPoint.x}%`}
                  y2={`${nextPoint.y}%`}
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.3 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 1 }}
                />
              );
            })}
          </svg>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        >
          {[
            { value: "180+", label: "Countries" },
            { value: "100+", label: "Currencies" },
            { value: "50+", label: "Payment Methods" },
            { value: "99.99%", label: "Uptime" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card p-6 text-center hover:border-primary/30 transition-colors"
            >
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
