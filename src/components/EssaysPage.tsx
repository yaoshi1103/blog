'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

/* 随笔数据 */
type Essay = {
  id: number;
  date: string;
  title: string;
  content: string;
  tags: string[];
};

const essays: Essay[] = [
  { id: 1, date: '2026-07-09', title: '动效参数的手感', content: '把数字桌面的窗口动效调顺了。spring stiffness 400 damping 25，比预设的顺滑许多。改参数这种事，果然还得靠自己的手感试出来，教程里抄不来。', tags: ['vibe coding', '前端'] },
  { id: 2, date: '2026-07-03', title: '滤波器与 PID 是一对', content: '控制课上讲 PID 整定，突然反应过来：滤波器和 PID 其实是一对，前者收拾信号，后者收拾误差。机器视觉里这俩谁也躲不掉，算是把专业课串起来了。', tags: ['控制工程', '学习'] },
  { id: 3, date: '2026-06-22', title: '最小可运行 Agent 跑通了', content: '跟着教程搭了个最小可运行的 Agent，工具调用跑通的那一刻有点上头。下一步想接 MediaPipe，让它真的"看得见"——这才对得起"机器视觉"这个方向。', tags: ['AI Agent', 'MediaPipe'] },
  { id: 4, date: '2026-06-12', title: 'INFJ 的试错方式', content: 'INFJ 的苦恼：方案没想清楚前不想开口，可 vibe coding 又要求快速试错。和解的办法是——先在代码里试，试完再讲。代码不撒谎，比口头推演省事。', tags: ['随想'] },
  { id: 5, date: '2026-06-01', title: '博客迁到 Next.js', content: '把博客从 Hexo 迁到 Next.js，折腾了一整个周末。静态导出 + Cloudflare Pages，零成本上线，研究生钱包友好。绿点也保住了，值。', tags: ['博客', '部署'] },
];

type TabKey = 'day' | 'week' | 'month' | 'year' | 'category';

const TABS: { key: TabKey; label: string }[] = [
  { key: 'day', label: '日' },
  { key: 'week', label: '周' },
  { key: 'month', label: '月' },
  { key: 'year', label: '年' },
  { key: 'category', label: '分类' },
];

/* 周一为周首，算该日期所在周的周一/周日 */
function getWeekRange(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00');
  const day = (d.getDay() + 6) % 7; // 周一=0 … 周日=6
  const monday = new Date(d);
  monday.setDate(d.getDate() - day);
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  return { monday, sunday };
}

function fmtRange(a: Date, b: Date) {
  const p = (n: number) => String(n).padStart(2, '0');
  return `${p(a.getMonth() + 1)}.${p(a.getDate())}-${p(b.getMonth() + 1)}.${p(b.getDate())}`;
}

function mmdd(dateStr: string) {
  const [, m, d] = dateStr.split('-');
  return `${m}-${d}`;
}

type Group = { key: string; title: string; items: Essay[] };

function computeGroups(tab: TabKey, arts: Essay[]): Group[] {
  if (tab === 'category') {
    const map = new Map<string, Essay[]>();
    for (const a of arts) {
      for (const t of a.tags) {
        if (!map.has(t)) map.set(t, []);
        map.get(t)!.push(a);
      }
    }
    return Array.from(map.entries())
      .map(([tag, items]) => ({
        key: tag,
        title: `#${tag}`,
        items: items.slice().sort((x, y) => y.date.localeCompare(x.date)),
      }))
      .sort((a, b) => b.items.length - a.items.length);
  }
  const map = new Map<string, { title: string; items: Essay[] }>();
  for (const a of arts) {
    const [y, m, d] = a.date.split('-');
    let key = '';
    let title = '';
    if (tab === 'day') {
      key = a.date;
      title = `${Number(m)}月${Number(d)}日`;
    } else if (tab === 'week') {
      const { monday, sunday } = getWeekRange(a.date);
      key = `${monday.getFullYear()}-${String(monday.getMonth() + 1).padStart(2, '0')}-${String(monday.getDate()).padStart(2, '0')}`;
      title = fmtRange(monday, sunday);
    } else if (tab === 'month') {
      key = `${y}-${m}`;
      title = `${y}年${Number(m)}月`;
    } else {
      key = y;
      title = `${y}年`;
    }
    if (!map.has(key)) map.set(key, { title, items: [] });
    map.get(key)!.items.push(a);
  }
  return Array.from(map.entries())
    .map(([key, g]) => ({
      key,
      title: g.title,
      items: g.items.slice().sort((x, y) => y.date.localeCompare(x.date)),
    }))
    .sort((a, b) => b.key.localeCompare(a.key));
}

const ACCENT = '#0078d4';

function EssayRow({
  essay,
  isLast,
  hovered,
  onHoverChange,
}: {
  essay: Essay;
  isLast: boolean;
  hovered: boolean;
  onHoverChange: (hover: boolean) => void;
}) {
  const fs = 'clamp(11px, 1.5cqw, 13px)';
  return (
    <div
      className="flex items-stretch gap-2.5 cursor-default"
      style={{ padding: 'clamp(7px, 0.9cqw, 11px) 0' }}
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
    >
      {/* 时间线节点列：圆圈 + 上下贯穿连线 */}
      <div className="flex flex-col items-center flex-shrink-0" style={{ width: 14 }}>
        <div className="flex-1" style={{ width: 0, borderLeft: '1px dashed #d1d5db' }} />
        <div className="flex items-center justify-center" style={{ width: 14, height: 8, overflow: 'visible' }}>
          <div
            className="transition-all duration-200"
            style={
              hovered
                ? { width: 4, height: 24, borderRadius: 2, background: ACCENT }
                : { width: 8, height: 8, borderRadius: '50%', background: '#d1d5db' }
            }
          />
        </div>
        <div
          className="flex-1"
          style={{ width: 0, borderLeft: isLast ? 'none' : '1px dashed #d1d5db' }}
        />
      </div>
      {/* 日期 */}
      <span
        className="font-medium text-gray-700 tabular-nums flex-shrink-0 self-center"
        style={{ fontSize: fs, width: 'clamp(38px, 5cqw, 50px)' }}
      >
        {mmdd(essay.date)}
      </span>
      {/* 标题 + 内容预览 */}
      <div className="flex-1 min-w-0 self-center">
        <span
          className="block truncate transition-all duration-200"
          style={{
            fontSize: fs,
            color: hovered ? ACCENT : '#374151',
            transform: hovered ? 'translateX(5px) scale(1.03)' : 'translateX(0) scale(1)',
            transformOrigin: 'left center',
          }}
        >
          {essay.title}
        </span>
        <p
          className="text-gray-400 truncate"
          style={{ fontSize: 'clamp(10px, 1.3cqw, 12px)' }}
        >
          {essay.content}
        </p>
      </div>
      {/* 标签 */}
      <span
        className="text-gray-400 ml-auto flex-shrink-0 whitespace-nowrap self-center"
        style={{ fontSize: fs }}
      >
        {essay.tags.map((t) => `#${t}`).join('  ')}
      </span>
    </div>
  );
}

function GroupCard({ group, index }: { group: Group; index: number }) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: 'easeOut' }}
      className="bg-white rounded-2xl w-full"
      style={{
        padding: 'clamp(14px, 2cqw, 22px)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
      }}
    >
      {/* header */}
      <div
        className="flex items-baseline gap-2"
        style={{
          marginBottom: 'clamp(6px, 0.8cqw, 10px)',
          paddingBottom: 'clamp(8px, 1cqw, 12px)',
          borderBottom: '1px solid #f3f4f6',
        }}
      >
        <span className="font-semibold text-gray-800" style={{ fontSize: 'clamp(14px, 2cqw, 17px)' }}>
          {group.title}
        </span>
        <span className="text-gray-300">•</span>
        <span className="text-gray-400" style={{ fontSize: 'clamp(11px, 1.5cqw, 13px)' }}>
          {group.items.length} 篇
        </span>
      </div>
      {/* items */}
      <div className="flex flex-col">
        {group.items.map((a, i) => (
          <EssayRow
            key={a.id}
            essay={a}
            isLast={i === group.items.length - 1}
            hovered={hoveredId === a.id}
            onHoverChange={(h) => setHoveredId(h ? a.id : null)}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function EssaysPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('month');
  const groups = useMemo(() => computeGroups(activeTab, essays), [activeTab]);

  return (
    <div
      className="h-full w-full flex flex-col items-center overflow-y-auto"
      style={{ background: '#fbfbfb' }}
    >
      <div className="flex-1 flex flex-col items-center w-full px-8 pt-10 pb-6" style={{ containerType: 'inline-size' }}>
        {/* 标题 */}
        <h2
          className="font-semibold text-gray-800"
          style={{ fontSize: 'clamp(20px, 3.4cqw, 28px)' }}
        >
          随笔
        </h2>

        {/* 分隔线 */}
        <div
          className="mt-3 mb-6"
          style={{
            width: 'clamp(60px, 10cqw, 90px)',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #0078d4, transparent)',
          }}
        />

        {/* tab 栏 */}
        <div
          className="flex items-center gap-1 p-1 rounded-full mb-6"
          style={{ background: 'rgba(229,231,235,0.6)' }}
        >
          {TABS.map((t) => {
            const active = t.key === activeTab;
            return (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                className="rounded-full transition-colors"
                style={{
                  padding: 'clamp(5px, 0.7cqw, 7px) clamp(12px, 1.6cqw, 16px)',
                  fontSize: 'clamp(12px, 1.6cqw, 14px)',
                  background: active ? ACCENT : 'transparent',
                  color: active ? '#fff' : '#6b7280',
                  fontWeight: active ? 600 : 400,
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* 分组列表 */}
        <div
          className="flex flex-col w-full mx-auto"
          style={{ gap: 'clamp(12px, 1.8cqw, 20px)', maxWidth: '800px' }}
        >
          {groups.length === 0 ? (
            <div className="text-center text-gray-400 py-10" style={{ fontSize: 'clamp(12px, 1.6cqw, 14px)' }}>
              暂无内容
            </div>
          ) : (
            groups.map((g, i) => (
              <GroupCard key={g.key} group={g} index={i} />
            ))
          )}
        </div>
      </div>

      {/* 底部签名 */}
      <div
        className="w-full text-center py-3 text-gray-400 flex-shrink-0"
        style={{ fontSize: 'clamp(10px, 1.4cqw, 12px)' }}
      >
        © 2026 Topaz · 日常的碎片想法
      </div>
    </div>
  );
}
