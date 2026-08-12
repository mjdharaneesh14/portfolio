import React from 'react';
import { motion } from 'framer-motion';
import { skillsGrouped } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-8 border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-1.5 pb-4 border-b border-slate-200">
          <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            02 / TECHNICAL PROFICIENCY
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Core Competencies
          </h2>
        </div>

        {/* Grouped Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {skillsGrouped.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs transition-all space-y-4"
            >
              <h3 className="text-base font-bold text-slate-950 border-b border-slate-100 pb-3">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2 pt-1">
                {group.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-semibold rounded-lg bg-slate-100/80 text-slate-800 border border-slate-200/80"
                  >
                    • {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
