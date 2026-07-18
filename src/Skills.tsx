import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── data ──────────────────────────── */

interface Category {
  key: string;
  label: string;
  tools: string[];
  color: string;
}

const CATEGORIES: Category[] = [
  {
    key: 'lang',
    label: 'Languages',
    color: '#CAFF04',
    tools: ['Kotlin', 'Java', 'C / C++'],
  },
  {
    key: 'android',
    label: 'Android & Jetpack',
    color: '#A855F7',
    tools: [
      'Jetpack Compose',
      'Android SDK',
      'Data Binding',
      'ViewModel',
      'LiveData',
      'Room',
      'Retrofit',
      'Dagger / Hilt',
      'Espresso',
      'JUnit',
    ],
  },
  {
    key: 'arch',
    label: 'Architecture',
    color: '#00D4FF',
    tools: ['MVVM', 'MVP', 'MVI', 'Clean Architecture'],
  },
  {
    key: 'db',
    label: 'Databases',
    color: '#FF6B35',
    tools: ['SQLite', 'Room', 'SQLDelight'],
  },
  {
    key: 'tools',
    label: 'Tools & More',
    color: '#FF2D78',
    tools: [
      'Android Studio',
      'Gradle',
      'Git',
      'REST APIs',
      'KMP / KMM',
      'l10n / i18n',
      'Design Patterns',
    ],
  },
];

/* ─── component ─────────────────────── */

export default function Skills() {
  const [active, setActive] = useState('android');
  const cat = CATEGORIES.find((c) => c.key === active)!;

  return (
    <div className="container">
      <div className="section-label">
        <span className="section-num" style={{ color: 'var(--c-skills)' }}>02</span>
        <span className="section-name">Tech Stack</span>
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
        Tools I reach for daily<span style={{ color: 'var(--c-skills)' }}>.</span>
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
          fontFamily: 'var(--mono)',
        }}
      >
        // kotlin supremacy, fight me
      </motion.p>

      {/* Tabs */}
      <div className="skill-tabs">
        {CATEGORIES.map((c) => (
          <button
            key={c.key}
            onClick={() => setActive(c.key)}
            className={`skill-tab${active === c.key ? ' skill-tab--active' : ''}`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Tool tags */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          {cat.tools.map((tool, idx) => (
            <motion.span
              key={tool}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: idx * 0.03,
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="tag-pop"
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.78rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                padding: '8px 18px',
                border: `1px solid ${cat.color}30`,
                borderRadius: 'var(--radius)',
                background: `${cat.color}08`,
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = cat.color;
                e.currentTarget.style.color = 'var(--text)';
                e.currentTarget.style.background = `${cat.color}15`;
                e.currentTarget.style.boxShadow = `0 0 12px ${cat.color}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${cat.color}30`;
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.background = `${cat.color}08`;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {tool}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
