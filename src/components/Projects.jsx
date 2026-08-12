import React from 'react';
import { motion } from 'framer-motion';
import { projectsList } from '../data/portfolioData';
import { GithubIcon, ExternalLinkIcon } from './Icons';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-8 border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-1.5 pb-4 border-b border-slate-200">
          <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            01 / SELECTED WORK
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Featured Projects
          </h2>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsList.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-all group"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-bold tracking-tight text-slate-950 group-hover:text-slate-800 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-semibold rounded-md bg-slate-100 text-slate-700 border border-slate-200/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons with SVG Icons */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-100">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-950 text-white font-semibold text-xs hover:bg-slate-800 transition-colors shadow-2xs"
                >
                  <span>Live Demo</span>
                  <ExternalLinkIcon className="w-3.5 h-3.5 text-slate-300" />
                </a>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 text-slate-800 font-semibold text-xs hover:bg-slate-50 hover:border-slate-300 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-slate-700" />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
