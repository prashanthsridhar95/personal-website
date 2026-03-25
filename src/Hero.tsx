import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { SiLetterboxd } from 'react-icons/si';
import ParticleNetwork from './ParticleNetwork';

interface HeroProps {
  onScrollTo: (id: string) => void;
}

const STATUS_LINES = [
  'shipping KMP modules',
  'reviewing pull requests',
  'debating biriyani rankings',
  'watching Tamil cinema',
  'optimizing Gradle builds',
];

export default function Hero({ onScrollTo }: HeroProps) {
  const [statusIdx, setStatusIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setStatusIdx((i) => (i + 1) % STATUS_LINES.length),
      2800,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <ParticleNetwork />
      <div
        style={{
          minHeight: '100dvh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '64px clamp(20px, 5vw, 60px) 80px',
          maxWidth: 'var(--max-w)',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
      {/* Monospace label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.72rem',
          fontWeight: 600,
          letterSpacing: '3px',
          color: 'var(--accent)',
          textTransform: 'uppercase',
          marginBottom: 24,
        }}
      >
        Mobile Platform Engineer & KMP Architect
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="heading-xl"
        style={{ marginBottom: 24 }}
      >
        Prashanth
        <br />
        Sridhar
        <span style={{ color: 'var(--accent)', animation: 'accent-pulse 3s ease-in-out infinite' }}>
          .
        </span>
      </motion.h1>

      {/* Subtitle with personality */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        style={{
          fontSize: 'clamp(1rem, 2vw, 1.15rem)',
          color: 'var(--text-secondary)',
          maxWidth: 520,
          lineHeight: 1.7,
          marginBottom: 24,
        }}
      >
        Building the shared framework that powers{' '}
        <a href="https://www.zoho.com/projects/" target="_blank" rel="noreferrer" style={{ color: 'var(--text)', fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid var(--text-dim)', transition: 'border-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--text-dim)'}>Zoho Projects</a>{' '}
        across every platform. 6+ years crafting scalable mobile systems —
        fueled by filter coffee and AR Rahman playlists.
      </motion.p>

      {/* Kotlin code snippet — rotating status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.72rem',
          color: 'var(--text-dim)',
          marginBottom: 32,
          display: 'flex',
          alignItems: 'center',
          gap: 0,
        }}
      >
        <span style={{ color: '#CC7832' }}>val&nbsp;</span>
        <span style={{ color: 'var(--text-secondary)' }}>status</span>
        <span style={{ color: 'var(--text-dim)' }}>&nbsp;=&nbsp;</span>
        <span style={{ color: '#6A8759' }}>"</span>
        <motion.span
          key={statusIdx}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.3 }}
          style={{ color: '#6A8759' }}
        >
          {STATUS_LINES[statusIdx]}
        </motion.span>
        <span style={{ color: '#6A8759' }}>"</span>
        <span
          style={{
            color: 'var(--accent)',
            animation: 'blink 1s step-end infinite',
            marginLeft: 1,
          }}
        >
          ▎
        </span>
      </motion.div>

      {/* Divider line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{
          width: '100%',
          maxWidth: 520,
          height: 1,
          background: 'var(--border)',
          transformOrigin: 'left',
          marginBottom: 24,
        }}
      />

      {/* Location + Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.5 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: 520,
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.72rem',
            color: 'var(--text-dim)',
            letterSpacing: '1px',
          }}
        >
          📍 Coimbatore, India
        </span>

        <div style={{ display: 'flex', gap: 8 }}>
          {[
            { icon: <FaLinkedinIn size={14} />, href: 'https://linkedin.com/in/prashanthsridhar95', label: 'LinkedIn', color: '#00D4FF' },
            { icon: <FaFacebookF size={14} />, href: 'https://facebook.prashanthsridhar.com', label: 'Facebook', color: '#A855F7' },
            { icon: <FaInstagram size={14} />, href: 'https://instagram.prashanthsridhar.com', label: 'Instagram', color: '#FF2D78' },
            { icon: <HiOutlineMail size={15} />, href: 'mailto:hello@prashanthsridhar.com', label: 'Email', color: '#FF6B35' },
            { icon: <SiLetterboxd size={14} />, href: 'https://letterboxd.com/prashanth_s95/diary/', label: 'Letterboxd', color: '#FFD700' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              style={{
                width: 36,
                height: 36,
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-dim)',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: 'translateY(0)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = link.color;
                e.currentTarget.style.borderColor = link.color + '50';
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)';
                e.currentTarget.style.boxShadow = `0 6px 20px ${link.color}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-dim)';
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => onScrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'var(--mono)',
          fontSize: '0.6rem',
          color: 'var(--accent)',
          letterSpacing: '2px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span>SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ width: 1, height: 24, background: 'var(--accent)' }}
        />
      </motion.button>
    </div>
    </div>
  );
}
