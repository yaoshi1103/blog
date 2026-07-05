'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DesktopIcon from './DesktopIcon';
import Dock from './Dock'; // Windows-style taskbar
import { leftIcons, rightIcons } from '@/lib/constants';

export default function Desktop() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [openWindows, setOpenWindows] = useState<string[]>([]);

  const handleIconClick = useCallback((id: string) => {
    setSelectedId((prev) => (prev === id ? null : id));
  }, []);

  const handleIconDoubleClick = useCallback((id: string) => {
    setOpenWindows((prev) => {
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });
  }, []);

  const closeWindow = useCallback((id: string) => {
    setOpenWindows((prev) => prev.filter((w) => w !== id));
  }, []);

  const getIconLabel = (id: string): string => {
    const allIcons = [...leftIcons, ...rightIcons];
    const found = allIcons.find((i) => i.id === id);
    return found?.label || id;
  };

  return (
    <div className="fixed inset-0 top-12 pb-11 overflow-hidden" style={{ backgroundColor: '#1a1a2e' }}>
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bizhi.mp4" type="video/mp4" />
      </video>

      {/* Center Illustration removed */}

      {/* Left column icons */}
      <div className="absolute left-4 md:left-6 top-3 flex flex-col gap-4 md:gap-5 z-20">
        {leftIcons.map((icon) => (
          <DesktopIcon
            key={icon.id}
            icon={icon}
            isSelected={selectedId === icon.id}
            onClick={handleIconClick}
            onDoubleClick={handleIconDoubleClick}
          />
        ))}
      </div>

      {/* Right column icons */}
      <div className="absolute right-4 md:right-6 top-3 flex flex-col gap-4 md:gap-5 z-20">
        {rightIcons.map((icon) => (
          <DesktopIcon
            key={icon.id}
            icon={icon}
            isSelected={selectedId === icon.id}
            onClick={handleIconClick}
            onDoubleClick={handleIconDoubleClick}
          />
        ))}
      </div>

      {/* Open windows (simulated) */}
      <AnimatePresence>
        {openWindows.map((windowId, index) => (
          <motion.div
            key={windowId}
            className="absolute bg-white rounded-lg shadow-2xl border border-gray-300 overflow-hidden z-30"
            style={{
              width: '400px',
              height: '300px',
              left: `${100 + index * 40}px`,
              top: `${80 + index * 40}px`,
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            {/* Window title bar */}
            <div className="flex items-center justify-between px-3 py-2 bg-gray-100 border-b border-gray-200">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => closeWindow(windowId)}
                  className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs font-medium text-gray-600 truncate mx-2">
                {getIconLabel(windowId)}
              </span>
              <div className="w-12" />
            </div>
            {/* Window content */}
            <div className="p-4 text-sm text-gray-500">
              <p>This is a placeholder for the <strong>{getIconLabel(windowId)}</strong> page.</p>
              <p className="mt-2">Content will be added later.</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Windows-style Taskbar */}
      <Dock />
    </div>
  );
}