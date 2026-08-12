import React from 'react';
import { motion } from 'framer-motion';

export default function Roadmap() {
  const roadmapItems = [
    {
      title: "Full-Stack Expansion",
      description: "Transitioning core applications to Node.js & MongoDB backend infrastructure."
    },
    {
      title: "Omnichannel Chatbots",
      description: "Building automated WhatsApp Meta Business API & Email auto-responder workflows."
    },
    {
      title: "Workflow Automation",
      description: "Implementing serverless event triggers and API integrations for client communication."
    }
  ];

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-8 border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-1.5 pb-4 border-b border-slate-200">
          <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            04 / ENGINEERING ROADMAP
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Future Focus & Roadmap
          </h2>
        </div>

        {/* Single-Column Roadmap Items */}
        <div className="space-y-4 max-w-3xl">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs transition-all flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6"
            >
              <span className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 shrink-0 self-start">
                PHASE 0{index + 1}
              </span>

              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
