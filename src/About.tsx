import { motion } from 'framer-motion';
import { SiZoho } from 'react-icons/si';

export default function About() {
  const stats: { label: string; value: string; href?: string; icon?: boolean }[] = [
    { label: 'Company', value: 'Zoho', href: 'https://www.zoho.com/', icon: true },
    { label: 'Experience', value: '6+ Years' },
    { label: 'Platform', value: 'Android' },
    { label: 'Languages', value: 'Kotlin · Java' },
    { label: 'Focus', value: 'KMP Architecture' },
  ];

  return (
    <div className="container">
      {/* Section label */}
      <div className="section-label">
        <span className="section-num" style={{ color: 'var(--c-about)' }}>01</span>
        <span className="section-name">About</span>
        <div className="section-line" />
      </div>

      <div className="about-grid">
        {/* Bio */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading-lg"
            style={{ marginBottom: 24 }}
          >
            I build things that ship
            <br />
            across platforms<span style={{ color: 'var(--c-about)' }}>.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.85,
              color: 'var(--text-secondary)',
              marginBottom: 20,
            }}
          >
            <span style={{ color: 'var(--text)', fontWeight: 600 }}>
              Mobile Platform Engineer & KMP Architect
            </span>{' '}
            at <a href="https://www.zoho.com/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--text-dim)', textDecoration: 'none' }}>Zoho</a> with 6+ years of experience. I own the shared backend
            framework powering <a href="https://www.zoho.com/projects/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--text-dim)', textDecoration: 'none' }}>Zoho Projects</a> across Android, iOS & Desktop —
            basically, I write Kotlin once so nobody else has to write it thrice. 😄
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.85,
              color: 'var(--text-secondary)',
            }}
          >
            From crafting reusable UI components to architecting a cross-platform
            SDK with Kotlin Multiplatform — my day is all about making code
            travel well. Think of me as a compile-once, run-everywhere kind of person.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            borderLeft: '2px solid var(--c-about)',
            paddingLeft: 32,
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                paddingBottom: i < stats.length - 1 ? 24 : 0,
                marginBottom: i < stats.length - 1 ? 24 : 0,
                borderBottom:
                  i < stats.length - 1 ? '1px solid var(--border)' : 'none',
                transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  color: 'var(--text-dim)',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: 6,
                }}
              >
                {s.label}
              </div>
              <div
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--text)',
                }}
              >
                {s.href ? (
                  <a href={s.href} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>{s.icon ? <SiZoho size={48} /> : s.value}</a>
                ) : s.value}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
