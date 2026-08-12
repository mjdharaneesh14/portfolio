import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/portfolioData';
import { MailIcon, PhoneIcon, WhatsappIcon, GithubIcon, ExternalLinkIcon } from './Icons';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-8 border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header - Centered */}
        <div className="space-y-2 text-center max-w-2xl mx-auto pb-4 border-b border-slate-200">
          <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            05 / DIRECT CONTACT
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Get In Touch
          </h2>
        </div>

        {/* Centered Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="p-6 sm:p-8 rounded-xl border border-slate-200 bg-white space-y-6 max-w-2xl mx-auto hover:shadow-xs transition-shadow text-left"
        >
          <div className="space-y-2 text-center">
            <h3 className="text-xl font-bold text-slate-950">
              Direct Communication Channels
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Open to full-time Front-End Developer roles, project discussions, and technical interviews.
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            {/* Email Link */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-lg border border-slate-200 bg-slate-50/70">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-white border border-slate-200 text-slate-700 shrink-0">
                  <MailIcon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wider">EMAIL</span>
                  <span className="font-semibold text-slate-900 truncate block">{profileData.email}</span>
                </div>
              </div>
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-slate-950 text-white font-semibold text-xs hover:bg-slate-800 transition-colors shrink-0"
              >
                <span>Send Email</span>
                <ExternalLinkIcon className="w-3.5 h-3.5 text-slate-300" />
              </a>
            </div>

            {/* Phone Link */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-lg border border-slate-200 bg-slate-50/70">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-white border border-slate-200 text-slate-700 shrink-0">
                  <PhoneIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wider">PHONE</span>
                  <span className="font-semibold text-slate-900">{profileData.phone}</span>
                </div>
              </div>
              <a
                href={`tel:${profileData.phoneRaw}`}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-800 font-semibold text-xs hover:bg-slate-100 transition-colors shrink-0"
              >
                <span>Call Phone</span>
              </a>
            </div>

            {/* WhatsApp Link */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-lg border border-emerald-600/30 bg-emerald-50/60">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-white border border-emerald-200 text-emerald-600 shrink-0">
                  <WhatsappIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-emerald-800 font-bold block uppercase tracking-wider">DIRECT WHATSAPP</span>
                  <span className="font-semibold text-slate-900">{profileData.phone}</span>
                </div>
              </div>
              <a
                href={profileData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs transition-colors shrink-0"
              >
                <WhatsappIcon className="w-3.5 h-3.5 text-white" />
                <span>Chat on WhatsApp</span>
                <ExternalLinkIcon className="w-3.5 h-3.5 text-emerald-200" />
              </a>
            </div>

            {/* GitHub Profile Link */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-lg border border-slate-200 bg-slate-50/70">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-white border border-slate-200 text-slate-700 shrink-0">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wider">GITHUB PROFILE</span>
                  <span className="font-semibold text-slate-900 truncate block">github.com/mjdharaneesh14</span>
                </div>
              </div>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-800 font-semibold text-xs hover:bg-slate-100 transition-colors shrink-0"
              >
                <GithubIcon className="w-3.5 h-3.5 text-slate-700" />
                <span>Visit GitHub</span>
                <ExternalLinkIcon className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
