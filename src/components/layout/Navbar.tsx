import { Link, useLocation } from 'react-router-dom';
import { Layers, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isLibrary = location.pathname.startsWith('/library');

  const navLinks = [
    { name: 'Solutions', path: '/solutions' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Changelog', path: '/changelog' },
  ];

  if (isLibrary) return null; // We use a different header in the library

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/60 rounded-2xl shadow-2xl">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-accent-glow p-2 rounded-lg border border-accent/20 group-hover:scale-110 transition-transform">
            <Layers className="w-5 h-5 text-accent" />
          </div>
          <span className="text-xl font-black tracking-tighter text-white">BRICKS VAULT</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-sm font-bold tracking-wide transition-colors ${location.pathname === link.path ? 'text-accent' : 'text-zinc-400 hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/library" 
            className="px-6 py-2.5 bg-accent text-white rounded-full text-sm font-bold hover:bg-accent/90 transition-all active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
          >
            Open Vault
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-zinc-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-6 right-6 p-6 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl animate-slide-up">
          <div className="flex flex-col gap-4">
            {navLinks.map(link => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-zinc-300 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/library" 
              onClick={() => setIsOpen(false)}
              className="mt-2 w-full py-4 bg-accent text-white rounded-xl text-center font-bold"
            >
              Open Vault
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
