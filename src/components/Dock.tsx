'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { iconMap } from './DesktopIcon';

interface TaskbarProps {
  openWindows: string[];
  minimizedWindows: string[];
  onTaskbarClick: (id: string) => void;
  getIconLabel: (id: string) => string;
}

export default function Taskbar({ openWindows, minimizedWindows, onTaskbarClick, getIconLabel }: TaskbarProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const now = new Date();
  const timeStr = now.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
  const dateStr = now.toLocaleDateString('zh-CN', { month: 'long', day: 'numeric' });

  return (
    <div
      className="fixed bottom-0 left-0 right-0 h-11 z-50 flex items-center px-2"
      style={{
        background: 'rgba(232, 234, 240, 0.88)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(0,0,0,0.08)',
      }}
    >
      {/* Start Button */}
      <button className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-black/5 transition-colors mr-1">
        <svg viewBox="0 0 16 16" className="w-4 h-4" fill="#333">
          <path d="M1 2l6-1v6H1V2zm0 7h6v6l-6-1V9zm7-8l7-1v6H8V1zm0 7h7v6l-7-1V8z" />
        </svg>
      </button>

      {/* Search */}
      <button className="flex items-center gap-2 h-8 px-3 rounded-md bg-black/5 hover:bg-black/10 transition-colors text-gray-500 text-xs mr-4">
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="hidden sm:inline">Type here to search</span>
      </button>

      {/* Task View */}
      <button className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-black/5 transition-colors mr-1">
        <svg className="w-4 h-4 text-gray-500" viewBox="0 0 16 16" fill="currentColor">
          <rect x="1" y="1" width="6" height="5" rx="0.5" />
          <rect x="9" y="1" width="6" height="5" rx="0.5" />
          <rect x="1" y="8" width="6" height="5" rx="0.5" />
          <rect x="9" y="8" width="6" height="5" rx="0.5" />
        </svg>
      </button>

      {/* Divider */}
      <div className="w-px h-6 bg-black/10 mx-1" />

      {/* Open windows - centered */}
      <div className="flex items-center gap-0.5 flex-1 justify-center">
        {openWindows.map((appId) => {
          const Icon = iconMap[appId];
          if (!Icon) return null;
          const isVisible = !minimizedWindows.includes(appId);
          const isHovered = hoveredId === appId;
          const label = getIconLabel(appId);

          return (
            <div key={appId} className="relative flex flex-col items-center">
              <button
                className="relative flex items-center justify-center w-10 h-10 rounded-md hover:bg-black/5 transition-colors"
                onMouseEnter={() => setHoveredId(appId)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onTaskbarClick(appId)}
              >
                <Icon className="w-5 h-5 drop-shadow-sm" />
              </button>
              {/* Active indicator bar: 可见=长蓝条, 最小化=短蓝条 */}
              <motion.div
                className="absolute -bottom-0.5 h-0.5 rounded-full bg-blue-500"
                animate={{
                  width: isVisible ? 12 : 4,
                  opacity: 1,
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              />
              {/* Tooltip */}
              {isHovered && (
                <motion.div
                  className="absolute -top-9 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2.5 py-1 rounded whitespace-nowrap pointer-events-none"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.12 }}
                >
                  {label}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      {/* Divider */}
      <div className="w-px h-6 bg-black/10 mx-1" />

      {/* System Tray */}
      <div className="flex items-center gap-1">
        {/* Chevron */}
        <button className="flex items-center justify-center w-8 h-8 rounded hover:bg-black/5 transition-colors">
          <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>

        {/* Network */}
        <button className="flex items-center justify-center w-8 h-8 rounded hover:bg-black/5 transition-colors">
          <svg className="w-3.5 h-3.5 text-gray-500" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1a7 7 0 00-7 7h1.5A5.5 5.5 0 018 2.5V1zM8 2.5A5.5 5.5 0 012.5 8H4a4 4 0 014-4V2.5zM8 4a4 4 0 00-4 4h1.5A2.5 2.5 0 018 5.5V4zM8 5.5A2.5 2.5 0 005.5 8H7a1 1 0 011-1V5.5z" />
            <circle cx="8" cy="8" r="1.5" />
          </svg>
        </button>

        {/* Volume */}
        <button className="flex items-center justify-center w-8 h-8 rounded hover:bg-black/5 transition-colors">
          <svg className="w-3.5 h-3.5 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 8.5v7a4.47 4.47 0 002.5-3.5zM14 3.23v2.06a7 7 0 010 13.42v2.06A9 9 0 0014 3.23z" />
          </svg>
        </button>

        {/* Clock */}
        <button className="flex flex-col items-center justify-center px-2 h-10 rounded hover:bg-black/5 transition-colors text-gray-700 text-xs leading-tight">
          <span>{timeStr}</span>
          <span className="text-[10px] text-gray-400">{dateStr}</span>
        </button>

        {/* Show desktop */}
        <button className="w-1.5 h-10 hover:bg-black/5 transition-colors rounded-r-sm" />
      </div>
    </div>
  );
}
