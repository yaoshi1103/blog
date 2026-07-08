'use client';

import React from 'react';

/* 个人介绍数据 */
const introLines: string[] = [
  '研0 · 控制工程与机器视觉',
  'INFJ · 热爱技术与设计',
  '南方城市 · 追求工作生活平衡',
];

export default function AboutPage() {
  return (
    <div
      className="h-full w-full flex flex-col items-center overflow-y-auto"
      style={{ background: '#fbfbfb' }}
    >
      <div className="flex-1 flex flex-col items-center justify-center w-full px-8 py-10" style={{ containerType: 'inline-size' }}>
        {/* 头像圆圈 */}
        <div
          className="rounded-full overflow-hidden flex-shrink-0"
          style={{
            width: 'clamp(120px, 22cqw, 180px)',
            height: 'clamp(120px, 22cqw, 180px)',
            border: '3px solid #fff',
            boxShadow: '0 4px 16px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/touxiang.jpg"
            alt="头像"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* 姓名 */}
        <h1
          className="font-semibold text-gray-800 mt-6"
          style={{ fontSize: 'clamp(20px, 3.4cqw, 28px)' }}
        >
          Topaz
        </h1>

        {/* 分隔线 */}
        <div
          className="mt-3 mb-5"
          style={{
            width: 'clamp(60px, 10cqw, 90px)',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #0078d4, transparent)',
          }}
        />

        {/* 个人介绍 */}
        <div className="flex flex-col items-center gap-2.5">
          {introLines.map((line, i) => (
            <p
              key={i}
              className="text-gray-600 text-center"
              style={{ fontSize: 'clamp(12px, 1.9cqw, 15px)' }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* 底部装饰小点 */}
        <div className="flex gap-1.5 mt-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0078d4]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#0078d4] opacity-50" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#0078d4] opacity-25" />
        </div>
      </div>

      {/* 底部签名 */}
      <div
        className="w-full text-center py-3 text-gray-400 flex-shrink-0"
        style={{ fontSize: 'clamp(10px, 1.4cqw, 12px)' }}
      >
        © 2026 Topaz · 欢迎来到我的数字桌面
      </div>
    </div>
  );
}
