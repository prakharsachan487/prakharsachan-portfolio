import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.css';

export default function Hero({ onShowreel }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 2.8 });

      tl.from('.hero__bg-text span', {
        y: 120,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
      })
      .from('.hero__portrait', {
        scale: 1.3,
        opacity: 0,
        duration: 1.4,
        ease: 'power3.out',
      }, '-=1')
      .from('.hero__tag', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.8')
      .from('.hero__name span', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      }, '-=0.5')
      .from('.hero__title-line', {
        x: -30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.4')
      .from('.hero__statement', {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
      }, '-=0.4')
      .from('.hero__desc', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      }, '-=0.3')
      .from('.hero__meta-item', {
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power2.out',
      }, '-=0.3')
      .from('.hero__cta', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      }, '-=0.2')
      .from('.hero__scroll', {
        opacity: 0,
        duration: 0.6,
      }, '-=0.2');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      {/* Background oversized type */}
      <div className="hero__bg-text" aria-hidden="true">
        <span>VIDEO</span>
        <span>EDITOR</span>
      </div>

      {/* Red corner accents */}
      <div className="hero__corner hero__corner--tl" />
      <div className="hero__corner hero__corner--br" />

      {/* Main content */}
      <div className="hero__content">
        {/* Left — Name */}
        <div className="hero__left">
          <div className="hero__tag">Short-Form · Motion · Storytelling</div>
          <h1 className="hero__name">
            <span>Prakhar</span>
            <span>Sachan</span>
          </h1>
          <div className="hero__title-line">Video Editor & Content Creator</div>
        </div>

        {/* Center — Portrait */}
        <div className="hero__portrait-wrap">
          <div className="hero__portrait-glow" />
          <div className="hero__portrait-ring" />
          <img
            className="hero__portrait"
            src="/images/profile.jpg"
            alt="Prakhar Sachan — Video Editor"
            loading="eager"
          />
          <div className="hero__portrait-scanline" />
          <div className="hero__portrait-glitch" />
        </div>

        {/* Right — Statement */}
        <div className="hero__right">
          <div className="hero__statement">
            Cut.<br />
            Move.<br />
            <em>Impact.</em>
          </div>
          <p className="hero__desc">
            Turning raw footage into content that feels fast, intentional, and impossible to scroll past.
          </p>
          <div className="hero__meta">
            <div className="hero__meta-item">
              <span className="hero__meta-number">06</span>
              <span className="hero__meta-label">Months Exp.</span>
            </div>
            <div className="hero__meta-item">
              <span className="hero__meta-number">∞</span>
              <span className="hero__meta-label">Dedication</span>
            </div>
          </div>
          <button className="hero__cta" data-cursor="cta" onClick={onShowreel}>
            Watch Showreel
            <span className="hero__cta-arrow">→</span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
