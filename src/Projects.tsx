import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

/* ── Mini visual illustrations for each project ── */

function SharedBackendVisual({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 220 80" fill="none" style={{ width: '100%', maxWidth: 220, height: 'auto' }}>
      {/* Three platform blocks */}
      <rect x="20" y="8" width="40" height="24" rx="4" fill={color} opacity={0.15} stroke={color} strokeWidth="1" />
      <text x="40" y="24" textAnchor="middle" fill={color} fontSize="8" fontFamily="var(--mono)" opacity={0.7}>AND</text>
      <rect x="90" y="8" width="40" height="24" rx="4" fill={color} opacity={0.15} stroke={color} strokeWidth="1" />
      <text x="110" y="24" textAnchor="middle" fill={color} fontSize="8" fontFamily="var(--mono)" opacity={0.7}>iOS</text>
      <rect x="160" y="8" width="40" height="24" rx="4" fill={color} opacity={0.15} stroke={color} strokeWidth="1" />
      <text x="180" y="24" textAnchor="middle" fill={color} fontSize="8" fontFamily="var(--mono)" opacity={0.7}>DSK</text>
      {/* Connector lines */}
      <line x1="40" y1="32" x2="40" y2="50" stroke={color} strokeWidth="1" opacity={0.35} />
      <line x1="110" y1="32" x2="110" y2="50" stroke={color} strokeWidth="1" opacity={0.35} />
      <line x1="180" y1="32" x2="180" y2="50" stroke={color} strokeWidth="1" opacity={0.35} />
      <line x1="40" y1="50" x2="180" y2="50" stroke={color} strokeWidth="1" opacity={0.35} />
      <line x1="110" y1="50" x2="110" y2="56" stroke={color} strokeWidth="1" opacity={0.35} />
      {/* Shared layer */}
      <rect x="40" y="56" width="140" height="20" rx="4" fill={color} opacity={0.12} stroke={color} strokeWidth="1.2" />
      <text x="110" y="69" textAnchor="middle" fill={color} fontSize="8" fontFamily="var(--mono)" fontWeight="600">KMP Shared Layer</text>
    </svg>
  );
}

function GanttVisual({ color }: { color: string }) {
  const bars = [
    { x: 16, w: 100, y: 10 },
    { x: 50, w: 80, y: 26 },
    { x: 30, w: 120, y: 42 },
    { x: 80, w: 90, y: 58 },
  ];
  return (
    <svg viewBox="0 0 220 80" fill="none" style={{ width: '100%', maxWidth: 220, height: 'auto' }}>
      {/* Grid lines */}
      {[55, 110, 165].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="80" stroke={color} strokeWidth="0.5" opacity={0.1} />
      ))}
      {/* Bars */}
      {bars.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={b.y} width={b.w} height={10} rx="3" fill={color} opacity={0.12 + i * 0.06} />
          <rect x={b.x} y={b.y} width={b.w} height={10} rx="3" stroke={color} strokeWidth="0.8" fill="none" opacity={0.3} />
          {/* Progress fill */}
          <rect x={b.x} y={b.y} width={b.w * (0.4 + i * 0.15)} height={10} rx="3" fill={color} opacity={0.25} />
        </g>
      ))}
      {/* Today marker */}
      <line x1="140" y1="2" x2="140" y2="76" stroke={color} strokeWidth="1.2" opacity={0.5} strokeDasharray="3 3" />
      <circle cx="140" cy="2" r="2.5" fill={color} opacity={0.6} />
    </svg>
  );
}

function SpreadsheetVisual({ color }: { color: string }) {
  const cols = 5;
  const rows = 4;
  const cellW = 36;
  const cellH = 14;
  const gap = 2;
  const startX = 14;
  const startY = 8;
  return (
    <svg viewBox="0 0 220 80" fill="none" style={{ width: '100%', maxWidth: 220, height: 'auto' }}>
      {/* Header row */}
      {Array.from({ length: cols }).map((_, c) => (
        <rect key={`h-${c}`} x={startX + c * (cellW + gap)} y={startY} width={cellW} height={cellH} rx="2" fill={color} opacity={0.2} />
      ))}
      {/* Data rows */}
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => (
          <rect
            key={`${r}-${c}`}
            x={startX + c * (cellW + gap)}
            y={startY + (r + 1) * (cellH + gap)}
            width={cellW}
            height={cellH}
            rx="2"
            fill={color}
            opacity={0.06 + (r === 1 && c < 3 ? 0.08 : 0)}
            stroke={color}
            strokeWidth="0.5"
            strokeOpacity={0.15}
          />
        ))
      )}
      {/* Selection highlight */}
      <rect x={startX + 0 * (cellW + gap) - 1} y={startY + 2 * (cellH + gap) - 1} width={cellW * 3 + gap * 2 + 2} height={cellH + 2} rx="3" fill="none" stroke={color} strokeWidth="1.2" opacity={0.5} />
    </svg>
  );
}

function DesignSystemVisual({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 220 80" fill="none" style={{ width: '100%', maxWidth: 220, height: 'auto' }}>
      {/* Button component */}
      <rect x="12" y="8" width="56" height="20" rx="4" fill={color} opacity={0.2} stroke={color} strokeWidth="0.8" />
      <text x="40" y="21" textAnchor="middle" fill={color} fontSize="7" fontFamily="var(--mono)" opacity={0.6}>Button</text>
      {/* Toggle */}
      <rect x="80" y="10" width="28" height="14" rx="7" fill={color} opacity={0.15} stroke={color} strokeWidth="0.8" />
      <circle cx="100" cy="17" r="5" fill={color} opacity={0.35} />
      {/* Chip */}
      <rect x="120" y="10" width="40" height="16" rx="8" fill={color} opacity={0.1} stroke={color} strokeWidth="0.8" />
      <circle cx="130" cy="18" r="3" fill={color} opacity={0.3} />
      {/* Card block */}
      <rect x="170" y="6" width="38" height="26" rx="4" fill={color} opacity={0.08} stroke={color} strokeWidth="0.8" />
      <rect x="175" y="11" width="28" height="4" rx="1" fill={color} opacity={0.2} />
      <rect x="175" y="19" width="18" height="3" rx="1" fill={color} opacity={0.12} />
      <rect x="175" y="25" width="24" height="3" rx="1" fill={color} opacity={0.12} />
      {/* Color swatches row */}
      {[0, 1, 2, 3, 4].map((i) => (
        <circle key={i} cx={24 + i * 20} cy={52} r={7} fill={color} opacity={0.08 + i * 0.06} stroke={color} strokeWidth="0.6" />
      ))}
      {/* Spacing ruler */}
      <line x1="140" y1="48" x2="200" y2="48" stroke={color} strokeWidth="0.5" opacity={0.25} />
      {[140, 152, 168, 188, 200].map((x) => (
        <line key={x} x1={x} y1="45" x2={x} y2="51" stroke={color} strokeWidth="0.8" opacity={0.3} />
      ))}
      {/* Typography lines */}
      <rect x="12" y="66" width="70" height="4" rx="1" fill={color} opacity={0.2} />
      <rect x="12" y="74" width="50" height="3" rx="1" fill={color} opacity={0.1} />
      <rect x="100" y="66" width="50" height="4" rx="1" fill={color} opacity={0.15} />
      <rect x="100" y="74" width="35" height="3" rx="1" fill={color} opacity={0.08} />
    </svg>
  );
}

function GlobalSearchVisual({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 220 80" fill="none" style={{ width: '100%', maxWidth: 220, height: 'auto' }}>
      {/* Search bar */}
      <rect x="20" y="6" width="180" height="22" rx="6" fill={color} opacity={0.08} stroke={color} strokeWidth="1" />
      {/* Magnifying glass icon */}
      <circle cx="34" cy="17" r="5" stroke={color} strokeWidth="1.2" opacity={0.5} fill="none" />
      <line x1="38" y1="21" x2="42" y2="25" stroke={color} strokeWidth="1.2" opacity={0.5} />
      {/* Search text placeholder */}
      <rect x="48" y="14" width="60" height="4" rx="1" fill={color} opacity={0.2} />
      {/* Cursor blink */}
      <rect x="112" y="11" width="1.5" height="10" rx="0.5" fill={color} opacity={0.4} />
      {/* Result items */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="20" y={36 + i * 16} width="180" height="12" rx="3" fill={color} opacity={0.04 + (i === 0 ? 0.06 : 0)} stroke={color} strokeWidth="0.5" strokeOpacity={0.15} />
          <rect x="28" y={39 + i * 16} width={40 - i * 8} height="3" rx="1" fill={color} opacity={0.25 - i * 0.05} />
          <rect x="28" y={44 + i * 16} width={80 + i * 10} height="2" rx="1" fill={color} opacity={0.1} />
          {/* Match highlight */}
          <rect x={72 + i * 16} y={39 + i * 16} width="16" height="3" rx="1" fill={color} opacity={0.35} />
        </g>
      ))}
    </svg>
  );
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  isHero?: boolean;
  color: string;
  visual: (color: string) => ReactNode;
}

const PROJECTS: Project[] = [
  {
    title: 'Shared Backend Framework',
    description:
      'Cross-platform KMP framework powering Zoho Projects across Android, iOS & Desktop. API communication, SQLDelight persistence, clean interfaces — ~50% less dev time.',
    tags: ['KMP', 'SQLDelight', 'REST API'],
    isHero: true,
    color: '#FF2D78',
    visual: (c) => <SharedBackendVisual color={c} />,
  },
  {
    title: 'Gantt Chart',
    description:
      'Visual project timeline for Android — planning, tracking, and quick-glance overviews.',
    tags: ['XML', 'Custom View', 'Kotlin'],
    color: '#A855F7',
    visual: (c) => <GanttVisual color={c} />,
  },
  {
    title: 'Spreadsheet View',
    description:
      'Versatile listing component adapted for Tasks and Users modules. Reusable across data domains.',
    tags: ['Jetpack Compose', 'Custom Layout'],
    color: '#00D4FF',
    visual: (c) => <SpreadsheetVisual color={c} />,
  },
  {
    title: 'Design System',
    description:
      "Org-wide reusable UI components ensuring visual consistency across Zoho's Android apps.",
    tags: ['Jetpack Compose', 'Design Tokens'],
    color: '#CAFF04',
    visual: (c) => <DesignSystemVisual color={c} />,
  },
  {
    title: 'Global Search',
    description:
      'Full-text search across tasks, issues, milestones and more in Zoho Projects.',
    tags: ['Search', 'REST API', 'UX'],
    color: '#FF6B35',
    visual: (c) => <GlobalSearchVisual color={c} />,
  },
];

export default function Projects() {
  return (
    <div className="container">
      <div className="section-label">
        <span className="section-num" style={{ color: 'var(--c-projects)' }}>04</span>
        <span className="section-name">Projects</span>
        <div className="section-line" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="heading-lg"
        style={{ marginBottom: 12 }}
      >
        Things I've shipped<span style={{ color: 'var(--c-projects)' }}>.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
        style={{
          fontSize: '0.85rem',
          color: 'var(--text-dim)',
          marginBottom: 40,
        }}
      >
        Real products, used by real people.
      </motion.p>

      <div className="project-grid">
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            className="project-card"
            style={{ '--card-accent': p.color } as React.CSSProperties}
            onMouseEnter={(e) => {
              const bar = e.currentTarget.querySelector('.project-bar') as HTMLElement;
              const num = e.currentTarget.querySelector('.project-num') as HTMLElement;
              if (bar) { bar.style.opacity = '1'; bar.style.background = p.color; }
              if (num) num.style.color = p.color;
            }}
            onMouseLeave={(e) => {
              const bar = e.currentTarget.querySelector('.project-bar') as HTMLElement;
              const num = e.currentTarget.querySelector('.project-num') as HTMLElement;
              if (bar) bar.style.opacity = '0';
              if (num) num.style.color = 'var(--text-dim)';
            }}
          >
            {/* Colored top bar */}
            <div
              className="project-bar"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background: p.color,
                opacity: 0,
                transition: 'opacity 0.3s',
              }}
            />

            {/* Top row: number + title (left) | visual (right) */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 10, position: 'relative', zIndex: 1 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Project number */}
                <span
                  className="project-num"
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '0.6rem',
                    color: 'var(--text-dim)',
                    transition: 'color 0.3s',
                    marginBottom: 8,
                    display: 'block',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--heading)',
                    fontSize: p.isHero ? '1.2rem' : '1rem',
                    fontWeight: 700,
                    color: 'var(--text)',
                    letterSpacing: '-0.3px',
                  }}
                >
                  {p.title}
                </h3>
              </div>

              {/* Visual illustration */}
              <div
                style={{
                  width: p.isHero ? 180 : 120,
                  flexShrink: 0,
                  opacity: 0.5,
                  transition: 'opacity 0.3s',
                }}
                className="project-visual"
              >
                {p.visual(p.color)}
              </div>
            </div>

            <p
              style={{
                fontSize: '0.85rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: 20,
                position: 'relative',
                zIndex: 1,
              }}
            >
              {p.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, position: 'relative', zIndex: 1 }}>
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '0.65rem',
                    fontWeight: 500,
                    color: 'var(--text-dim)',
                    padding: '4px 10px',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
