import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, TrendingUp, Building2, Store } from "lucide-react";

const industries = [
  {
    id: "gaming",
    label: "Gaming",
    icon: Gamepad2,
    title: "Instant Settlement for Player Winnings",
    description:
      "Delight your players with sub-second payouts. Support 50+ payment methods globally, from cards to crypto wallets.",
    stats: [
      { value: "< 1s", label: "Payout Speed" },
      { value: "50+", label: "Payment Methods" },
      { value: "99.99%", label: "Success Rate" },
    ],
  },
  {
    id: "forex",
    label: "Forex",
    icon: TrendingUp,
    title: "Institutional-Grade FX Infrastructure",
    description:
      "Access deep liquidity pools and tight spreads. Real-time rates for 100+ currency pairs with transparent pricing.",
    stats: [
      { value: "0.1%", label: "Spread" },
      { value: "100+", label: "Currency Pairs" },
      { value: "24/7", label: "Trading" },
    ],
  },
  {
    id: "enterprise",
    label: "Enterprise",
    icon: Building2,
    title: "Scale Without Limits",
    description:
      "Process billions in volume with enterprise-grade security. Dedicated support, custom SLAs, and white-label solutions.",
    stats: [
      { value: "$2B+", label: "Monthly Volume" },
      { value: "SOC2", label: "Compliant" },
      { value: "24/7", label: "Support" },
    ],
  },
  {
    id: "smb",
    label: "Small Biz",
    icon: Store,
    title: "Grow Without Complexity",
    description:
      "Accept payments globally with simple, transparent pricing. No hidden fees, no minimum volumes, no long-term contracts.",
    stats: [
      { value: "1.5%", label: "Transaction Fee" },
      { value: "0", label: "Monthly Fees" },
      { value: "T+1", label: "Settlement" },
    ],
  },
];

export const IndustryTabs = () => {
  const [activeTab, setActiveTab] = useState("gaming");
  const activeIndustry = industries.find((i) => i.id === activeTab)!;

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Built for <span className="text-gradient">your industry</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored payment solutions for every business vertical.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveTab(industry.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === industry.id
                  ? "bg-primary text-primary-foreground"
                  : "glass-card text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              <industry.icon className="w-4 h-4" />
              {industry.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                  <activeIndustry.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {activeIndustry.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {activeIndustry.description}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {activeIndustry.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-4 rounded-xl bg-secondary/50"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
