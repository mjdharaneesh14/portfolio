import React from 'react';
import { motion } from 'framer-motion';
import { educationList } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-8 border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-1.5 pb-4 border-b border-slate-200">
          <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            03 / CERTIFICATIONS & TRAINING
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Education & Certifications
          </h2>
        </div>

        {/* Education & Certification Cards */}
        <div className="space-y-6">
          {educationList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="p-6 sm:p-7 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs transition-all flex flex-col sm:flex-row sm:items-start justify-between gap-4"
            >
              <div className="space-y-2 max-w-2xl">
                <h3 className="text-lg font-bold text-slate-950">
                  {item.degree}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-600">
                  {item.institution}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Highlight Pills */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.highlights.map((h, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-semibold rounded-md bg-slate-100 text-slate-700 border border-slate-200/80"
                      >
                        • {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 shrink-0 self-start">
                {item.period}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
