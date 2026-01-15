import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-muted-foreground">Now processing $2B+ monthly</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 text-balance"
        >
          The Unified Payment{" "}
          <span className="text-gradient">Settlement Layer</span>{" "}
          for the Digital Economy
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 text-balance"
        >
          Seamlessly bridge Fiat, Crypto, and Forex. The all-in-one payment infrastructure 
          for Enterprise, Gaming, and PSPs.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            size="lg" 
            className="glow-button bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base group"
          >
            Start Integration
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-glass-border bg-transparent hover:bg-secondary/50 text-foreground font-semibold px-8 py-6 text-base"
          >
            <FileText className="mr-2 w-4 h-4" />
            View Documentation
          </Button>
        </motion.div>

        {/* Animated Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 relative"
        >
          <div className="relative w-full max-w-4xl mx-auto aspect-[16/9]">
            {/* Central Hub */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-electric-glow"
              animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
                <span className="text-primary font-bold text-lg">N</span>
              </div>
            </motion.div>

            {/* Orbiting elements */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-primary"
                style={{
                  top: "50%",
                  left: "50%",
                }}
                animate={{
                  x: [
                    Math.cos((i * Math.PI * 2) / 6) * 120,
                    Math.cos((i * Math.PI * 2) / 6 + Math.PI) * 120,
                    Math.cos((i * Math.PI * 2) / 6) * 120,
                  ],
                  y: [
                    Math.sin((i * Math.PI * 2) / 6) * 80,
                    Math.sin((i * Math.PI * 2) / 6 + Math.PI) * 80,
                    Math.sin((i * Math.PI * 2) / 6) * 80,
                  ],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 8 + i,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5,
                }}
              />
            ))}

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 225">
              {[...Array(6)].map((_, i) => (
                <motion.line
                  key={i}
                  x1="200"
                  y1="112.5"
                  x2={200 + Math.cos((i * Math.PI * 2) / 6) * 100}
                  y2={112.5 + Math.sin((i * Math.PI * 2) / 6) * 70}
                  stroke="hsl(217 91% 60%)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ duration: 2, delay: i * 0.2 }}
                />
              ))}
            </svg>

            {/* Currency labels */}
            <motion.div
              className="absolute top-4 left-8 glass-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
            >
              USD
            </motion.div>
            <motion.div
              className="absolute top-4 right-8 glass-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3 }}
            >
              EUR
            </motion.div>
            <motion.div
              className="absolute bottom-4 left-12 glass-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              BTC
            </motion.div>
            <motion.div
              className="absolute bottom-4 right-12 glass-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              ETH
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
