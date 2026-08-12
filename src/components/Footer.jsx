import React from 'react';
import { profileData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-8 border-t border-slate-200/80 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
        <div>
          <span className="font-semibold text-slate-800">© {new Date().getFullYear()} {profileData.name}.</span>
          <span className="ml-2">— {profileData.title} ({profileData.location})</span>
        </div>

        <button
          onClick={scrollToTop}
          type="button"
          className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 transition-colors"
        >
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
}
