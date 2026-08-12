import React, { useState, useEffect } from 'react';
import { profileData } from '../data/portfolioData';
import { MenuIcon, CloseIcon } from './Icons';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAFAFA]/95 backdrop-blur-md border-b border-slate-200/80 py-3.5 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 group-hover:text-slate-700 transition-colors">
            {profileData.name}
          </span>
          <span className="hidden sm:inline text-xs font-medium text-slate-500">
            / Front-End Developer
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs sm:text-sm font-semibold tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 hover:text-slate-950 transition-colors py-1 relative"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
        >
          {mobileMenuOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-[#FAFAFA] px-6 py-4 space-y-3 mt-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-800 hover:text-slate-950 py-1"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
