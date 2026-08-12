import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/portfolioData';
import { GithubIcon, MailIcon, WhatsappIcon, LocationIcon, ExternalLinkIcon } from './Icons';

export default function Hero() {
  return (
    <section id="hero" className="pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Category & Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase"
        >
          <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
            PORTFOLIO 2025
          </span>
          <span className="text-slate-300">•</span>
          <span className="flex items-center gap-1 text-slate-600">
            <LocationIcon className="w-3.5 h-3.5 text-slate-500" />
            <span>{profileData.location}</span>
          </span>
        </motion.div>

        {/* Name & Bold Title Statement */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.06]">
            {profileData.name}
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 tracking-tight leading-snug">
            {profileData.headline}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed pt-2 font-normal">
            {profileData.summary}
          </p>
        </motion.div>

        {/* Minimalist SVG Link Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="flex flex-wrap items-center gap-3 pt-2"
        >
          {/* GitHub Button */}
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-800 font-semibold text-xs sm:text-sm transition-all shadow-2xs"
          >
            <GithubIcon className="w-4 h-4 text-slate-700" />
            <span>GitHub</span>
            <ExternalLinkIcon className="w-3.5 h-3.5 text-slate-400" />
          </a>

          {/* Email Button */}
          <a
            href={`mailto:${profileData.email}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-800 font-semibold text-xs sm:text-sm transition-all shadow-2xs"
          >
            <MailIcon className="w-4 h-4 text-slate-700" />
            <span>{profileData.email}</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={profileData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-emerald-600/30 bg-emerald-50 hover:bg-emerald-100/70 text-emerald-800 font-semibold text-xs sm:text-sm transition-all shadow-2xs"
          >
            <WhatsappIcon className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp Chat</span>
            <ExternalLinkIcon className="w-3.5 h-3.5 text-emerald-600/70" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
