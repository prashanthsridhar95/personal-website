import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── data ──────────────────────────── */

interface Skill {
  name: string;
  level: number;
}

interface Category {
  key: string;
  label: string;
  skills: Skill[];
  color: string;
}

const CATEGORIES: Category[] = [
  {
    key: 'lang',
    label: 'Languages',
    color: '#CAFF04',
    skills: [
      { name: 'Kotlin', level: 95 },
      { name: 'Java', level: 90 },
      { name: 'C / C++', level: 55 },
    ],
  },
  {
    key: 'android',
    label: 'Android & Jetpack',
    color: '#A855F7',
    skills: [
      { name: 'Jetpack Compose', level: 90 },
      { name: 'Android SDK', level: 95 },
      { name: 'Data Binding', level: 85 },
      { name: 'ViewModel', level: 92 },
      { name: 'LiveData', level: 88 },
      { name: 'Room', level: 85 },
      { name: 'Retrofit', level: 90 },
      { name: 'Dagger / Hilt', level: 82 },
      { name: 'Espresso', level: 50 },
      { name: 'JUnit', level: 55 },
    ],
  },
  {
    key: 'arch',
    label: 'Architecture',
    color: '#00D4FF',
    skills: [
      { name: 'MVVM', level: 92 },
      { name: 'MVP', level: 80 },
      { name: 'MVI', level: 78 },
      { name: 'Clean Architecture', level: 88 },
    ],
  },
  {
    key: 'db',
    label: 'Databases',
    color: '#FF6B35',
    skills: [
      { name: 'SQLite', level: 88 },
      { name: 'Room', level: 86 },
      { name: 'SQLDelight', level: 80 },
    ],
  },
  {
    key: 'tools',
    label: 'Tools & More',
    color: '#FF2D78',
    skills: [
      { name: 'Android Studio', level: 95 },
      { name: 'Gradle', level: 85 },
      { name: 'Git', level: 88 },
      { name: 'REST APIs', level: 92 },
      { name: 'KMP / KMM', level: 85 },
      { name: 'l10n / i18n', level: 75 },
      { name: 'Design Patterns', level: 88 },
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

      {/* Skill bars */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px 48px',
          }}
        >
          {cat.skills.map((skill, idx) => (
            <div key={skill.name}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    color: 'var(--text)',
                  }}
                >
                  {skill.name}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '0.7rem',
                    color: 'var(--text-dim)',
                  }}
                >
                  {skill.level}%
                </span>
              </div>
              <div className="skill-bar-track">
                <motion.div
                  className="skill-bar-fill"
                  style={{
                    background: cat.color,
                    boxShadow: `0 0 8px ${cat.color}25`,
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    delay: idx * 0.04,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
