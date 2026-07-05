import React from 'react';

// Document file icon - white page with red corner fold
export const FileIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="8" y="4" width="32" height="40" rx="2" fill="white" stroke="#555" strokeWidth="1.5" />
    <path d="M28 4L28 14C28 15.1 28.9 16 30 16L40 16" fill="#c84040" />
    <path d="M28 4L28 14C28 15.1 28.9 16 30 16L40 16" stroke="#555" strokeWidth="1.5" strokeLinejoin="round" />
    <line x1="14" y1="22" x2="34" y2="22" stroke="#999" strokeWidth="1.5" />
    <line x1="14" y1="28" x2="34" y2="28" stroke="#999" strokeWidth="1.5" />
    <line x1="14" y1="34" x2="28" y2="34" stroke="#999" strokeWidth="1.5" />
  </svg>
);

// Folder icon
export const FolderIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M6 12C6 10.9 6.9 10 8 10H18L22 14H40C41.1 14 42 14.9 42 16V36C42 37.1 41.1 38 40 38H8C6.9 38 6 37.1 6 36V12Z" fill="#4a90d9" stroke="#3a7bc8" strokeWidth="1" />
    <path d="M6 12C6 10.9 6.9 10 8 10H18L22 14H8C6.9 14 6 14.9 6 16V12Z" fill="#6aacf0" stroke="#3a7bc8" strokeWidth="1" />
  </svg>
);

// Trash icon
export const TrashIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="12" y="14" width="24" height="24" rx="2" fill="#ddd" stroke="#999" strokeWidth="1.5" />
    <rect x="10" y="10" width="28" height="6" rx="2" fill="#bbb" stroke="#999" strokeWidth="1.5" />
    <rect x="20" y="8" width="8" height="4" rx="1" fill="#bbb" stroke="#999" strokeWidth="1" />
    <line x1="18" y1="20" x2="18" y2="34" stroke="#999" strokeWidth="1.5" />
    <line x1="22" y1="20" x2="22" y2="34" stroke="#999" strokeWidth="1.5" />
    <line x1="26" y1="20" x2="26" y2="34" stroke="#999" strokeWidth="1.5" />
    <line x1="30" y1="20" x2="30" y2="34" stroke="#999" strokeWidth="1.5" />
  </svg>
);

// Signup icon - target/bullseye
export const SignupIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="24" cy="24" r="18" fill="white" stroke="#555" strokeWidth="2" />
    <circle cx="24" cy="24" r="12" fill="white" stroke="#c84040" strokeWidth="2" />
    <circle cx="24" cy="24" r="6" fill="#c84040" />
    <circle cx="24" cy="24" r="2" fill="white" />
  </svg>
);

// Pricing icon - calculator
export const PricingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="10" y="6" width="28" height="36" rx="3" fill="#e8e8e8" stroke="#555" strokeWidth="1.5" />
    <rect x="14" y="10" width="20" height="8" rx="1" fill="#4a7c3f" />
    <text x="24" y="16" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">0</text>
    <rect x="15" y="21" width="7" height="5" rx="1" fill="#ccc" />
    <rect x="24" y="21" width="7" height="5" rx="1" fill="#ccc" />
    <rect x="15" y="28" width="7" height="5" rx="1" fill="#ccc" />
    <rect x="24" y="28" width="7" height="5" rx="1" fill="#ccc" />
    <rect x="15" y="35" width="16" height="4" rx="1" fill="#c84040" />
  </svg>
);

// Demo icon - film clapper
export const DemoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="8" y="10" width="32" height="24" rx="2" fill="#1a1a1a" stroke="#555" strokeWidth="1.5" />
    <path d="M8 16L22 10L22 34L8 40V16Z" fill="white" stroke="#555" strokeWidth="1" />
    <path d="M22 10L34 14L34 34L22 40V10Z" fill="white" stroke="#555" strokeWidth="1" />
    <rect x="8" y="10" width="6" height="4" fill="#c84040" />
    <text x="11" y="13" textAnchor="middle" fill="white" fontSize="3" fontWeight="bold">DEMO</text>
  </svg>
);

// Docs icon - red book
export const DocsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 10C8 8.9 8.9 8 10 8H16L24 4L32 8H38C39.1 8 40 8.9 40 10V38C40 39.1 39.1 40 38 40H10C8.9 40 8 39.1 8 38V10Z" fill="#c84040" stroke="#a03030" strokeWidth="1.5" />
    <line x1="24" y1="4" x2="24" y2="40" stroke="#a03030" strokeWidth="1.5" />
    <text x="24" y="24" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">P</text>
  </svg>
);

// Email icon
export const EmailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="6" y="12" width="36" height="24" rx="3" fill="white" stroke="#555" strokeWidth="1.5" />
    <path d="M6 12L24 28L42 12" stroke="#555" strokeWidth="1.5" fill="none" />
    <path d="M6 36L20 22" stroke="#ccc" strokeWidth="1" />
    <path d="M42 36L28 22" stroke="#ccc" strokeWidth="1" />
  </svg>
);

// Question icon - speech bubble
export const QuestionIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="8" y="6" width="32" height="24" rx="6" fill="white" stroke="#555" strokeWidth="1.5" />
    <path d="M16 30L22 38L28 30" fill="white" stroke="#555" strokeWidth="1.5" />
    <text x="24" y="22" textAnchor="middle" fill="#4a90d9" fontSize="16" fontWeight="bold">?</text>
  </svg>
);

// Chart icon
export const ChartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="8" y="8" width="32" height="32" rx="2" fill="white" stroke="#555" strokeWidth="1.5" />
    <line x1="12" y1="36" x2="12" y2="28" stroke="#4a90d9" strokeWidth="4" strokeLinecap="round" />
    <line x1="20" y1="36" x2="20" y2="18" stroke="#c84040" strokeWidth="4" strokeLinecap="round" />
    <line x1="28" y1="36" x2="28" y2="22" stroke="#4a7c3f" strokeWidth="4" strokeLinecap="round" />
    <line x1="36" y1="36" x2="36" y2="14" stroke="#d4a843" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

// Changelog icon - bell/calendar
export const ChangelogIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="8" y="6" width="32" height="34" rx="3" fill="white" stroke="#555" strokeWidth="1.5" />
    <rect x="10" y="10" width="28" height="6" fill="#c84040" />
    <text x="24" y="15" textAnchor="middle" fill="white" fontSize="4" fontWeight="bold">JUL</text>
    <text x="24" y="30" textAnchor="middle" fill="#555" fontSize="14" fontWeight="bold">5</text>
  </svg>
);

// Handbook icon - open book
export const HandbookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 8H20C22 8 24 10 24 12V40C24 38 22 36 20 36H8V8Z" fill="white" stroke="#555" strokeWidth="1.5" />
    <path d="M40 8H28C26 8 24 10 24 12V40C24 38 26 36 28 36H40V8Z" fill="white" stroke="#555" strokeWidth="1.5" />
    <line x1="14" y1="14" x2="20" y2="14" stroke="#ddd" strokeWidth="1" />
    <line x1="14" y1="18" x2="20" y2="18" stroke="#ddd" strokeWidth="1" />
    <line x1="14" y1="22" x2="19" y2="22" stroke="#ddd" strokeWidth="1" />
    <line x1="28" y1="14" x2="34" y2="14" stroke="#ddd" strokeWidth="1" />
    <line x1="28" y1="18" x2="34" y2="18" stroke="#ddd" strokeWidth="1" />
    <line x1="28" y1="22" x2="33" y2="22" stroke="#ddd" strokeWidth="1" />
  </svg>
);

// Store icon - shopping bag
export const StoreIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 18L16 8H32L36 18V38C36 39.1 35.1 40 34 40H14C12.9 40 12 39.1 12 38V18Z" fill="#d4a843" stroke="#b89230" strokeWidth="1.5" />
    <path d="M16 18C16 14 20 10 24 10C28 10 32 14 32 18" fill="none" stroke="#b89230" strokeWidth="2" />
    <path d="M12 18H36" stroke="#b89230" strokeWidth="1.5" />
  </svg>
);

// Work icon - briefcase
export const WorkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="8" y="14" width="32" height="24" rx="3" fill="#8b6914" stroke="#6b4f10" strokeWidth="1.5" />
    <rect x="14" y="8" width="20" height="10" rx="2" fill="#8b6914" stroke="#6b4f10" strokeWidth="1.5" />
    <rect x="18" y="6" width="12" height="4" rx="1" fill="#8b6914" stroke="#6b4f10" strokeWidth="1" />
    <rect x="19" y="21" width="10" height="10" rx="1" fill="white" opacity="0.5" />
  </svg>
);

// Switch mode icon
export const SwitchModeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="6" y="8" width="28" height="22" rx="2" fill="white" stroke="#555" strokeWidth="1.5" />
    <rect x="8" y="10" width="24" height="4" fill="#ddd" />
    <rect x="24" y="8" width="4" height="4" rx="1" fill="#c84040" />
    <rect x="28" y="8" width="4" height="4" rx="1" fill="#d4a843" />
    <rect x="32" y="8" width="4" height="4" rx="1" fill="#4a7c3f" />
    <path d="M34 28L42 20" stroke="#4a90d9" strokeWidth="2" />
    <path d="M34 20L42 28" stroke="#4a90d9" strokeWidth="2" />
  </svg>
);

// Product OS icon
export const ProductOSIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="6" y="6" width="36" height="36" rx="4" fill="#c84040" stroke="#a03030" strokeWidth="1.5" />
    <text x="24" y="32" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">P</text>
  </svg>
);

// PostHog Logo - hedgehog
export const PostHogLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" {...props}>
    <ellipse cx="12" cy="14" rx="8" ry="7" fill="white" />
    <circle cx="9" cy="11" r="1.5" fill="#1a1a1a" />
    <circle cx="15" cy="11" r="1.5" fill="#1a1a1a" />
    <ellipse cx="12" cy="15" rx="2" ry="1.5" fill="#1a1a1a" />
    <path d="M6 12L4 10M18 12L20 10M8 9L7 7M16 9L17 7" stroke="#1a1a1a" strokeWidth="1" />
  </svg>
);