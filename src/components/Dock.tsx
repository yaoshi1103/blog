'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileIcon, FolderIcon, TrashIcon, PricingIcon,
  DemoIcon, DocsIcon, QuestionIcon, ChartIcon,
  HandbookIcon, StoreIcon,
} from './icons';

const taskbarApps = [
  { id: 'explorer', icon: FolderIcon, label: 'File Explorer', active: true },
  { id: 'docs', icon: DocsIcon, label: 'Docs', active: false },
  { id: 'pricing', icon: PricingIcon, label: 'Pricing', active: false },
  { id: 'demo', icon: DemoIcon, label: 'Demo', active: false },
  { id: 'handbook', icon: HandbookIcon, label: 'Handbook', active: false },
  { id: 'store', icon: StoreIcon, label: 'Store', active: false },
];

export default function Taskbar() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeApps, setActiveApps] = useState<string[]>(['explorer']);

  const toggleActive = (id: string) => {
    setActiveApps((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const now = new Date();
  const timeStr = now.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
  const dateStr = now.toLocaleDateString('zh-CN', { month: 'long', day: 'numeric' });

  return (
    <div
      className="fixed bottom-0 left-0 right-0 h-11 z-50 flex items-center px-2"
      style={{
        background: 'rgba(30, 30, 30, 0.92)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {/* Start Button */}
      <button className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-white/10 transition-colors mr-1">
        <svg viewBox="0 0 16 16" className="w-4 h-4" fill="white">
          <path d="M1 2l6-1v6H1V2zm0 7h6v6l-6-1V9zm7-8l7-1v6H8V1zm0 7h7v6l-7-1V8z" />
        </svg>
      </button>

      {/* Search */}
      <button className="flex items-center gap-2 h-8 px-3 rounded-md bg-white/10 hover:bg-white/15 transition-colors text-white/70 text-xs mr-4">
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="hidden sm:inline">Type here to search</span>
      </button>

      {/* Task View */}
      <button className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-white/10 transition-colors mr-1">
        <svg className="w-4 h-4 text-white/70" viewBox="0 0 16 16" fill="currentColor">
          <rect x="1" y="1" width="6" height="5" rx="0.5" />
          <rect x="9" y="1" width="6" height="5" rx="0.5" />
          <rect x="1" y="8" width="6" height="5" rx="0.5" />
          <rect x="9" y="8" width="6" height="5" rx="0.5" />
        </svg>
      </button>

      {/* Divider */}
      <div className="w-px h-6 bg-white/15 mx-1" />

      {/* App Icons - centered */}
      <div className="flex items-center gap-0.5 flex-1 justify-center">
        {taskbarApps.map((app) => {
          const Icon = app.icon;
          const isActive = activeApps.includes(app.id);
          const isHovered = hoveredId === app.id;

          return (
            <div key={app.id} className="relative flex flex-col items-center">
              <button
                className="relative flex items-center justify-center w-10 h-10 rounded-md hover:bg-white/10 transition-colors"
                onMouseEnter={() => setHoveredId(app.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => toggleActive(app.id)}
              >
                <Icon className="w-5 h-5 drop-shadow-sm" />
              </button>
              {/* Active indicator bar */}
              <motion.div
                className="absolute -bottom-0.5 h-0.5 rounded-full bg-blue-400"
                animate={{
                  width: isActive ? 12 : 0,
                  opacity: isActive ? 1 : 0,
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              />
              {/* Tooltip */}
              {isHovered && (
                <motion.div
                  className="absolute -top-9 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs px-2.5 py-1 rounded whitespace-nowrap pointer-events-none"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.12 }}
                >
                  {app.label}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45" />
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      {/* Divider */}
      <div className="w-px h-6 bg-white/15 mx-1" />

      {/* System Tray */}
      <div className="flex items-center gap-1">
        {/* Chevron */}
        <button className="flex items-center justify-center w-8 h-8 rounded hover:bg-white/10 transition-colors">
          <svg className="w-3 h-3 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>

        {/* Network */}
        <button className="flex items-center justify-center w-8 h-8 rounded hover:bg-white/10 transition-colors">
          <svg className="w-3.5 h-3.5 text-white/70" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1a7 7 0 00-7 7h1.5A5.5 5.5 0 018 2.5V1zM8 2.5A5.5 5.5 0 012.5 8H4a4 4 0 014-4V2.5zM8 4a4 4 0 00-4 4h1.5A2.5 2.5 0 018 5.5V4zM8 5.5A2.5 2.5 0 005.5 8H7a1 1 0 011-1V5.5z" />
            <circle cx="8" cy="8" r="1.5" />
          </svg>
        </button>

        {/* Volume */}
        <button className="flex items-center justify-center w-8 h-8 rounded hover:bg-white/10 transition-colors">
          <svg className="w-3.5 h-3.5 text-white/70" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 8.5v7a4.47 4.47 0 002.5-3.5zM14 3.23v2.06a7 7 0 010 13.42v2.06A9 9 0 0014 3.23z" />
          </svg>
        </button>

        {/* Clock */}
        <button className="flex flex-col items-center justify-center px-2 h-10 rounded hover:bg-white/10 transition-colors text-white/80 text-xs leading-tight">
          <span>{timeStr}</span>
          <span className="text-[10px] text-white/50">{dateStr}</span>
        </button>

        {/* Show desktop */}
        <button className="w-1.5 h-10 hover:bg-white/10 transition-colors rounded-r-sm" />
      </div>
    </div>
  );
}