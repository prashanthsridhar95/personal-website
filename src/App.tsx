import { useRef, useCallback } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import BeyondCode from './BeyondCode';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const scrollTo = useCallback((id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = sectionRefs.current[id];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const setRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  const Divider = ({ color }: { color: string }) => (
    <div className="section-divider" style={{ background: color }} />
  );

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Header onScrollTo={scrollTo} />

      <section id="hero" style={{ background: '#08080A' }}>
        <Hero onScrollTo={scrollTo} />
      </section>

      <Divider color="var(--c-about)" />
      <section id="about" ref={setRef('about')} className="section" style={{ background: 'rgba(0, 212, 255, 0.025)' }}>
        <About />
      </section>

      <Divider color="var(--c-skills)" />
      <section id="skills" ref={setRef('skills')} className="section" style={{ background: 'rgba(168, 85, 247, 0.025)' }}>
        <Skills />
      </section>

      <Divider color="var(--c-exp)" />
      <section id="experience" ref={setRef('experience')} className="section" style={{ background: 'rgba(255, 107, 53, 0.025)' }}>
        <Experience />
      </section>

      <Divider color="var(--c-projects)" />
      <section id="projects" ref={setRef('projects')} className="section" style={{ background: 'rgba(255, 45, 120, 0.025)' }}>
        <Projects />
      </section>

      <Divider color="var(--c-beyond)" />
      <section id="beyond" ref={setRef('beyond')} className="section" style={{ background: 'rgba(255, 215, 0, 0.025)' }}>
        <BeyondCode />
      </section>

      <Divider color="var(--c-contact)" />
      <section id="contact" ref={setRef('contact')} className="section" style={{ background: 'rgba(0, 230, 118, 0.025)' }}>
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
