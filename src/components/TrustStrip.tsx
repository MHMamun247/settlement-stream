import { motion } from "framer-motion";

const logos = [
  "TechCorp",
  "FinanceX",
  "GlobalPay",
  "CryptoVault",
  "PayStream",
  "CloudBank",
  "NeoFinance",
  "DigitalAssets",
];

export const TrustStrip = () => {
  return (
    <section className="py-16 border-y border-glass-border/30 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-muted-foreground text-sm uppercase tracking-widest">
          Trusted by forward-thinking companies
        </p>
      </motion.div>

      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Marquee */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-16 items-center marquee"
            style={{ minWidth: "fit-content" }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[150px]"
              >
                <span className="text-xl font-semibold text-foreground/30 hover:text-foreground/50 transition-colors whitespace-nowrap">
                  {logo}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
