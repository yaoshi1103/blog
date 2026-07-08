'use client';

import React, { useState } from 'react';
import { DriveIcon, OpticalDriveIcon, UserFolderIcon, ArticleIcon } from './icons';

/* ---------- Inline SVG icons (Windows 11 File Explorer toolbar / sidebar) ---------- */

const IconBack: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 3 L4 8 L10 13" />
  </svg>
);
const IconForward: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3 L12 8 L6 13" />
  </svg>
);
const IconUp: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 10 L8 5 L13 10" />
  </svg>
);
const IconRefresh: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 8 A5 5 0 1 1 8 3" />
    <path d="M13 3 L13 6 L10 6" />
  </svg>
);
const IconChevron: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 4 L10 8 L6 12" />
  </svg>
);
const IconSearch: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
    <circle cx="7" cy="7" r="4" />
    <path d="M10 10 L13 13" />
  </svg>
);
const IconNew: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
    <path d="M8 3 L8 13 M3 8 L13 8" />
  </svg>
);
const IconCut: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="4" cy="11" r="1.6" />
    <circle cx="12" cy="11" r="1.6" />
    <path d="M5.2 9.8 L13 2 M10.8 9.8 L3 2" />
  </svg>
);
const IconCopy: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="5" width="8" height="9" rx="1" />
    <path d="M3 11 V3 a1 1 0 0 1 1-1 H10" />
  </svg>
);
const IconRename: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 13 L11 5 L13 7 L5 15 Z" />
    <path d="M11 5 L12.5 3.5 a1 1 0 0 1 1.5 0 L14.5 4 a1 1 0 0 1 0 1.5 L13 7" />
  </svg>
);
const IconShare: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="4" cy="8" r="1.6" />
    <circle cx="12" cy="4" r="1.6" />
    <circle cx="12" cy="12" r="1.6" />
    <path d="M5.5 7.2 L10.5 4.8 M5.5 8.8 L10.5 11.2" />
  </svg>
);
const IconDelete: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 4 H13 M6 4 V3 a1 1 0 0 1 1-1 H9 a1 1 0 0 1 1 1 V4 M5 4 V13 a1 1 0 0 0 1 1 H10 a1 1 0 0 0 1-1 V4" />
  </svg>
);
const IconSort: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 5 H13 M5 8 H11 M7 11 H9" />
  </svg>
);
const IconView: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="4" height="4" />
    <rect x="9" y="3" width="4" height="4" />
    <rect x="3" y="9" width="4" height="4" />
    <rect x="9" y="9" width="4" height="4" />
  </svg>
);
const IconMore: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="currentColor">
    <circle cx="3" cy="8" r="1.3" />
    <circle cx="8" cy="8" r="1.3" />
    <circle cx="13" cy="8" r="1.3" />
  </svg>
);
const IconStar: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="#ffb300" stroke="#c88700" strokeWidth="0.7" strokeLinejoin="round">
    <path d="M8 2 L10 6 L14.2 6.4 L11 9.2 L12 13.2 L8 11 L4 13.2 L5 9.2 L1.8 6.4 L6 6 Z" />
  </svg>
);
const IconHome: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="#0078d4" stroke="#005a9e" strokeWidth="0.7" strokeLinejoin="round">
    <path d="M8 2 L14 7 V13 a1 1 0 0 1 -1 1 H10 V10 H6 V14 H3 a1 1 0 0 1 -1 -1 V7 Z" />
  </svg>
);
const IconGallery: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round">
    <rect x="2" y="3" width="12" height="10" rx="1" fill="#fff" />
    <circle cx="6" cy="6.5" r="1" fill="#f5a623" />
    <path d="M3 12 L6.5 8.5 L9 11 L11.5 8.5 L13 10" stroke="#4caf50" />
  </svg>
);
const IconOneDrive: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="#0364b8">
    <path d="M6.2 12.5 a2.6 2.6 0 0 1 -0.2 -5.2 a3.4 3.4 0 0 1 6.5 0.9 a2.2 2.2 0 0 1 -0.3 4.3 Z" />
  </svg>
);
const IconNetwork: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
    <path d="M2.5 8.5 a7 7 0 0 1 11 0" />
    <path d="M4.5 10.5 a4.5 4.5 0 0 1 7 0" />
    <circle cx="8" cy="12.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const IconDesktop: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round">
    <rect x="2" y="3" width="12" height="8" rx="0.6" fill="#cfe8fc" />
    <path d="M6 13 H10 M8 11 V13" />
    <path d="M4 9 H12" stroke="#7a7a7a" />
  </svg>
);
const IconDownload: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2 V10 M5 7 L8 10 L11 7" />
    <path d="M3 13 H13" />
  </svg>
);
const IconDoc: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round">
    <path d="M4 2 H9 L12 5 V14 H4 Z" fill="#fff" />
    <path d="M9 2 V5 H12" />
    <path d="M6 8 H10 M6 10 H10 M6 12 H9" stroke="#4a90d9" />
  </svg>
);
const IconMusic: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round">
    <path d="M6 12 V4 L13 3 V11" />
    <circle cx="4.5" cy="12" r="1.5" fill="#e8762d" stroke="none" />
    <circle cx="11.5" cy="11" r="1.5" fill="#e8762d" stroke="none" />
  </svg>
);
const IconPicture: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round">
    <rect x="2" y="3" width="12" height="10" rx="0.6" fill="#fff" />
    <circle cx="6" cy="6.5" r="1" fill="#f5a623" stroke="none" />
    <path d="M3 12 L6.5 8.5 L9 11 L11.5 8.5 L13 10" stroke="#4caf50" />
  </svg>
);
const IconVideo: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round">
    <rect x="2" y="4" width="12" height="8" rx="1" fill="#fff" />
    <path d="M7 6.5 L10 8 L7 9.5 Z" fill="#e8762d" stroke="none" />
  </svg>
);
const IconThisPCMini: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round">
    <rect x="2" y="3" width="12" height="8" rx="0.6" fill="#7eb8e0" stroke="#2a3a4c" />
    <path d="M6 13 H10 M5 13 H11" stroke="#3a4858" />
    <path d="M6 11 L5.5 13 M10 11 L10.5 13" stroke="#3a4858" />
  </svg>
);

/* ---------- Data ---------- */

type FolderItem = { name: string; Icon: React.FC<{ className?: string }> };
const folders: FolderItem[] = [
  { name: '桌面', Icon: IconDesktop },
  { name: '文档', Icon: IconDoc },
  { name: '下载', Icon: IconDownload },
  { name: '音乐', Icon: IconMusic },
  { name: '图片', Icon: IconPicture },
  { name: '视频', Icon: IconVideo },
];

type DriveItem = {
  name: string;
  letter: string;
  used: number;
  total: number;
  type: 'hdd' | 'ssd' | 'optical';
};
const drives: DriveItem[] = [
  { name: '本地磁盘', letter: 'C:', used: 148.6, total: 237.0, type: 'ssd' },
  { name: '本地磁盘', letter: 'D:', used: 187.9, total: 500.0, type: 'hdd' },
  { name: 'DVD RW 驱动器', letter: 'E:', used: 0, total: 0, type: 'optical' },
];

/* ---------- Component ---------- */

function CommandButton({ icon: Icon, label, onClick, disabled }: {
  icon: React.FC<{ className?: string }>;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={label}
      className="flex items-center justify-center h-8 px-2 rounded-md text-gray-700 hover:bg-black/[0.06] active:bg-black/[0.1] disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
    >
      <Icon className="w-4 h-4" />
    </button>
  );
}

function NavItem({ icon: Icon, label, depth = 0, active, expanded, hasChevron, onClick }: {
  icon: React.FC<{ className?: string }>;
  label: string;
  depth?: number;
  active?: boolean;
  expanded?: boolean;
  hasChevron?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`group flex items-center h-7 rounded-md cursor-pointer text-[12.5px] transition-colors ${
        active ? 'bg-[#cfe8fc] text-[#003e7e]' : 'text-[#1f1f1f] hover:bg-black/[0.05]'
      }`}
      style={{ paddingLeft: `${6 + depth * 14}px`, paddingRight: '6px' }}
    >
      {hasChevron && (
        <IconChevron className={`w-3 h-3 mr-0.5 flex-shrink-0 text-gray-500 transition-transform ${expanded ? 'rotate-90' : ''}`} />
      )}
      {!hasChevron && <span className="w-3.5 flex-shrink-0" />}
      <Icon className="w-4 h-4 mr-1.5 flex-shrink-0" />
      <span className="truncate">{label}</span>
    </div>
  );
}

export default function ThisPCPage() {
  const [selectedNav, setSelectedNav] = useState('this-pc');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [thisPCExpanded, setThisPCExpanded] = useState(true);

  // Navigation: root (此电脑) -> drive (C:/D:) -> file (彩蛋.txt)
  type Location = { type: 'root' } | { type: 'drive'; letter: string } | { type: 'file'; letter: string; name: string };
  const [location, setLocation] = useState<Location>({ type: 'root' });

  const isRoot = location.type === 'root';
  const driveName = (letter: string) => {
    const d = drives.find((x) => x.letter === letter);
    return d ? `${d.name} (${letter})` : letter;
  };
  const goUp = () => {
    if (location.type === 'file') {
      setLocation({ type: 'drive', letter: location.letter });
      setSelectedItem(null);
    } else if (location.type === 'drive') {
      setLocation({ type: 'root' });
      setSelectedItem(null);
    }
  };
  const enterDrive = (letter: string) => {
    setLocation({ type: 'drive', letter });
    setSelectedItem(null);
  };
  const openFile = (letter: string, name: string) => {
    setLocation({ type: 'file', letter, name });
    setSelectedItem(null);
  };
  const goRoot = () => {
    setLocation({ type: 'root' });
    setSelectedItem(null);
  };

  const isActive = (id: string) => {
    if (location.type === 'root' && id === 'this-pc') return true;
    if ((location.type === 'drive' || location.type === 'file') && id === `drive-${location.letter.charAt(0).toLowerCase()}`) return true;
    return selectedNav === id;
  };
  const handleNav = (id: string) => {
    setSelectedNav(id);
    if (id === 'this-pc') goRoot();
    else if (id === 'drive-c') enterDrive('C:');
    else if (id === 'drive-d') enterDrive('D:');
  };

  return (
    <div className="h-full flex flex-col" style={{ background: '#fbfbfb' }}>
      {/* ===== Command bar (Windows 11 style) ===== */}
      <div className="flex items-center h-10 px-2 gap-0.5 border-b border-[#e5e5e5] flex-shrink-0" style={{ background: '#f5f6f7' }}>
        <CommandButton icon={IconNew} label="新建" />
        <div className="w-px h-5 bg-black/10 mx-1" />
        <div className="flex items-center h-8 px-1 rounded-md hover:bg-black/[0.06] cursor-default text-[12px] text-gray-700 gap-1.5">
          <IconCut className="w-4 h-4" />
          <span className="hidden sm:inline">剪切</span>
        </div>
        <div className="flex items-center h-8 px-1 rounded-md hover:bg-black/[0.06] cursor-default text-[12px] text-gray-700 gap-1.5">
          <IconCopy className="w-4 h-4" />
          <span className="hidden sm:inline">复制</span>
        </div>
        <div className="flex items-center h-8 px-1 rounded-md hover:bg-black/[0.06] cursor-default text-[12px] text-gray-700 gap-1.5">
          <IconRename className="w-4 h-4" />
          <span className="hidden sm:inline">重命名</span>
        </div>
        <div className="flex items-center h-8 px-1 rounded-md hover:bg-black/[0.06] cursor-default text-[12px] text-gray-700 gap-1.5">
          <IconShare className="w-4 h-4" />
          <span className="hidden sm:inline">共享</span>
        </div>
        <div className="flex items-center h-8 px-1 rounded-md hover:bg-black/[0.06] cursor-default text-[12px] text-gray-700 gap-1.5">
          <IconDelete className="w-4 h-4" />
          <span className="hidden sm:inline">删除</span>
        </div>
        <div className="w-px h-5 bg-black/10 mx-1" />
        <div className="flex items-center h-8 px-1 rounded-md hover:bg-black/[0.06] cursor-default text-[12px] text-gray-700 gap-1.5">
          <IconSort className="w-4 h-4" />
          <span className="hidden sm:inline">排序</span>
        </div>
        <div className="flex items-center h-8 px-1 rounded-md hover:bg-black/[0.06] cursor-default text-[12px] text-gray-700 gap-1.5">
          <IconView className="w-4 h-4" />
          <span className="hidden sm:inline">查看</span>
        </div>
        <div className="flex-1" />
        <CommandButton icon={IconMore} label="更多" />
      </div>

      {/* ===== Address / breadcrumb bar ===== */}
      <div className="flex items-center h-9 px-2 gap-1 border-b border-[#e5e5e5] flex-shrink-0" style={{ background: '#fbfbfb' }}>
        <CommandButton icon={IconBack} label="后退" disabled={isRoot} onClick={goUp} />
        <CommandButton icon={IconForward} label="前进" disabled />
        <CommandButton icon={IconUp} label="向上" disabled={isRoot} onClick={goUp} />
        <CommandButton icon={IconRefresh} label="刷新" />
        <div className="flex items-center h-7 flex-1 ml-1 px-2 rounded-md border border-[#d0d0d0] bg-white text-[12px] text-gray-700 max-w-[440px] min-w-0">
          <IconThisPCMini className="w-4 h-4 mr-1.5 text-gray-600 flex-shrink-0" />
          <span
            className={`truncate ${isRoot ? 'text-gray-700' : 'text-blue-600 hover:underline cursor-pointer'}`}
            onClick={() => !isRoot && goRoot()}
          >
            此电脑
          </span>
          {location.type !== 'root' && (
            <>
              <IconChevron className="w-3 h-3 mx-1 text-gray-400 flex-shrink-0" />
              <span
                className={`truncate ${location.type === 'drive' ? 'text-gray-700' : 'text-blue-600 hover:underline cursor-pointer'}`}
                onClick={() => location.type === 'file' && enterDrive(location.letter)}
              >
                {driveName(location.letter)}
              </span>
            </>
          )}
          {location.type === 'file' && (
            <>
              <IconChevron className="w-3 h-3 mx-1 text-gray-400 flex-shrink-0" />
              <span className="truncate text-gray-700">{location.name}</span>
            </>
          )}
        </div>
        <div className="flex items-center h-7 px-2 ml-auto rounded-md border border-[#d0d0d0] bg-white w-[150px] flex-shrink-0">
          <IconSearch className="w-3.5 h-3.5 text-gray-500 mr-1.5" />
          <input
            type="text"
            placeholder="搜索"
            className="bg-transparent outline-none text-[12px] text-gray-700 placeholder-gray-400 w-full"
          />
        </div>
      </div>

      {/* ===== Main: sidebar + content ===== */}
      <div className="flex-1 min-h-0 flex overflow-hidden">
        {/* Left navigation pane */}
        <div
          className="w-[180px] flex-shrink-0 overflow-y-auto py-1.5 px-1.5 border-r border-[#e5e5e5]"
          style={{ background: '#fafafa' }}
        >
          <NavItem icon={IconStar} label="快速访问" depth={0} hasChevron expanded onClick={() => handleNav('quick')} active={isActive('quick')} />
          <NavItem icon={IconDesktop} label="桌面" depth={1} onClick={() => handleNav('desktop')} active={isActive('desktop')} />
          <NavItem icon={IconDownload} label="下载" depth={1} onClick={() => handleNav('downloads')} active={isActive('downloads')} />
          <NavItem icon={IconDoc} label="文档" depth={1} onClick={() => handleNav('documents')} active={isActive('documents')} />
          <NavItem icon={IconPicture} label="图片" depth={1} onClick={() => handleNav('pictures')} active={isActive('pictures')} />
          <div className="h-1.5" />
          <NavItem icon={IconHome} label="主页" depth={0} onClick={() => handleNav('home')} active={isActive('home')} />
          <NavItem icon={IconGallery} label="图库" depth={0} onClick={() => handleNav('gallery')} active={isActive('gallery')} />
          <NavItem icon={IconOneDrive} label="OneDrive" depth={0} hasChevron onClick={() => handleNav('onedrive')} active={isActive('onedrive')} />
          <div className="h-1.5" />
          <NavItem
            icon={IconThisPCMini}
            label="此电脑"
            depth={0}
            hasChevron
            expanded={thisPCExpanded}
            onClick={() => { setThisPCExpanded((v) => !v); handleNav('this-pc'); }}
            active={isActive('this-pc')}
          />
          {thisPCExpanded && (
            <>
              <NavItem icon={IconDesktop} label="桌面" depth={1} onClick={() => handleNav('pc-desktop')} active={isActive('pc-desktop')} />
              <NavItem icon={IconDoc} label="文档" depth={1} onClick={() => handleNav('pc-documents')} active={isActive('pc-documents')} />
              <NavItem icon={IconDownload} label="下载" depth={1} onClick={() => handleNav('pc-downloads')} active={isActive('pc-downloads')} />
              <NavItem icon={IconMusic} label="音乐" depth={1} onClick={() => handleNav('pc-music')} active={isActive('pc-music')} />
              <NavItem icon={IconPicture} label="图片" depth={1} onClick={() => handleNav('pc-pictures')} active={isActive('pc-pictures')} />
              <NavItem icon={IconVideo} label="视频" depth={1} onClick={() => handleNav('pc-videos')} active={isActive('pc-videos')} />
              <NavItem icon={DriveIcon} label="Windows (C:)" depth={1} onClick={() => handleNav('drive-c')} active={isActive('drive-c')} />
              <NavItem icon={DriveIcon} label="新加卷 (D:)" depth={1} onClick={() => handleNav('drive-d')} active={isActive('drive-d')} />
            </>
          )}
          <div className="h-1.5" />
          <NavItem icon={IconNetwork} label="网络" depth={0} onClick={() => handleNav('network')} active={isActive('network')} />
        </div>

        {/* Content area */}
        <div className="flex-1 min-w-0 overflow-y-auto" style={{ background: '#fbfbfb' }}>
          {location.type === 'root' && (
            <div className="p-3">
              {/* Folders section */}
              <div className="flex items-center mb-1.5 px-1">
                <IconChevron className="w-3 h-3 mr-1 text-gray-500 rotate-90" />
                <span className="text-[13px] font-semibold text-gray-700">文件夹</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 mb-4">
                {folders.map((f) => (
                  <div
                    key={f.name}
                    onClick={() => setSelectedItem(`folder-${f.name}`)}
                    className={`flex items-center gap-2 px-2 py-2 rounded-md cursor-default transition-colors ${
                      selectedItem === `folder-${f.name}` ? 'bg-[#cfe8fc]' : 'hover:bg-black/[0.05]'
                    }`}
                  >
                    <UserFolderIcon className="w-7 h-7 flex-shrink-0" />
                    <span className="text-[12.5px] text-gray-800 truncate">{f.name}</span>
                  </div>
                ))}
              </div>

              {/* Devices and drives section */}
              <div className="flex items-center mb-1.5 px-1">
                <IconChevron className="w-3 h-3 mr-1 text-gray-500 rotate-90" />
                <span className="text-[13px] font-semibold text-gray-700">设备和驱动器</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {drives.map((d) => {
                  const isOptical = d.type === 'optical';
                  const free = d.total - d.used;
                  const pct = d.total > 0 ? (d.used / d.total) * 100 : 0;
                  const DriveSvg = isOptical ? OpticalDriveIcon : DriveIcon;
                  return (
                    <div
                      key={d.letter}
                      onClick={() => (isOptical ? setSelectedItem(`drive-${d.letter}`) : enterDrive(d.letter))}
                      onDoubleClick={() => !isOptical && enterDrive(d.letter)}
                      className={`flex gap-3 px-2.5 py-2.5 rounded-md cursor-default transition-colors ${
                        selectedItem === `drive-${d.letter}` ? 'bg-[#cfe8fc]' : 'hover:bg-black/[0.05]'
                      }`}
                      title={isOptical ? 'CD/DVD 驱动器' : `双击进入 ${driveName(d.letter)}`}
                    >
                      <DriveSvg className="w-10 h-10 flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <div className="text-[12.5px] text-gray-800 truncate">
                          {d.name} ({d.letter})
                        </div>
                        {isOptical ? (
                          <div className="text-[11px] text-gray-500 mt-0.5">CD/DVD 驱动器</div>
                        ) : (
                          <>
                            <div className="mt-1.5 h-2 rounded-full bg-[#e3e3e3] overflow-hidden relative">
                              <div
                                className={`h-full rounded-full ${pct > 90 ? 'bg-[#d83b01]' : 'bg-[#0078d4]'}`}
                                style={{ width: `${Math.max(2, pct)}%` }}
                              />
                            </div>
                            <div className="text-[11px] text-gray-500 mt-1">
                              {free.toFixed(1)} GB 可用，共 {d.total.toFixed(0)} GB
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {location.type === 'drive' && (
            <div className="p-3">
              <div className="flex items-center mb-1.5 px-1">
                <IconChevron className="w-3 h-3 mr-1 text-gray-500 rotate-90" />
                <span className="text-[13px] font-semibold text-gray-700">{driveName(location.letter)}</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                <div
                  onClick={() => setSelectedItem('egg')}
                  onDoubleClick={() => openFile(location.letter, '彩蛋.txt')}
                  className={`flex flex-col items-center gap-1 px-2 py-3 rounded-md cursor-default transition-colors ${
                    selectedItem === 'egg' ? 'bg-[#cfe8fc]' : 'hover:bg-black/[0.05]'
                  }`}
                  title="双击打开 彩蛋.txt"
                >
                  <ArticleIcon className="w-11 h-11 flex-shrink-0" />
                  <span className="text-[12px] text-gray-800 truncate max-w-full">彩蛋.txt</span>
                </div>
              </div>
              <div className="mt-3 px-1 text-[11px] text-gray-400">1 个项目</div>
            </div>
          )}

          {location.type === 'file' && (
            <div
              className="h-full flex items-center justify-center"
              style={{ containerType: 'inline-size' }}
            >
              <p
                style={{
                  color: '#1E90FF',
                  fontSize: 'clamp(20px, 4.5cqw, 40px)',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  textAlign: 'center',
                  padding: '0 16px',
                }}
              >
                哈哈哈这里什么都没有喔
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ===== Status bar ===== */}
      <div className="flex items-center h-6 px-3 border-t border-[#e5e5e5] text-[11px] text-gray-500 flex-shrink-0" style={{ background: '#f5f6f7' }}>
        {location.type === 'root' && <span>{drives.length + folders.length} 个项目</span>}
        {location.type === 'drive' && <span>1 个项目</span>}
        {location.type === 'file' && <span>{location.name}</span>}
        {selectedItem && location.type !== 'file' && <span className="ml-3">| 已选中 1 个项目</span>}
      </div>
    </div>
  );
}
