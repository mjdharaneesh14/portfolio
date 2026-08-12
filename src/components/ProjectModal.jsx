import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-stone-900/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-[#FAF9F5] dark:bg-[#181715] border border-stone-300 dark:border-stone-700 rounded-lg p-6 sm:p-8 shadow-xl max-h-[90vh] overflow-y-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-stone-800">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded border border-stone-300 dark:border-stone-700 text-xs font-mono-code text-stone-600 dark:text-stone-400">
                {project.category}
              </span>
              <span className="text-xs font-mono-code text-emerald-700 dark:text-emerald-400">
                [ STATUS : LIVE PRODUCTION ]
              </span>
            </div>
            <button
              onClick={onClose}
              type="button"
              className="px-3 py-1 text-xs font-mono-code rounded border border-stone-300 dark:border-stone-700 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
            >
              [ CLOSE ]
            </button>
          </div>

          {/* Title & Subtitle */}
          <div className="pt-4 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] dark:text-[#E6E4DF]">
              {project.title}
            </h3>
            <p className="text-sm font-serif-editorial italic text-stone-600 dark:text-stone-400">
              {project.subtitle}
            </p>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-4">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs font-mono-code rounded bg-stone-200/80 dark:bg-stone-800/80 text-stone-800 dark:text-stone-200 border border-stone-300/60 dark:border-stone-700/60"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Core Summary & Detailed Breakdown */}
          <div className="pt-6 space-y-4 text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
            <div>
              <h4 className="text-xs font-mono-code uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1">
                Overview & Engineering Objective
              </h4>
              <p className="bg-stone-100 dark:bg-stone-900/60 p-3.5 rounded border border-stone-200 dark:border-stone-800">
                {project.summary}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono-code uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                Technical Highlights & Implementation
              </h4>
              <ul className="space-y-2">
                {project.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-stone-400 dark:text-stone-500 font-mono-code text-xs pt-0.5">
                      0{idx + 1}.
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono-code uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                Key Architectural Concepts
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.architectureHighlights.map((arch, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-2 text-xs font-mono-code rounded border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/40 text-stone-800 dark:text-stone-200 flex items-center gap-2"
                  >
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>{arch}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-6 mt-6 border-t border-stone-200 dark:border-stone-800">
            <div className="flex items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded bg-[#1A1A1A] dark:bg-[#E6E4DF] text-[#FAF9F5] dark:text-[#121110] text-xs font-medium hover:opacity-90 transition-opacity"
              >
                Launch Live App ↗
              </a>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 text-xs font-mono-code hover:bg-stone-200/60 dark:hover:bg-stone-800/60 transition-colors"
                >
                  Source Code [ GitHub ↗ ]
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              type="button"
              className="text-xs font-mono-code text-stone-500 hover:text-stone-800 dark:hover:text-stone-200"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
