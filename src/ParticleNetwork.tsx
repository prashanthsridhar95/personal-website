import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const isHovering = useRef(false);
  const raf = useRef(0);
  const time = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    let w = 0;
    let h = 0;
    const particles: Particle[] = [];
    const CONNECT_DIST = 140;
    const MOUSE_DIST = 180;
    const COUNT = 70;

    const resize = () => {
      const parent = canvas.parentElement!;
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = w * devicePixelRatio;
      canvas.height = h * devicePixelRatio;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    const init = () => {
      resize();
      particles.length = 0;
      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 1.5 + 1,
        });
      }
    };

    const draw = () => {
      ctx.fillStyle = '#08080A';
      ctx.fillRect(0, 0, w, h);
      time.current += 0.008;

      // Auto-pilot ghost cursor when mouse isn't hovering
      let mx: number, my: number;
      if (isHovering.current) {
        mx = mouse.current.x;
        my = mouse.current.y;
      } else {
        const t = time.current;
        mx = w * 0.5 + Math.sin(t) * w * 0.3 + Math.sin(t * 2.3) * w * 0.1;
        my = h * 0.5 + Math.cos(t * 0.7) * h * 0.25 + Math.cos(t * 1.8) * h * 0.1;
      }

      // Update positions
      for (const p of particles) {
        // Gentle mouse repel / attract
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_DIST && dist > 1) {
          const force = (MOUSE_DIST - dist) / MOUSE_DIST * 0.008;
          p.vx += dx * force;
          p.vy += dy * force;
        }

        // Damping
        p.vx *= 0.995;
        p.vy *= 0.995;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.15;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw mouse connections
      for (const p of particles) {
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_DIST) {
          const alpha = (1 - dist / MOUSE_DIST) * 0.25;
          ctx.strokeStyle = `rgba(202, 255, 4, ${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mx, my);
          ctx.stroke();
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fill();
      }

      raf.current = requestAnimationFrame(draw);
    };

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
      isHovering.current = true;
    };

    const handleLeave = () => {
      isHovering.current = false;
    };

    init();
    raf.current = requestAnimationFrame(draw);

    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouse);
    canvas.addEventListener('mouseleave', handleLeave);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouse);
      canvas.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'auto',
        zIndex: 0,
      }}
    />
  );
}
