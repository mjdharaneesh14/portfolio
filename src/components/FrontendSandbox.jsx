import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

export default function FrontendSandbox() {
  const [activeTab, setActiveTab] = useState('storage');

  // LocalStorage State Demo
  const [notes, setNotes] = useState(() => {
    try {
      const saved = localStorage.getItem('dharaneesh_portfolio_notes');
      return saved ? JSON.parse(saved) : [
        { id: 1, text: 'Review Dharaneesh M J resume for React Developer position', timestamp: 'Initial state' },
        { id: 2, text: 'Check out Fix2Fit Netlify live demo link', timestamp: 'Initial state' }
      ];
    } catch {
      return [];
    }
  });

  const [inputNote, setInputNote] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('dharaneesh_portfolio_notes', JSON.stringify(notes));
    } catch (e) {
      console.error('LocalStorage write failed:', e);
    }
  }, [notes]);

  const addNote = (e) => {
    e.preventDefault();
    if (!inputNote.trim()) return;
    const newNote = {
      id: Date.now(),
      text: inputNote.trim(),
      timestamp: new Date().toLocaleTimeString()
    };
    setNotes([newNote, ...notes]);
    setInputNote('');
  };

  const removeNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  const clearStorage = () => {
    setNotes([]);
    localStorage.removeItem('dharaneesh_portfolio_notes');
  };

  // Array Method Filter Demo
  const sampleProducts = [
    { id: 101, name: 'Fix2Fit Appointment Engine', category: 'React', price: 0, status: 'Production' },
    { id: 102, name: 'Serein E-Commerce Storefront', category: 'JavaScript', price: 0, status: 'Production' },
    { id: 103, name: 'Personal Expense Analytics', category: 'JavaScript', price: 0, status: 'Production' },
    { id: 104, name: 'Apps Script Google Sheets Bridge', category: 'API Integration', price: 0, status: 'Production' },
    { id: 105, name: 'Tailwind CSS Editorial Layout System', category: 'Styling', price: 0, status: 'Production' }
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('ALL');

  const filteredProducts = useMemo(() => {
    return sampleProducts.filter((item) => {
      const matchesCategory = categoryFilter === 'ALL' || item.category === categoryFilter;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, categoryFilter]);

  return (
    <section id="sandbox" className="py-20 px-4 sm:px-6 border-t border-stone-200 dark:border-stone-800">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-stone-200 dark:border-stone-800">
          <div>
            <div className="text-xs font-mono-code text-stone-500 dark:text-stone-400 uppercase tracking-widest mb-2">
              03 / INTERACTIVE FRONTEND DEMONSTRATOR
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A] dark:text-[#E6E4DF]">
              Live State & LocalStorage Sandbox
            </h2>
          </div>
          <p className="text-sm font-serif-editorial italic text-stone-600 dark:text-stone-400 max-w-md">
            Test real-time React state hooks, client-side LocalStorage synchronization, and ES6 JavaScript array calculations right here in your browser.
          </p>
        </div>

        {/* Sandbox Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-stone-200 dark:border-stone-800 pb-3">
          <button
            onClick={() => setActiveTab('storage')}
            type="button"
            className={`px-4 py-2 text-xs font-mono-code rounded border transition-colors ${
              activeTab === 'storage'
                ? 'bg-[#1A1A1A] dark:bg-[#E6E4DF] text-[#FAF9F5] dark:text-[#121110] border-[#1A1A1A] dark:border-[#E6E4DF] font-medium'
                : 'border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
            }`}
          >
            [ DEMO 1 : LOCALSTORAGE SYNCHRONIZER ]
          </button>
          <button
            onClick={() => setActiveTab('filter')}
            type="button"
            className={`px-4 py-2 text-xs font-mono-code rounded border transition-colors ${
              activeTab === 'filter'
                ? 'bg-[#1A1A1A] dark:bg-[#E6E4DF] text-[#FAF9F5] dark:text-[#121110] border-[#1A1A1A] dark:border-[#E6E4DF] font-medium'
                : 'border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
            }`}
          >
            [ DEMO 2 : JS ARRAY METHOD ENGINE ]
          </button>
        </div>

        {/* Tab 1: LocalStorage Synchronizer */}
        {activeTab === 'storage' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Input Form & Active Notes List */}
            <div className="p-6 rounded-lg border border-stone-300/80 dark:border-stone-800 bg-[#FAF9F5] dark:bg-[#151413] space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold tracking-tight text-[#1A1A1A] dark:text-[#E6E4DF]">
                  React State {'->'} LocalStorage Input
                </h3>
                <span className="text-xs font-mono-code text-stone-500">
                  [{notes.length} ITEMS STORED]
                </span>
              </div>

              <form onSubmit={addNote} className="flex gap-2">
                <input
                  type="text"
                  value={inputNote}
                  onChange={(e) => setInputNote(e.target.value)}
                  placeholder="Type a custom note or hiring tag..."
                  className="flex-1 px-3 py-2 text-xs font-mono-code rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 focus:outline-hidden focus:border-stone-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-mono-code rounded bg-[#1A1A1A] dark:bg-[#E6E4DF] text-[#FAF9F5] dark:text-[#121110] font-medium hover:opacity-90 transition-opacity shrink-0"
                >
                  + ADD NOTE
                </button>
              </form>

              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-xs font-mono-code text-stone-500 pb-1 border-b border-stone-200 dark:border-stone-800">
                  <span>CLIENT-SIDE DOM LIST</span>
                  <button
                    onClick={clearStorage}
                    type="button"
                    className="text-red-600 dark:text-red-400 hover:underline"
                  >
                    [ CLEAR STORAGE ]
                  </button>
                </div>

                {notes.length === 0 ? (
                  <p className="text-xs italic text-stone-500 py-4 text-center">
                    No items in LocalStorage. Add a note above!
                  </p>
                ) : (
                  <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                    {notes.map((item) => (
                      <div
                        key={item.id}
                        className="p-3 rounded border border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-stone-900/60 flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="space-y-0.5 min-w-0">
                          <p className="text-stone-800 dark:text-stone-200 truncate font-medium">
                            {item.text}
                          </p>
                          <p className="text-[10px] font-mono-code text-stone-400">
                            TIME: {item.timestamp}
                          </p>
                        </div>
                        <button
                          onClick={() => removeNote(item.id)}
                          type="button"
                          className="px-2 py-1 rounded border border-stone-300 dark:border-stone-700 text-[10px] font-mono-code text-stone-500 hover:text-red-600 hover:border-red-400 shrink-0"
                        >
                          [ REMOVE ]
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Live Raw JSON LocalStorage Inspector */}
            <div className="p-6 rounded-lg border border-stone-300/80 dark:border-stone-800 bg-stone-900 text-stone-200 space-y-4 font-mono-code">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <span className="text-xs text-stone-400">
                  RAW LOCALSTORAGE INSPECTOR (JSON)
                </span>
                <span className="text-[10px] text-emerald-400">
                  KEY: "dharaneesh_portfolio_notes"
                </span>
              </div>

              <div className="text-xs bg-stone-950 p-4 rounded border border-stone-800 overflow-x-auto text-emerald-400 leading-relaxed max-h-64">
                <pre>{JSON.stringify(notes, null, 2)}</pre>
              </div>

              <p className="text-[11px] text-stone-400 leading-relaxed">
                • Refreshing this page maintains your data across sessions using browser LocalStorage API.
              </p>
            </div>
          </motion.div>
        )}

        {/* Tab 2: JS Array Method Engine */}
        {activeTab === 'filter' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-lg border border-stone-300/80 dark:border-stone-800 bg-[#FAF9F5] dark:bg-[#151413] space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
              <div>
                <h3 className="text-sm font-bold tracking-tight text-[#1A1A1A] dark:text-[#E6E4DF]">
                  Instant JS Array Filtering & Searching Engine
                </h3>
                <p className="text-xs font-serif-editorial italic text-stone-500">
                  Demonstrating zero-dependency Array.prototype.filter() reactivity.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono-code text-stone-500">CATEGORY:</span>
                {['ALL', 'React', 'JavaScript', 'API Integration', 'Styling'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    type="button"
                    className={`px-2.5 py-1 text-xs font-mono-code rounded ${
                      categoryFilter === cat
                        ? 'bg-[#1A1A1A] dark:bg-[#E6E4DF] text-[#FAF9F5] dark:text-[#121110]'
                        : 'bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono-code text-stone-500">LIVE SEARCH:</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search modules by keyword..."
                className="flex-1 px-3 py-1.5 text-xs font-mono-code rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100"
              />
            </div>

            {/* Filtered Output List */}
            <div className="space-y-2">
              <div className="text-xs font-mono-code text-stone-500 flex justify-between">
                <span>FILTER RESULT MATCHES ({filteredProducts.length})</span>
                <span>STATUS</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="p-3.5 rounded border border-stone-200 dark:border-stone-800 bg-white/70 dark:bg-stone-900/60 flex items-center justify-between text-xs font-mono-code"
                  >
                    <div className="space-y-1">
                      <p className="font-semibold text-stone-800 dark:text-stone-200">
                        {prod.name}
                      </p>
                      <span className="px-2 py-0.5 rounded border border-stone-300 dark:border-stone-700 text-[10px] text-stone-500">
                        {prod.category}
                      </span>
                    </div>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400">
                      [{prod.status}]
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
