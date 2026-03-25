import { motion } from 'framer-motion';
import { SiLetterboxd } from 'react-icons/si';
import type { ReactNode } from 'react';

interface Tag {
  label: string;
  href?: string;
}

interface Card {
  emoji: string;
  title: ReactNode;
  text: ReactNode;
  tags: Tag[];
  accent: string;
  link?: { href: string; label: string };
}

const linkStyle = (color: string) => ({
  color,
  textDecoration: 'none' as const,
  borderBottom: `1px solid ${color}40`,
  transition: 'border-color 0.2s',
  fontWeight: 500 as const,
});

const CARDS: Card[] = [
  {
    emoji: '🍔',
    title: 'Foodie at Heart',
    text: <>From Coimbatore's street-side kaalan to Chettinad spreads — a sucker for a perfect burger (recent favourite: <a href="https://www.instagram.com/smashguys.in/" target="_blank" rel="noreferrer" style={linkStyle('#FF8A65')}>Smash Guys</a>), great biriyani, and filter coffee that hits different. Swiggy over Zomato, any day.</>,
    tags: [
      { label: 'Burgers', href: 'https://en.wikipedia.org/wiki/Hamburger' },
      { label: 'Biriyani', href: 'https://en.wikipedia.org/wiki/Biryani' },
      { label: 'Filter Coffee', href: 'https://en.wikipedia.org/wiki/Indian_filter_coffee' },
      { label: 'Smash Guys', href: 'https://www.instagram.com/smashguys.in/' },
    ],
    accent: '#FF8A65',
  },
  {
    emoji: '🎬',
    title: <>Cinema Payyan <span style={{ fontWeight: 400, fontSize: '0.8rem', color: 'var(--text-dim)' }}>(Not <a href="https://cinemapayyan.com" target="_blank" rel="noreferrer" style={linkStyle('#64B5F6')}>him</a>. Though he's my brother 😜)</span></>,
    text: <>You can find me at <a href="https://maps.app.goo.gl/vY5gbPvwKufQewGg6" target="_blank" rel="noreferrer" style={linkStyle('#64B5F6')}>Broadway cinemas</a> almost every weekend. Tamil cinema, Hollywood, auteur films — if it's on the big screen, I'm there. Recent favourite — Dhurandhar.</>,
    tags: [
      { label: 'Thiagarajan Kumararaja', href: 'https://en.wikipedia.org/wiki/Thiagarajan_Kumararaja' },
      { label: 'GVM', href: 'https://en.wikipedia.org/wiki/Gautham_Vasudev_Menon' },
      { label: 'Adithya Dhar', href: 'https://en.wikipedia.org/wiki/Aditya_Dhar' },
    ],
    accent: '#64B5F6',
    link: {
      href: 'https://letterboxd.com/prashanth_s95/diary/',
      label: 'My Letterboxd →',
    },
  },
  {
    emoji: '🦁',
    title: '#YelloveForever 💛',
    text: "Die-hard CSK fan and MS Dhoni devotee. Nothing beats a Chepauk evening under the lights — that yellow sea roaring for every helicopter shot. Thala forever.",
    tags: [
      { label: 'CSK', href: 'https://en.wikipedia.org/wiki/Chennai_Super_Kings' },
      { label: 'Dhoni', href: 'https://en.wikipedia.org/wiki/MS_Dhoni' },
      { label: 'Chepauk', href: 'https://en.wikipedia.org/wiki/M._A._Chidambaram_Stadium' },
      { label: 'IPL', href: 'https://en.wikipedia.org/wiki/Indian_Premier_League' },
    ],
    accent: '#FFD54F',
  },
  {
    emoji: '🎵',
    title: 'Rahman Forever',
    text: "AR Rahman's music is the soundtrack to life. Dil Se Re, Kun Faya Kun — these are my go-to tracks. If there's a concert, I'm there, no questions asked.",
    tags: [
      { label: 'AR Rahman', href: 'https://en.wikipedia.org/wiki/A._R._Rahman' },
      { label: 'Dil Se Re', href: 'https://en.wikipedia.org/wiki/Dil_Se_Re' },
      { label: 'Live Concerts' },
      { label: 'BGMs' },
    ],
    accent: '#F48FB1',
  },
];

export default function BeyondCode() {
  return (
    <div className="container">
      <div className="section-label">
        <span className="section-num" style={{ color: 'var(--c-beyond)' }}>05</span>
        <span className="section-name">Beyond Code</span>
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
        When I'm not coding<span style={{ color: 'var(--c-beyond)' }}>.</span>
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
        Spoiler: it mostly involves food, films, and fandom.
      </motion.p>

      <div className="beyond-grid">
        {CARDS.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            className="beyond-card"
            style={{ borderTop: `2px solid ${card.accent}` }}
          >
            {/* Big emoji */}
            <div style={{ fontSize: '2rem', marginBottom: 12 }}>{card.emoji}</div>

            <h3
              style={{
                fontFamily: 'var(--heading)',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--text)',
                marginBottom: 10,
                letterSpacing: '-0.3px',
              }}
            >
              {card.title}
            </h3>

            <p
              style={{
                fontSize: '0.85rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: 16,
              }}
            >
              {card.text}
            </p>

            {card.link && (
              <a
                href={card.link.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: 'var(--mono)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  color: card.accent,
                  marginBottom: 16,
                  transition: 'opacity 0.2s',
                }}
              >
                <SiLetterboxd size={13} />
                {card.link.label}
              </a>
            )}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {card.tags.map((tag) => {
                const tagStyle = {
                  fontFamily: 'var(--mono)',
                  fontSize: '0.62rem',
                  color: 'var(--text-dim)',
                  padding: '3px 8px',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  textDecoration: 'none' as const,
                  cursor: tag.href ? 'pointer' : 'default',
                  transition: 'all 0.2s',
                };
                return tag.href ? (
                  <a
                    key={tag.label}
                    href={tag.href}
                    target="_blank"
                    rel="noreferrer"
                    className="tag-pop"
                    style={tagStyle}
                  >
                    {tag.label}
                  </a>
                ) : (
                  <span
                    key={tag.label}
                    className="tag-pop"
                    style={tagStyle}
                  >
                    {tag.label}
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
