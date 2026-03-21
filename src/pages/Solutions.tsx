import { Users, Building2, Layout, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Solutions() {
  const solutions = [
    {
      title: "For Digital Agencies",
      icon: <Building2 className="w-8 h-8 text-blue-400" />,
      desc: "Standardize your internal workflow. Create a central source of truth for all your client components.",
      features: ["Multi-website management", "Team-wide access", "Client-ready previews"]
    },
    {
      title: "For Freelancers",
      icon: <Users className="w-8 h-8 text-emerald-400" />,
      desc: "Build faster than ever. Reuse your best designs across every project without digging through old sites.",
      features: ["Instant JSON copy", "Lightweight storage", "Portable library"]
    },
    {
      title: "For Design Systems",
      icon: <Layout className="w-8 h-8 text-purple-400" />,
      desc: "Maintain brand consistency across 100+ sites. Manage your UI kit from a single, beautiful dashboard.",
      features: ["Global style syncing", "Version control", "Component categories"]
    }
  ];

  return (
    <div className="bg-zinc-950 min-h-screen pt-40 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="max-w-3xl mb-24">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-tight">
            SOLUTIONS FOR <br />
            <span className="text-accent">PROFESSIONAL BUILDERS.</span>
          </h1>
          <p className="text-xl text-zinc-400">
            Whether you are a solo freelancer or a global agency, Bricks Vault is designed to scale with your production needs.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <div key={i} className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-10 hover:border-accent/40 transition-all group">
              <div className="mb-8 p-4 bg-zinc-950 rounded-2xl border border-zinc-800 w-fit group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">{s.title}</h3>
              <p className="text-zinc-500 mb-8 leading-relaxed">{s.desc}</p>
              <ul className="space-y-4">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-zinc-300">
                    <CheckCircle2 size={16} className="text-accent" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-32 p-16 rounded-[40px] bg-gradient-to-br from-accent/20 to-indigo-500/10 border border-accent/20 text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/30 blur-[100px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter">READY TO SCALE YOUR PRODUCTION?</h2>
          <Link to="/library" className="inline-flex items-center gap-2 px-10 py-5 bg-accent text-white rounded-full font-bold text-lg hover:bg-accent/90 transition-all hover:scale-105 active:scale-95 shadow-2xl">
            Start Your Vault <Zap size={20} fill="currentColor" />
          </Link>
        </div>
      </div>
    </div>
  );
}
