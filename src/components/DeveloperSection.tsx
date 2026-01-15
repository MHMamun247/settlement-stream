import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2, Webhook, Server, Shield } from "lucide-react";

const codeSnippet = `{
  "method": "POST",
  "endpoint": "/v1/payments/initiate",
  "body": {
    "amount": 1500.00,
    "currency": "USD",
    "recipient": {
      "account_id": "acc_8x7kL9mNpQ",
      "country": "DE"
    },
    "method": "SEPA_INSTANT",
    "idempotency_key": "pay_1a2b3c4d"
  }
}`;

const features = [
  { icon: Webhook, label: "Webhooks", desc: "Real-time event notifications" },
  { icon: Code2, label: "SDKs", desc: "Python, Node, Go, Ruby" },
  { icon: Server, label: "99.99% Uptime", desc: "Enterprise SLA guaranteed" },
  { icon: Shield, label: "PCI DSS L1", desc: "Highest security standard" },
];

export const DeveloperSection = () => {
  const [displayedCode, setDisplayedCode] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < codeSnippet.length) {
        setDisplayedCode(codeSnippet.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="developers" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Developer Experience</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Built for{" "}
              <span className="text-gradient">Developers</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Integrate global payments in minutes, not months. Our REST APIs, 
              comprehensive SDKs, and detailed documentation make implementation effortless.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 glass-card group hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">
                      {feature.label}
                    </h4>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-card overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-glass-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-xs text-muted-foreground ml-2">
                  payment_request.json
                </span>
              </div>

              {/* Code content */}
              <div className="p-6 font-mono text-sm overflow-x-auto">
                <pre className="text-muted-foreground">
                  <code>
                    {displayedCode.split("\n").map((line, i) => (
                      <div key={i} className="flex">
                        <span className="text-muted-foreground/50 select-none mr-4 w-4 text-right">
                          {i + 1}
                        </span>
                        <span>
                          {line.includes('"') ? (
                            <>
                              {line.split(/(".*?")/).map((part, j) =>
                                part.startsWith('"') ? (
                                  <span key={j} className="text-primary">
                                    {part}
                                  </span>
                                ) : (
                                  <span key={j} className="text-foreground/70">
                                    {part}
                                  </span>
                                )
                              )}
                            </>
                          ) : (
                            <span className="text-foreground/70">{line}</span>
                          )}
                        </span>
                      </div>
                    ))}
                    {isTyping && <span className="typing-cursor" />}
                  </code>
                </pre>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -right-4 glass-card px-4 py-2 flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-foreground">API Connected</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
