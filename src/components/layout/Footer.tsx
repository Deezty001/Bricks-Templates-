import { Link } from 'react-router-dom';
import { Layers, Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-6">
            <Layers className="w-6 h-6 text-accent" />
            <span className="text-xl font-black tracking-tighter text-white text-nowrap">BRICKS VAULT</span>
          </Link>
          <p className="text-zinc-500 text-sm leading-relaxed">
            The professional standard for Bricks Builder component management. Built for agencies and power users.
          </p>
          <div className="flex gap-4 mt-8">
            <Twitter className="w-5 h-5 text-zinc-600 hover:text-white cursor-pointer transition-colors" />
            <Github className="w-5 h-5 text-zinc-600 hover:text-white cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 text-zinc-600 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Product</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><Link to="/library" className="hover:text-accent">Component Vault</Link></li>
            <li><Link to="/solutions" className="hover:text-accent">Solutions</Link></li>
            <li><Link to="/pricing" className="hover:text-accent">Pricing</Link></li>
            <li><Link to="/changelog" className="hover:text-accent">What's New</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Solutions</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-accent">For Agencies</a></li>
            <li><a href="#" className="hover:text-accent">For Freelancers</a></li>
            <li><a href="#" className="hover:text-accent">Design Systems</a></li>
            <li><a href="#" className="hover:text-accent">Bulk Import</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><a href="mailto:support@bricksvault.com" className="hover:text-accent">support@bricksvault.com</a></li>
            <li><a href="#" className="hover:text-accent">Documentation</a></li>
            <li><a href="#" className="hover:text-accent">Community Forum</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-zinc-900 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} Bricks Vault. All rights reserved. Not affiliated with Bricks Builder.
      </div>
    </footer>
  );
}
