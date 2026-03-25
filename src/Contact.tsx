import { useState, useRef, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiArrowUpRight } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    try {
      await emailjs.sendForm(
        'service_33qz0cc',
        'template_7fcuidd',
        formRef.current!,
        '31wOO7duIeAzXk8Pm',
      );
      setSent(true);
      formRef.current?.reset();
      setTimeout(() => setSent(false), 4000);
    } catch {
      setError(true);
      setTimeout(() => setError(false), 4000);
    } finally {
      setSending(false);
    }
  };

  const LINKS = [
    {
      icon: <FiMail size={15} />,
      label: 'hello@prashanthsridhar.com',
      href: 'mailto:hello@prashanthsridhar.com',
    },
    {
      icon: <FiPhone size={15} />,
      label: '+91 80564 33341',
      href: 'tel:+918056433341',
    },
    {
      icon: <FaLinkedinIn size={14} />,
      label: 'linkedin.com/in/prashanthsridhar95',
      href: 'https://linkedin.com/in/prashanthsridhar95',
    },
    {
      icon: <FiMapPin size={15} />,
      label: 'Coimbatore, Tamil Nadu',
    },
  ];

  return (
    <div className="container">
      <div className="section-label">
        <span className="section-num" style={{ color: 'var(--c-contact)' }}>06</span>
        <span className="section-name">Contact</span>
        <div className="section-line" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="heading-lg"
        style={{ marginBottom: 40 }}
      >
        Let's talk<span style={{ color: 'var(--c-contact)' }}>.</span>
      </motion.h2>

      <div className="contact-grid">
        {/* Info column */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
        >
          <p
            style={{
              fontSize: '0.9rem',
              lineHeight: 1.75,
              color: 'var(--text-secondary)',
              marginBottom: 12,
            }}
          >
            Got an idea, a project, or just want to debate the best biriyani in
            Coimbatore? I'm all ears.
          </p>

          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.7rem',
              color: 'var(--text-dim)',
              padding: '12px 16px',
              background: 'rgba(0,230,118,0.05)',
              border: '1px solid rgba(0,230,118,0.15)',
              borderRadius: 'var(--radius)',
              marginBottom: 4,
            }}
          >
            💡 Pro tip: mention biriyani in your message for a faster reply.
          </div>

          {LINKS.map((item) => (
            <div
              key={item.label}
              style={{ display: 'flex', alignItems: 'center', gap: 14 }}
            >
              <span style={{ color: 'var(--text-dim)', flexShrink: 0, transition: 'transform 0.25s', display: 'inline-block' }}>
                {item.icon}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--c-contact)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                    const icon = e.currentTarget.parentElement?.querySelector('span') as HTMLElement;
                    if (icon) icon.style.transform = 'scale(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.transform = 'translateX(0)';
                    const icon = e.currentTarget.parentElement?.querySelector('span') as HTMLElement;
                    if (icon) icon.style.transform = 'scale(1)';
                  }}
                >
                  {item.label}
                  <FiArrowUpRight
                    size={12}
                    style={{ marginLeft: 4, verticalAlign: 'middle' }}
                  />
                </a>
              ) : (
                <span
                  style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}
                >
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
        >
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="input"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="input"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            rows={5}
            className="input"
          />
          <button
            type="submit"
            disabled={sending}
            className="btn btn--accent"
            style={{
              alignSelf: 'flex-start',
              opacity: sending ? 0.5 : 1,
              cursor: sending ? 'wait' : 'pointer',
            }}
          >
            <FiSend size={14} />
            {sending
              ? 'Sending...'
              : sent
                ? 'Sent!'
                : error
                  ? 'Failed — Try Again'
                  : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </div>
  );
}
