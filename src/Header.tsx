import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onScrollTo: (id: string) => void;
}

const NAV_ITEMS = [
  { label: 'About', id: 'about', num: '01', color: 'var(--c-about)' },
  { label: 'Skills', id: 'skills', num: '02', color: 'var(--c-skills)' },
  { label: 'Work', id: 'experience', num: '03', color: 'var(--c-exp)' },
  { label: 'Projects', id: 'projects', num: '04', color: 'var(--c-projects)' },
  { label: 'Life', id: 'beyond', num: '05', color: 'var(--c-beyond)' },
  { label: 'Contact', id: 'contact', num: '06', color: 'var(--c-contact)' },
];

export default function Header({ onScrollTo }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(8,8,10,0.85)' : '#08080A',
        ...(scrolled ? {
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)',
        } : {}),
        transition: 'background 0.3s, border-bottom 0.3s',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--max-w)',
          margin: '0 auto',
          padding: '0 clamp(20px, 5vw, 60px)',
          height: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => onScrollTo('hero')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'var(--heading)',
            fontSize: '1.1rem',
            fontWeight: 700,
            color: 'var(--text)',
            letterSpacing: '-0.5px',
            transition: 'color 0.25s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--accent)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text)';
          }}
        >
          ps<span style={{ color: 'var(--accent)' }}>.</span>
        </button>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onScrollTo(item.id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--body)',
                fontSize: '0.8rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                padding: 0,
                transition: 'color 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: 4,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text)';
                const numEl = e.currentTarget.querySelector('.nav-num') as HTMLElement;
                if (numEl) { numEl.style.opacity = '1'; numEl.style.color = item.color; }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                const numEl = e.currentTarget.querySelector('.nav-num') as HTMLElement;
                if (numEl) { numEl.style.opacity = '0'; }
              }}
            >
              <span
                className="nav-num"
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.6rem',
                  color: item.color,
                  opacity: 0,
                  transition: 'opacity 0.2s',
                }}
              >
                {item.num}
              </span>
              {item.label}
            </button>
          ))}
          <button
            onClick={() => onScrollTo('contact')}
            className="btn btn--accent"
            style={{ padding: '8px 20px', fontSize: '0.78rem' }}
          >
            Say Hi 👋
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            cursor: 'pointer',
            padding: 8,
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ width: 18, height: 14, position: 'relative' }}>
            {[0, 6, 12].map((top, i) => (
              <span
                key={i}
                style={{
                  position: 'absolute',
                  left: 0,
                  top,
                  width: menuOpen && i === 1 ? 0 : 18,
                  height: 1.5,
                  background: 'var(--text)',
                  transition: 'all 0.3s ease',
                  transform: menuOpen
                    ? i === 0
                      ? 'translateY(6px) rotate(45deg)'
                      : i === 2
                        ? 'translateY(-6px) rotate(-45deg)'
                        : ''
                    : '',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mobile-menu"
            style={{
              position: 'fixed',
              top: 48,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(8,8,10,0.97)',
              backdropFilter: 'blur(24px)',
              padding: '40px 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
            }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onScrollTo(item.id);
                  setMenuOpen(false);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--body)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  padding: '14px 32px',
                  width: '100%',
                  textAlign: 'center',
                  transition: 'color 0.2s',
                }}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
