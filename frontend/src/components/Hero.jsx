import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

/* ─── Animated canvas background ─── */
const ParticleCanvas = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let W, H;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    /* Floating dots */
    const dots = Array.from({ length: 55 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.5 + 0.15,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      /* Connect nearby dots */
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(234,179,8,${0.07 * (1 - d / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      /* Draw dots */
      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > W) d.vx *= -1;
        if (d.y < 0 || d.y > H) d.vy *= -1;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(234,179,8,${d.alpha})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
};

/* ─── Hero ─── */
const Hero = () => {
  return (
    <>
      <section className="hero" id="home">
        {/* Animated particle canvas */}
        <ParticleCanvas />

        {/* ── LEFT ── */}
        <div className="hero-left">
          <span className="hero-tag">Portfolio</span>

          <h1 className="hero-name">
            Umesh<br />
            Isuranga<span className="dot">.</span>
          </h1>

          <p className="hero-role">Full Stack Developer</p>

          <div className="hero-divider" />

          <p className="hero-desc">
            I craft scalable, innovative web applications that blend clean architecture
            with stunning interfaces — turning complex problems into elegant solutions.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/UmeshIsu" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <Github size={17} />
            </a>
            <a href="https://www.linkedin.com/in/umesh-isuranga/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <Linkedin size={17} />
            </a>
            <a href="mailto:umeshisuranga414@gmail.com" className="social-link" aria-label="Email">
              <Mail size={17} />
            </a>
          </div>
        </div>

        {/* ── RIGHT — photo placeholder ── */}
        <div className="hero-photo">
          <div className="photo-glow" />

          <div className="photo-placeholder">
            {/* Corner frame accent */}
            <div className="photo-frame" />

            {/* Subtle silhouette SVG */}
            <svg
              viewBox="0 0 320 480"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '100%', height: '100%' }}
            >
              {/* Body silhouette */}
              <ellipse className="silhouette-fill" cx="160" cy="150" rx="62" ry="72" />
              <ellipse className="silhouette-stroke" cx="160" cy="150" rx="62" ry="72" />
              <path
                className="silhouette-fill"
                d="M60 480 Q75 310 160 290 Q245 310 260 480Z"
              />
              <path
                className="silhouette-stroke"
                d="M60 480 Q75 310 160 290 Q245 310 260 480Z"
              />
            </svg>

            {/* Replace-me hint */}
            <div className="photo-label">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              Add your photo here
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-hint">
          <div className="scroll-mouse" />
          Scroll
        </div>
      </section>
    </>
  );
};

export default Hero;
