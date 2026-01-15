import { motion } from "framer-motion";
import { Globe, ArrowLeftRight, Zap, TrendingUp } from "lucide-react";

const features = [
  {
    title: "Global Settlement",
    description: "Settle payments across 180+ countries with real-time FX rates and instant reconciliation.",
    icon: Globe,
    size: "large",
    gradient: "from-primary/20 to-transparent",
  },
  {
    title: "Crypto + Fiat Onboarding",
    description: "Seamless conversion between digital and traditional currencies.",
    icon: ArrowLeftRight,
    size: "small",
    gradient: "from-purple-500/20 to-transparent",
  },
  {
    title: "Instant Payouts",
    description: "Sub-second settlement for winners and vendors.",
    icon: Zap,
    size: "small",
    gradient: "from-yellow-500/20 to-transparent",
  },
  {
    title: "Forex Engine",
    description: "Institutional-grade FX with spreads as low as 0.1%.",
    icon: TrendingUp,
    size: "medium",
    gradient: "from-green-500/20 to-transparent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export const BentoGrid = () => {
  return (
    <section id="solutions" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Everything you need to{" "}
            <span className="text-gradient">move money</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete payment infrastructure built for the modern economy.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`glass-card p-6 relative overflow-hidden group cursor-pointer ${
                feature.size === "large"
                  ? "md:col-span-2 md:row-span-2"
                  : feature.size === "medium"
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-grow">
                  {feature.description}
                </p>

                {feature.size === "large" && (
                  <div className="mt-4 flex items-center gap-4">
                    <div className="flex -space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs text-muted-foreground"
                        >
                          🌍
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      180+ Countries
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
