import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { SiLetterboxd } from 'react-icons/si';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '40px clamp(20px, 5vw, 60px)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--max-w)',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--heading)',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: 'var(--text-dim)',
          }}
        >
          &copy; {new Date().getFullYear()} Prashanth Sridhar
        </span>

        <div style={{ display: 'flex', gap: 16 }}>
          {[
            {
              icon: <FaLinkedinIn size={13} />,
              href: 'https://linkedin.com/in/prashanthsridhar95',
              color: '#00D4FF',
            },
            {
              icon: <FaFacebookF size={13} />,
              href: 'https://facebook.prashanthsridhar.com',
              color: '#A855F7',
            },
            {
              icon: <FaInstagram size={13} />,
              href: 'https://instagram.prashanthsridhar.com',
              color: '#FF2D78',
            },
            {
              icon: <HiOutlineMail size={14} />,
              href: 'mailto:hello@prashanthsridhar.com',
              color: '#FF6B35',
            },
            {
              icon: <SiLetterboxd size={13} />,
              href: 'https://letterboxd.com/prashanth_s95/diary/',
              color: '#FFD700',
            },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              style={{
                color: 'var(--text-dim)',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = s.color;
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-dim)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        <span
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.65rem',
            color: 'var(--text-dim)',
            letterSpacing: '0.5px',
          }}
        >
          React + TS · Fueled by ☕
        </span>
      </div>
    </footer>
  );
}
