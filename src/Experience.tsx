import { motion } from 'framer-motion';
import { FiTrendingUp, FiCode, FiCpu, FiUsers } from 'react-icons/fi';

const ROLES = [
  {
    title: 'Mobile Platform Engineer & KMP Architect',
    period: '2022 – Present',
    tag: 'Current',
    icon: <FiCpu size={18} />,
    color: '#FF6B35',
    points: [
      'Own the Kotlin Multiplatform architecture powering Zoho Projects across Android, iOS & Desktop.',
      'Drive cross-platform decisions — API layer, persistence (SQLDelight), and shared business logic.',
      'Define technical direction for the mobile org; mentor junior engineers on platform design.',
    ],
  },
  {
    title: 'Technology Specialist — Android',
    period: '2020 – 2022',
    icon: <FiCode size={18} />,
    color: '#A855F7',
    points: [
      'Led development of high-impact modules — Gantt Chart and Spreadsheet View.',
      'Built org-wide reusable UI components adopted across multiple Zoho Android apps.',
      'Introduced Jetpack Compose into the codebase; championed modern Android practices.',
    ],
  },
  {
    title: 'Member Technical Staff',
    period: '2019 – 2020',
    icon: <FiTrendingUp size={18} />,
    color: '#00D4FF',
    points: [
      'Started as a fresh grad — shipped production features for Zoho Projects Android within weeks.',
      'Shipped Global Search across tasks, issues, and milestones.',
      'Earned trust fast. Took ownership of critical modules by end of first year.',
    ],
  },
];



export default function Experience() {
  return (
    <div className="container">
      <div className="section-label">
        <span className="section-num" style={{ color: 'var(--c-exp)' }}>03</span>
        <span className="section-name">Experience</span>
        <div className="section-line" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="heading-lg"
        style={{ marginBottom: 16 }}
      >
        One company, many hats<span style={{ color: 'var(--c-exp)' }}>.</span>
      </motion.h2>

      {/* Company info */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
        style={{
          display: 'flex',
          alignItems: 'baseline',
          flexWrap: 'wrap',
          gap: '8px 16px',
          marginBottom: 48,
        }}
      >
        <a href="https://www.zoho.com/" target="_blank" rel="noreferrer" style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--text-dim)', transition: 'border-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--c-exp)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--text-dim)'}>
          Zoho Corporation
        </a>
        <span
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.7rem',
            color: 'var(--text-dim)',
          }}
        >
          Feb 2019 – Present
        </span>
      </motion.div>

      {/* Role timeline */}
      <div className="timeline">
        {ROLES.map((role, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            style={{
              position: 'relative',
              paddingBottom: i < ROLES.length - 1 ? 40 : 0,
            }}
          >
            <div className="timeline-dot" style={{ background: role.color, boxShadow: `0 0 10px ${role.color}40` }} />

            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 4,
                  flexWrap: 'wrap',
                }}
              >
                <span style={{ color: role.color, display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                  {role.icon}
                </span>
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)' }}>
                  {role.title}
                </span>
                {role.tag && (
                  <span
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '0.6rem',
                      fontWeight: 600,
                      color: 'var(--c-exp)',
                      padding: '2px 8px',
                      border: '1px solid rgba(255,107,53,0.25)',
                      borderRadius: 'var(--radius)',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {role.tag}
                  </span>
                )}
              </div>

              <span
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.65rem',
                  color: 'var(--text-dim)',
                  display: 'block',
                  marginBottom: 10,
                }}
              >
                {role.period}
              </span>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {role.points.map((pt, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: '0.85rem',
                      lineHeight: 1.75,
                      color: 'var(--text-secondary)',
                      paddingLeft: 16,
                      position: 'relative',
                      marginBottom: j < role.points.length - 1 ? 4 : 0,
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: '0.45em',
                        width: 4,
                        height: 4,
                        borderRadius: '50%',
                        background: role.color,
                        opacity: 0.5,
                      }}
                    />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          marginTop: 56,
          paddingTop: 32,
          borderTop: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'baseline',
          flexWrap: 'wrap',
          gap: '4px 16px',
        }}
      >
        <FiUsers size={14} style={{ color: 'var(--text-dim)', flexShrink: 0, position: 'relative', top: 2 }} />
        <span
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.65rem',
            color: 'var(--text-dim)',
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          Education
        </span>
        <span
          style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)' }}
        >
          B.E. Computer Science & Engineering
        </span>
        <span
          style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}
        >
          <a href="https://www.cit.edu.in/" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid var(--text-dim)', transition: 'border-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--c-exp)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--text-dim)'}>Coimbatore Institute of Technology</a> · 2018
        </span>
      </motion.div>
    </div>
  );
}
