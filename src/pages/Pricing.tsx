import { Check, Zap, Rocket, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Pricing() {
  const tiers = [
    {
      name: "Starter",
      icon: <Zap size={24} className="text-yellow-400" />,
      price: "$0",
      desc: "Perfect for testing the waters and personal projects.",
      features: ["Up to 50 templates", "Live Previews", "Community Access"],
      cta: "Get Started",
      highlight: false
    },
    {
      name: "Pro",
      icon: <Rocket size={24} className="text-blue-400" />,
      price: "$19",
      desc: "Built for power users building 5+ sites a month.",
      features: ["Unlimited templates", "Automated WP Rendering", "One-Click Import", "Custom Categories", "Priority Support"],
      cta: "Go Pro Now",
      highlight: true
    },
    {
      name: "Agency",
      icon: <Building2 size={24} className="text-purple-400" />,
      price: "$49",
      desc: "For teams requiring maximum scale and collaboration.",
      features: ["Everything in Pro", "5 Team Members", "Whitelabel Previews", "Shared Vaults", "API Access"],
      cta: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <div className="bg-zinc-950 min-h-screen pt-40 pb-32 px-6">
      <div className="max-w-7xl mx-auto text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-tight">
          CHOOSE YOUR <br />
          <span className="text-accent">POWER LEVEL.</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          No hidden fees. No complicated tiers. Just pure productivity for your Bricks Builder workflow.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, i) => (
          <div key={i} className={`p-10 rounded-[40px] border transition-all flex flex-col ${tier.highlight ? 'bg-zinc-900 border-accent/50 shadow-[0_0_60px_rgba(59,130,246,0.1)] ring-2 ring-accent/20 scale-105 z-10' : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700'}`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-zinc-950 border border-zinc-800">
                {tier.icon}
              </div>
              <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
            </div>
            
            <div className="mb-8 text-left">
              <span className="text-5xl font-black text-white">{tier.price}</span>
              <span className="text-zinc-500 font-bold ml-2">/ month</span>
            </div>

            <p className="text-zinc-500 text-sm mb-10 text-left leading-relaxed">{tier.desc}</p>

            <ul className="flex-1 space-y-5 mb-12 text-left">
              {tier.features.map((f, j) => (
                <li key={j} className="flex items-center gap-3 text-sm text-zinc-300">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <Check size={12} className="text-emerald-500" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>

            <Link 
              to={tier.highlight ? "/library" : "#"} 
              className={`w-full py-5 rounded-2xl font-black text-center transition-all ${tier.highlight ? 'bg-accent text-white hover:scale-[1.02] shadow-xl' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'}`}
            >
              {tier.cta}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
