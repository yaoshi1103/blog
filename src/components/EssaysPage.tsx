'use client';

import React from 'react';
import { motion } from 'framer-motion';

/* 随笔数据 */
type Essay = {
  id: number;
  title: string;
  date: string;
  content: string;
  tags: string[];
};

const essays: Essay[] = [
  {
    id: 1,
    title: '动效参数的手感',
    date: '2026-07-09',
    content: '把数字桌面的窗口动效调顺了。spring stiffness 400 damping 25，比预设的顺滑许多。改参数这种事，果然还得靠自己的手感试出来，教程里抄不来。',
    tags: ['vibe coding', '前端'],
  },
  {
    id: 2,
    title: '滤波器与 PID 是一对',
    date: '2026-07-03',
    content: '控制课上讲 PID 整定，突然反应过来：滤波器和 PID 其实是一对，前者收拾信号，后者收拾误差。机器视觉里这俩谁也躲不掉，算是把专业课串起来了。',
    tags: ['控制工程', '学习'],
  },
  {
    id: 3,
    title: '最小可运行的 Agent 跑通了',
    date: '2026-06-22',
    content: '跟着教程搭了个最小可运行的 Agent，工具调用跑通的那一刻有点上头。下一步想接 MediaPipe，让它真的"看得见"——这才对得起"机器视觉"这个方向。',
    tags: ['AI Agent', 'MediaPipe'],
  },
  {
    id: 4,
    title: 'INFJ 的试错方式',
    date: '2026-06-12',
    content: 'INFJ 的苦恼：方案没想清楚前不想开口，可 vibe coding 又要求快速试错。和解的办法是——先在代码里试，试完再讲。代码不撒谎，比口头推演省事。',
    tags: ['随想'],
  },
  {
    id: 5,
    title: '博客迁到 Next.js',
    date: '2026-06-01',
    content: '把博客从 Hexo 迁到 Next.js，折腾了一整个周末。静态导出 + Cloudflare Pages，零成本上线，研究生钱包友好。绿点也保住了，值。',
    tags: ['博客', '部署'],
  },
];

function EssayCard({ essay, index }: { essay: Essay; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: 'easeOut' }}
      whileHover={{ scale: 1.02, transition: { duration: 0.15 } }}
      className="bg-white rounded-2xl border border-gray-100 cursor-default hover:border-[#0078d4]/30 hover:shadow-md transition-colors w-full"
      style={{
        padding: 'clamp(14px, 2cqw, 24px)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
      }}
    >
      {/* 日期 */}
      <div
        className="text-[#0078d4] mb-2"
        style={{ fontSize: 'clamp(11px, 1.5cqw, 13px)' }}
      >
        {essay.date}
      </div>
      {/* 标题 */}
      <h3
        className="font-semibold text-gray-800 leading-tight mb-2"
        style={{ fontSize: 'clamp(15px, 2.2cqw, 19px)' }}
      >
        {essay.title}
      </h3>
      {/* 分隔线 */}
      <div
        className="mb-3"
        style={{
          width: 'clamp(28px, 4cqw, 40px)',
          height: '1.5px',
          background: 'linear-gradient(90deg, transparent, #0078d4, transparent)',
        }}
      />
      {/* 正文 */}
      <p
        className="text-gray-600 leading-relaxed mb-3"
        style={{ fontSize: 'clamp(12px, 1.7cqw, 15px)' }}
      >
        {essay.content}
      </p>
      {/* 标签 */}
      <div className="flex flex-wrap gap-1.5">
        {essay.tags.map((tag) => (
          <span
            key={tag}
            className="text-[#0078d4] bg-[#0078d4]/8 rounded-full px-2 py-0.5"
            style={{ fontSize: 'clamp(10px, 1.3cqw, 12px)' }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function EssaysPage() {
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
          className="mt-3 mb-8"
          style={{
            width: 'clamp(60px, 10cqw, 90px)',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #0078d4, transparent)',
          }}
        />

        {/* 随笔列表 */}
        <div
          className="flex flex-col w-full mx-auto"
          style={{
            gap: 'clamp(12px, 1.8cqw, 20px)',
            maxWidth: '600px',
          }}
        >
          {essays.map((essay, index) => (
            <EssayCard key={essay.id} essay={essay} index={index} />
          ))}
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
